console.log(process.argv[2]);
process.argv.forEach((val, index) => {
	console.log(`${index}, ${val}`);
});

for (var i in process.version) {
	console.log(i, process.versiond);
}
