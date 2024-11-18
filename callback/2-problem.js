import fs from 'fs'

export function readAndConvertToUpperCase(inputFile, outputFile, allFileName, callback) {
    fs.readFile(inputFile, 'utf8', (err, data) => {
        if (err){
            return console.error('Error reading file:', err);
        } 
        const upperCaseContent = data.toString().toUpperCase();
        fs.writeFile(outputFile, upperCaseContent, (err) => {
            if (err){
                return console.error('Error writing file:', err);
            } 
            fs.appendFile(allFileName, `${outputFile}\n`, (err) => {
                if (err){
                    return console.error('Error logging filename:', err);
                } 
                console.log(`Uppercase file created: ${outputFile}`);
                callback(outputFile);  
            });
        });
    });
}

export function convertToLowerCaseAndSplit(inputFile, outputFile, allFileName, callback) {
    fs.readFile(inputFile, 'utf8', (err, data) => {
        if (err){
            return console.error('Error reading file:', err);
        } 
        const sentences = data.toLowerCase().split('.').map(sentence => sentence.trim()).filter(sentence => sentence);
        const lowerCaseContent = sentences.join('\n');
        fs.writeFile(outputFile, lowerCaseContent, (err) => {
            if (err){
                return console.error('Error writing file:', err);
            } 
            fs.appendFile(allFileName, `${outputFile}\n`, (err) => {
                if (err){
                    return console.error('Error logging filename:', err);
                } 
                console.log(`Lowercase file created: ${outputFile}`);
                callback(outputFile);  
            });
        });
    });
}

export function sortAndWriteSentence(inputFile, outputFile,allFileName, callback) {
    fs.readFile(inputFile, 'utf8', (err, data) => {
        if (err){
            return console.error('Error reading file:', err);
        } 

        const sortedContent = data.toString().split('\n').sort().join('\n');
        fs.writeFile(outputFile, sortedContent, (err) => {
            if (err){
                return console.error('Error writing file:', err);
            }
            fs.appendFile(allFileName, `${outputFile}\n`, (err) => {
                if (err){
                    return console.error('Error logging filename:', err);
                } 
                console.log(`Sorted file created: ${outputFile}`);
                callback(); 
            });
        });
    });
}

export function cleanupGeneratedFiles(allFileName) {
    fs.readFile(allFileName, 'utf8', (err, data) => {
        if (err){
            return console.error('Error reading log file:', err);
        } 
        
        const filesToDelete = data.toString().split('\n').filter(f => f.trim());
        console.log(filesToDelete)

        filesToDelete.forEach((file) => {
            fs.unlink(file, (err) => { 
                if (err){ 
                    console.error(`Error deleting file ${file}:`, err);
                }
            });  
           

        }); 
        fs.unlink(allFileName, (err) => {
            if (err){
                console.error('Error deleting log file:', err); 
            }
        });
    });
}

