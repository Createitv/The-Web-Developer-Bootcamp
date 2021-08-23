from flask import Flask

app = Flask(__name__)

@app.route('/')
def index():
    return "欢迎来到我的WatchList"

if __name__ == '__main__':
    app.run(debug=True)