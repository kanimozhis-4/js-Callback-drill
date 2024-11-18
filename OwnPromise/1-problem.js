import { promises as fs } from 'fs';
export  function deleteDirectory(){ 
    return new Promise((resolve,reject)=>{
        fs.rmdir(`fsDirectory`)
        .then(()=>{
            console.log("deleted the Directory Successfully")
            resolve();
         }) 
        .catch((err)=>{
            console.log("error to delete a directory",err)
            reject(err);
        })
    })
   
}
export function deleteJsonFile(){  
    return new Promise((resolve,reject)=>{
        let arr=[];
        for(let i=1;i<=1;i++){
            const fileName = `fsDirectory/file${i}.json`; 
            arr.push(
                fs.unlink(fileName)
                .then(()=>{
                    console.log(`File ${fileName} deleted successfully`);
                })
            )
        }   
        Promise.all(arr)
        .then(()=>{
            resolve();
        }) 
        .catch((err)=>{
            console.error("Error deleting JSON files:", err);
            reject(err)
        })
    })
}
export function createJsonFiles(){  
    return new Promise((resolve,reject)=>{
        let arr=[];
        for (let i = 1; i <= 1; i++) {
            const fileName = `./fsDirectory/file${i}.json`; 
            arr.push(
                fs.writeFile(fileName,`{}`)
                .then(()=>{
                    console.log(`File ${fileName} created successfully`);
                })
                .catch((err)=>{
                    console.log(`Error creating file ${fileName}:`, err);
                })
            )
        }  
        Promise.all(arr)
        .then(()=>{
            resolve();
        }) 
        .catch((err)=>{
            console.error("Error creating JSON files:", err);
            reject(err)
        })
    })
   
}
export function createDirectoryAndFile(directory) { 
    return new Promise((resolve,reject)=>{
        fs.mkdir(directory)
        .then(()=>{
            console.log("Directory created"); 
            resolve()
        })
        .catch((err)=>{
            console.error("Error creating directory:", err);
            reject(err)
        
        })     
    })
}  




