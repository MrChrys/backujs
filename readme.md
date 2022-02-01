# BackupJS

## Modules

[Adm-Zip](https://www.npmjs.com/package/adm-zip)

### Um modulo feito para fazer backup dos arquivos do projeto

## Instalação
```
npm i backupjs
```

```
yarn add backupjs
```

# Métodos de Uso

## Normal
```js
const backupFiles = require("backupjs")
// ou
// import backupFiles from 'backupjs'

//backupFiles("Path", "outputPath", "outputName", {options})

backupFiles("./", "./", "backup.zip")
// Comprime todos os arquivos e diretórios em um .zip

backupFiles("./", "./", "backup2")
// Faz exatamente o mesmo
```

## Isolando pastas ou arquivos
```js
const backupFiles = require("backupjs")
// or
// import backupFiles from 'backupjs'

//backupFiles("Path", "outputPath", "outputName", {options})

backupFiles("./", "./", "backup.zip", { excludeFolders: ["node_modules"] })
// Comprimi todos os arquivos e diretórios excluindo "node_modules"

backupFiles("./", "./", "backup.zip", { excludeFiles: ["index.js"] })
// Comprimi todos os arquivos e diretórios excluindo "index.js"
```