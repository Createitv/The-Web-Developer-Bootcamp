const buf1 = Buffer.alloc(10);
console.log(buf1);

const buf2 = Buffer.alloc(5, 15);
console.log(buf2);

const buf3 = Buffer.allocUnsafe(10);
console.log(buf3);

buf2.write("abcedf");
console.log(buf2);

const buf4 = Buffer.from([265, 6.5, -255, "7"]);
console.log(buf4);

const buf5 = Buffer.from("Hello World!");
console.log(buf5);

console.log(buf4.toString());
console.log(buf5.toString());
