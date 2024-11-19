import fs from 'fs';
export function deleteDirectory() {
    return new Promise((resolve, reject) => {
      fs.rmdir("fsDirectory", (err) => {
        if (err) {
          console.log("Error deleting the directory:", err);
          reject(err); 
        } else {
          console.log("Deleted the directory successfully");
          resolve(); 
        }
      });
    });
  }
export function deleteJsonFile(){  
    return new Promise((resolve,reject)=>{
        let completed=0;
        for(let i=1;i<=5;i++){
            const fileName = `fsDirectory/file${i}.json`; 
                fs.unlink(fileName,(err)=>{
                    if(err){
                        console.error("Error deleting JSON files:", err);
                        reject(err);
                    } 
                    else{
                        console.log(`File ${fileName} deleted successfully`);
                        completed++;
                        if(completed===5){
                            resolve()
                        }
                    }
                }) 
        }    
    });
}
export function createJsonFiles(){  
    return new Promise((resolve,reject)=>{
        let completed=0;
        for (let i = 1; i <= 5; i++) {
            const fileName = `./fsDirectory/file${i}.json`; 
            fs.writeFile(fileName,`{}`,(err)=>{
                if(err){
                    console.log(`Error creating file ${fileName}:`, err);
                    reject(err)
                }
                else{
                    console.log(`File ${fileName} created successfully`);
                    completed++;
                    if(completed===5){
                        resolve()
                    }
                }
            })
        }  
    })
   
} 
export function createDirectoryAndFile(directory) { 
    return new Promise((resolve,reject)=>{ 
        fs.mkdir(directory,(err)=>{
            if(err){
                console.log("Error creating directory:", err);
                reject(err)
            }  
                console.log("Directory created"); 
                resolve()
        })  
    })
}  
