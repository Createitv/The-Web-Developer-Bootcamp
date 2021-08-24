from flask import Flask, render_template, request, url_for, redirect, flash
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
import click
from dotenv import find_dotenv, load_dotenv
import os
from flask_login import (
    LoginManager,
    UserMixin,
    login_required,
    logout_user,
    login_user,
    current_user,
)


load_dotenv(find_dotenv())
SQLALCHEMY_DATABASE_URI = os.environ.get("SQLALCHEMY_DATABASE_URI")


app = Flask(__name__)
login_manager = LoginManager(app)
login_manager.login_view = "login"

app.config["SECRET_KEY"] = "dev"
app.config["SQLALCHEMY_DATABASE_URI"] = SQLALCHEMY_DATABASE_URI
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False
db = SQLAlchemy(app)


@app.cli.command()
@click.option("--drop", is_flag=True, help="Create after drop")
def initdb(drop):
    if drop:
        db.drop_all()
    db.create_all()
    click.echo("Database ininitialized...")


@app.cli.command()
@click.option("--username", prompt=True, help="Username Used to Login")
@click.option(
    "--password",
    prompt=True,
    help="Password used to Login",
    hide_input=True,
    confirmation_prompt=True,
)
def admin(username, password):
    db.create_all()
    user = User.query.first()
    if user is not None:
        click.echo("Updaing User...")
        user.username = username
        user.set_password(password)
    else:
        click.echo("Creating user.")
        user = User(username=username, name="Admin")
        db.session.add(user)
    db.session.commit()
    click.echo("Done.")


class User(db.Model, UserMixin):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(20))
    username = db.Column(db.String(20))
    password_hash = db.Column(db.String(128))

    def set_password(self, password):
        self.password_hash = generate_password_hash(password)

    def validate_password(self, password):
        return check_password_hash(self.password_hash, password)


class Movie(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    title = db.Column(db.String(60))
    year = db.Column(db.String(4))


@app.cli.command()
def forge():
    """generate fake data

    Returns:
        db: Modul data
    """

    name = "Grey Li"
    movies = [
        {"title": "My Neighbor Totoro", "year": "1988"},
        {"title": "Dead Poets Society", "year": "1989"},
        {"title": "A Perfect World", "year": "1993"},
        {"title": "Leon", "year": "1994"},
        {"title": "Mahjong", "year": "1996"},
        {"title": "Swallowtail Butterfly", "year": "1996"},
        {"title": "King of Comedy", "year": "1999"},
        {"title": "Devils on the Doorstep", "year": "1999"},
        {"title": "WALL-E", "year": "2008"},
        {"title": "The Pork of Music", "year": "2012"},
    ]
    user = User(name=name)
    db.session.add(user)
    for m in movies:
        movie = Movie(title=m["title"], year=m["year"])
        db.session.add(movie)
    db.session.commit()
    click.echo("Done.")


@app.errorhandler(404)
def page_not_found(e):
    user = User.query.first()
    return render_template("404.html"), 404


@app.context_processor
def inject_user():  # 模板上下文处理函数
    user = User.query.first()
    return dict(user=user)


@app.route("/", methods=["GET", "POST"])
def index():
    # print(request.headers)
    if request.method == "POST":
        if not current_user.is_authenticated:
            return redirect(url_for("index"))
        title = request.form.get("title")
        year = request.form.get("year")
        if not title or not year or len(year) > 0 or len(year) > 60:
            flash("Invalid input.")
            return redirect(url_for("index"))
        movie = Movie(title=title, year=year)
        db.session.add(movie)
        db.session.commit()
        flash("Item created.")
    user = User.query.first()
    movies = Movie.query.all()
    return render_template("index.html", movies=movies)


@app.route("/movie/edit/<int:movie_id>", methods=["GET", "POST"])
@login_required
def edit(movie_id):
    movie = Movie.query.get_or_404(movie_id)

    if request.method == "POST":
        title = request.form["title"]
        year = request.form["year"]

        if not title or not year or len(year) != 4 or len(title) > 60:
            flash("Invalid input.")
            return redirect(url_for("edit", movie_id=movie_id))

        movie.title = title
        movie.year = year
        db.session.commit()
        flash("Item updated.")
        return redirect(url_for("index"))

    return render_template("edit.html", movie=movie)


@app.route("/movie/delete/<int:movie_id>", methods=["POST"])
@login_required
def delete(movie_id):
    movie = Movie.query.get_or_404(movie_id)
    db.session.delete(movie)
    db.session.commit()
    flash("Item deleted.")
    return redirect(url_for("index"))


@login_manager.user_loader
def load_user(user_id):
    user = User.query.get(int(user_id))
    return user


@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        username = request.form.get("username")
        password = request.form.get("password")

        if not username or not password:
            flash("Invalid input!")
            return redirect(url_for("login"))
        user = User.query.first()
        if username == user.username and user.validate_password(password):
            login_user(user)
            flash("User login successful")
            return redirect(url_for("index"))
    return render_template("login.html")


@app.route("/logout")
@login_required
def logout():
    logout_user()
    flash("User logout successful")
    return redirect(url_for("index"))


@app.route("/settings", methods=["GET", "POST"])
@login_required
def settings():
    if request.method == "POST":
        name = request.form["name"]

        if not name or len(name) > 20:
            flash("Invalid input.")
            return redirect(url_for("settings"))

        user = User.query.first()
        user.name = name
        db.session.commit()
        flash("Settings updated.")
        return redirect(url_for("index"))

    return render_template("settings.html")


if __name__ == "__main__":
    app.run(debug=True)
