import {createDirectoryAndFile,createJsonFiles,deleteJsonFile,deleteDirectory} from '../1-problem.js'
let directory=`./fsDirectory`
createDirectoryAndFile(directory)
.then(()=>{createJsonFiles(directory)})
.then(()=>{deleteJsonFile()})
.then(()=>{deleteDirectory()})
.catch((err)=>console.log(err));
