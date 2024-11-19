import fs from "fs";
export function deleteDirectory() {
  fs.rmdir(`fsDirectory`, (err) => {
    if (err) {
      console.log("error to delete a directory");
    } else {
      console.log("deleted the Directory Successfully");
    }
  });
}
export function deleteJsonFile(callback) {   
  let completed=0;
  for (let i = 1; i <= 5; i++) {
    const fileName = `fsDirectory/file${i}.json`;
    fs.unlink(fileName, (err) => {
      if (err) {
        console.log(`Error deleting file ${fileName}:`, err);
      } else {
        completed++;
        console.log(`File ${fileName} deleted successfully`);
        if(completed===5){
          callback();
        }
      }
    });  
    
  } 
 
 
}
export function createJsonFiles(callback) {
  let completed=0;
  for (let i = 1; i <= 5; i++) {
    const fileName = `fsDirectory/file${i}.json`;
    fs.writeFile(fileName, "{}", (err) => {
      if (err) {
        console.log(`Error creating file ${fileName}:`, err);
      } else {
        console.log(`File ${fileName} created successfully`);
        completed++; 
        if(completed===5){
          callback();
        }
      }
    }); 
    
  }
}
export function createDirectoryAndFile(directory, callback) {
  fs.mkdir(directory, (err) => {
    if (err) {
      console.error("Error creating directory:", err);
    } else {
      console.log("Directory created");
      callback();
    }
  });
}
