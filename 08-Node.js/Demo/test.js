var num = 3;
function a() {
	console.log("a");
	num += 3;
	console.log(num);
}
function b() {
	console.log("b");
	num += 4;
	console.log(num);
}
b(a());
