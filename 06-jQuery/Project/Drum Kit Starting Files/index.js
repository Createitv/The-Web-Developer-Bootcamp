let music = {
	w: "./sounds/crash.mp3",
	a: "./sounds/kick-bass.mp3",
	s: "./sounds/snare.mp3",
	d: "./sounds/tom-1.mp3",
	j: "./sounds/tom-2.mp3",
	k: "./sounds/tom-3.mp3",
	l: "./sounds/tom-4.mp3",
};
for (let i = 0; i < document.querySelectorAll(".drum").length; i++) {
	document.querySelectorAll(".drum")[i].addEventListener("click", () => {
		// document.querySelectorAll(".drum")[i].style.color = "black";
		let text = document.querySelectorAll(".drum")[i].textContent;
		let audio_file = music[text];
		// audio = new Audio("./sounds/crash.mp3");
		let audio = new Audio(audio_file);
		audio.play();
	});
}
document.addEventListener("keydown", (e) => {
	if (e.key in music) {
		let audio_file = music[e.key];
		// audio = new Audio("./sounds/crash.mp3");
		let audio = new Audio(audio_file);
		audio.play();
	}
});
