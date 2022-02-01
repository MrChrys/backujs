const modulo = require("../index.js")

modulo("./", "./Tests", "NormalZip")
modulo("./", "./Tests", "WithoutNM", {
	excludeFolders: [
	"node_modules"
	],
	
	excludeFiles: [
	"test.zip",
	"test3.zip"
	]
})
modulo("./", "./Tests", "OnlyFolders", {
	excludeFiles: [
	"index.js",
	"test.js",
	"test.zip",
	"test2.zip",
	"package.json",
	"package-lock.json",
	""
	]
})