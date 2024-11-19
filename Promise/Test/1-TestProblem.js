import {createDirectoryAndFile,createJsonFiles,deleteJsonFile,deleteDirectory} from '../1-problem.js'
let directory=`./fsDirectory`
createDirectoryAndFile(directory)
.then(()=>{ return createJsonFiles(directory)})
.then(()=>{return deleteJsonFile()})
.then(()=>{return deleteDirectory()})
.catch((err)=>console.log(err));
