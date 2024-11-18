import { promises as fs } from 'fs';

export function readAndConvertToUpperCase(inputFile, outputFile, allFileName) { 
    return new Promise((resolve, reject) => {
        fs.readFile(inputFile)
            .then((data) => {
                const upperCaseContent = data.toString().toUpperCase();
                return fs.writeFile(outputFile, upperCaseContent);
            })
            .then(() => {
                return fs.appendFile(allFileName, `${outputFile}\n`);
            })
            .then(() => {
                console.log(`Uppercase file created: ${outputFile}`);
                resolve();
            })
            .catch((err) => {
                console.log("Error in uppercase as ", err);
                reject(err);
            });
    });
}

export function convertToLowerCaseAndSplit(inputFile, outputFile, allFileName) { 
    return new Promise((resolve, reject) => {
        fs.readFile(inputFile, 'utf8')
            .then((data) => {
                const sentences = data
                    .toLowerCase()
                    .split('.')
                    .map((sentence) => sentence.trim())
                    .filter((sentence) => sentence);
                const lowerCaseContent = sentences.join('\n');
                return fs.writeFile(outputFile, lowerCaseContent);
            })
            .then(() => {
                return fs.appendFile(allFileName, `${outputFile}\n`);
            })
            .then(() => {
                console.log(`Lowercase file created: ${outputFile}`);
                resolve();
            })
            .catch((err) => {
                console.log("Error in lowercase as", err);
                reject(err);
            });
    });
}

export function sortAndWriteSentence(inputFile, outputFile,allFileName) { 
    return new Promise((resolve, reject) => {
        fs.readFile(inputFile, 'utf8')
            .then((data) => {
                const sortedContent = data.toString().split('\n').sort().join('\n');
                return fs.writeFile(outputFile, sortedContent);
            })
            .then(() => {
                return fs.appendFile(allFileName, `${outputFile}\n`);
            })
            .then(() => {
                console.log(`Sorted file created: ${outputFile}`);
                resolve();
            })
            .catch((err) => {
                console.log("Error in sort and write as", err);
                reject(err);
            });
    });
}

export function cleanupGeneratedFiles(allFileName) { 
    return new Promise((resolve, reject) => {
        fs.readFile(allFileName, 'utf8')
            .then((data) => {
                const filesToDelete = data.toString().split('\n').filter((f) => f.trim());
                let arr = [];
                for (const file of filesToDelete) {
                    arr.push(
                        fs.unlink(file).then(() => {
                            console.log(`Deleted file: ${file}`);
                        })
                    );
                }
                return Promise.all(arr);
            })
            .then(() => {
                return fs.unlink(allFileName);
            })
            .then(() => {
                console.log(`Cleanup completed: Deleted ${allFileName}`);
                resolve();
            })
            .catch((err) => {
                console.log("Error in cleanup data as ", err);
                reject(err);
            });
    });
} 

