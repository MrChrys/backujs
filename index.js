




const AdmZip = require("adm-zip");
const fs = require("fs")
const path = require("path")

module.exports = async function backupFilesInZip(localPath, outputPath, outputName, options={}) {
async function zipFiles() {

        const zip = new AdmZip();
        
        const outputFile = outputName.endsWith(".zip") ? outputName : outputName+".zip"

        if (fs.existsSync(outputPath+outputFile)) {

            fs.unlinkSync(outputPath+outputFile)

}
files = fs.readdirSync(localPath)

files.forEach((file) => {
if (fs.lstatSync(localPath+file).isDirectory() == true) {
if (options.excludeFolders && options.excludeFolders.includes(file)) return
zip.addLocalFolder(`${localPath}${file}`, file)
console.log(file)
} else {
if (options.excludeFiles && options.excludeFiles.includes(file)) return
zip.addLocalFile(localPath+file)

console.log(file)
}
})
        
        await zip.writeZip(path.join(outputPath, outputFile));

}
await zipFiles();
}