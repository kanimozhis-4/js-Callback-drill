/*
    Problem 1:
    
    Using callbacks and the fs module's asynchronous functions, do the following:
        1. Create a directory of random JSON files
        2. Delete those files simultaneously 
*/
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
