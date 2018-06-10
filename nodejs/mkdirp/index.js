const fs = require('fs')
const path = require('path')
const { promisify } = require('util')
const mkdirAsync = promisify(fs.mkdir)

const args = process.argv.filter((value, index) => index > 1)

if (args.length === 0) {
	console.log("引数に作成したいディレクトリパスを指定してください")
	console.log("例: node index.js \"./dir/hoge/hero\"")
	return 1
}

const mkdirPath = args[0]

const recursiveMkdir = (notExistPath, existPath = '') => {
    if (notExistPath.length == 0) {
        return existPath
    }
    const notExistPathArray = notExistPath.split('/')
    let mkdirPath
    if (existPath.length == 0) {
        mkdirPath = notExistPathArray[0]
    } else {
        mkdirPath = `${existPath}/${notExistPathArray[0]}`
    }
    mkdirAsync(mkdirPath).catch(err => console.log(err))
    const nextNotExistPath = notExistPathArray.filter((v,i) => i !== 0 ).join('/')
    const nextExistPath = mkdirPath
    return recursiveMkdir(nextNotExistPath, nextExistPath)
}

recursiveMkdir(mkdirPath)