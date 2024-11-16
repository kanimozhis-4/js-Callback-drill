import {createDirectoryAndFile,createJsonFiles,deleteJsonFile,deleteDirectory} from '../1-problem.js'
let directory=`fsDirectory`
createDirectoryAndFile(directory,()=>{
    createJsonFiles(directory,()=>{
        createJsonFiles(directory,()=>{ 
            deleteJsonFile(()=>{ 
                deleteDirectory();

            })

        })
    });
})
