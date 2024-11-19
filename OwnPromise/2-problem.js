import fs from 'fs';

export function readAndConvertToUpperCase(inputFile, outputFile, allFileName) { 
    return new Promise((resolve, reject) => {
        fs.readFile(inputFile,(err,data)=>{
            if(err){
                console.error("Error reading file", err);
                reject(err);
                return;
            } 
            const upperCaseContent = data.toString().toUpperCase(); 
            fs.writeFile(outputFile, upperCaseContent,(err)=>{ 
                if(err){
                    console.error("Error writing file", err);
                    reject(err);
                    return;
                } 
                fs.appendFile(allFileName, `${outputFile}\n`,(err)=>{
                    if(err){
                        console.error("Error appending to file:", err);
                        reject(err);
                        return;
                    } 
                    else{
                        console.log(`Uppercase file created: ${outputFile}`);
                        resolve(); 
                        return;
                    }
                })
            })
        })
    });
}

export function convertToLowerCaseAndSplit(inputFile, outputFile, allFileName) { 
    return new Promise((resolve, reject) => {
        fs.readFile(inputFile, 'utf8',(err,data)=>{
            if(err){
                console.error("Error reading file", err);
                reject(err);
                return;
            } 
            const sentences = data.toLowerCase().split('.').map((sentence) => sentence.trim()).filter((sentence) => sentence);
            const lowerCaseContent = sentences.join('\n'); 
            fs.writeFile(outputFile, lowerCaseContent,(err)=>{
                if(err){
                    console.error("Error writing file", err);
                    reject(err);
                    return;
                }
                fs.appendFile(allFileName, `${outputFile}\n`,(err)=>{
                    if(err){
                        console.error("Error appending to file:", err);
                        reject(err);
                        return;
                    } 
                    else{
                        console.log(`Lowercase file created: ${outputFile}`);
                        resolve();  
                        return; 
                    }
                });
            })
        })
    });
}

export function sortAndWriteSentence(inputFile, outputFile,allFileName) { 
    return new Promise((resolve, reject) => {
        fs.readFile(inputFile, 'utf8',(err,data)=>{
            if(err){
                console.error("Error reading file", err);
                reject(err);
                return;
            }  
            const sortedContent = data.toString().split('\n').sort().join('\n');
            fs.writeFile(outputFile, sortedContent,(err)=>{ 
                if(err){
                    console.error("Error writing file", err);
                    reject(err);
                    return;
                }
                fs.appendFile(allFileName, `${outputFile}\n`,(err)=>{ 
                    if(err){
                        console.error("Error appending to file:", err);
                        reject(err);
                        return;
                    } 
                    else{
                        console.log(`Sorted file created: ${outputFile}`);
                        resolve();  
                        return; 
                    }

                })
            });
        })
    });
}

export function cleanupGeneratedFiles(allFileName) { 
    return new Promise((resolve, reject) => {
        fs.readFile(allFileName, 'utf8',(err,data)=>{
            if(err){
                console.error("Error reading file", err);
                reject(err);
                return;
            } 
            const filesToDelete = data.toString().split('\n').filter((f) => f.trim());
            let completed=0;
            for (const file of filesToDelete) { 
                fs.unlink(file,(err)=>{ 
                    if(err){ 
                        console.error("Error for deleting file", err);
                        reject(err);
                        return;
                    }  
                    else{
                        console.log(`Deleted file: ${file}`); 
                        completed++;
                        if(completed===filesToDelete.length){ 
                            fs.unlink(allFileName,(err)=>{
                                if(err){ 
                                    console.error("Error for deleting filenames.txt ", err);
                                    reject(err);
                                    return;
                                } 
                                else{
                                    console.log(`Cleanup completed: Deleted ${allFileName}`);
                                    resolve(); 
                                    return;
                                }
                            }) 
                           
                        }
                    }
                })
            }
        })
    });
} 

