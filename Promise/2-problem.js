import { promises as fs } from 'fs';

export function readAndConvertToUpperCase(inputFile, outputFile, allFileName) { 
    return fs.readFile(inputFile)
    .then((data)=>{
        const upperCaseContent = data.toString().toUpperCase();  
        return  fs.writeFile(outputFile, upperCaseContent) 
    })
    .then(()=>{
        return fs.appendFile(allFileName, `${outputFile}\n`)
    })
    .then(()=>{
        console.log(`Uppercase file created: ${outputFile}`);
    })
    .catch((err)=>{
        console.log("error in uppercase as ",err);
    })   
}

export function convertToLowerCaseAndSplit(inputFile, outputFile, allFileName) { 
    return fs.readFile(inputFile, 'utf8')
    .then((data)=>{
        const sentences = data.toLowerCase().split('.').map(sentence => sentence.trim()).filter(sentence => sentence);
        const lowerCaseContent = sentences.join('\n');
        return fs.writeFile(outputFile, lowerCaseContent) 
    })
    .then(()=>{
        return fs.appendFile(allFileName, `${outputFile}\n`)
    })
    .then(()=>{
        console.log(`Lowercase file created: ${outputFile}`);
    }) 
    .catch((err)=>{
        console.log("error in lowercae as",err);
    })
        
}

export function sortAndWriteSentence(inputFile, outputFile,allFileName) { 
    return fs.readFile(inputFile, 'utf8')
    .then((data)=>{
        const sortedContent = data.toString().split('\n').sort().join('\n');
        return fs.writeFile(outputFile, sortedContent)
    })
    .then(()=>{
        return fs.appendFile(allFileName, `${outputFile}\n`)
    })
    .then(()=>{
        console.log(`Sorted file created: ${outputFile}`);
    })
    .catch((err)=>{
        console.log("error in sort and write as",err);
    })
}

export function cleanupGeneratedFiles(allFileName) { 
    return fs.readFile(allFileName, 'utf8')
    .then((data)=>{
        const filesToDelete = data.toString().split('\n').filter(f => f.trim());
        let arr=[];
        for (const file of filesToDelete) { 
            arr.push(fs.unlink(file)
            .then(()=>{
                console.log(`Deleted file: ${file}`);
            })
            )
        } 
        return Promise.all(arr)
    })
    .then(()=>{
        return fs.unlink(allFileName)
    }) 
    .catch((err)=>{
        console.log("errorr in cleanup data as ",err);
    })
} 

