import { promises as fs } from 'fs';
export  function deleteDirectory(){ 
    return fs.rmdir(`fsDirectory`)
    .then(()=>{
        console.log("deleted the Directory Successfully");
    }) 
    .catch((err)=>{
        console.log("error to delete a directory",err);
    })
   
}
export function deleteJsonFile(){  
    let arr=[];
    for(let i=1;i<=5;i++){
        const fileName = `fsDirectory/file${i}.json`; 
        arr.push(
            fs.unlink(fileName)
            .then(()=>{
                console.log(`File ${fileName} deleted successfully`);
            })
            .catch((err)=>{
                console.log(`Error deleting file ${fileName}:`, err);
            })
        )
    }   
    return Promise.all(arr);


}
export function createJsonFiles(){  
    let arr=[];
    for (let i = 1; i <= 5; i++) {
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
    return Promise.all(arr);
   
}
export function createDirectoryAndFile(directory) { 
    return fs.mkdir(directory)
    .then(()=>{
        console.log("Directory created");
    })
    .catch((err)=>{
        console.error("Error creating directory:", err);
    
    })    
}  




