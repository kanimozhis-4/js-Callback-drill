import {readAndConvertToUpperCase,convertToLowerCaseAndSplit,sortAndWriteSentence,cleanupGeneratedFiles} from '../2-problem.js';
const allFileName = 'filenames.txt';

readAndConvertToUpperCase('../lipsum.txt', '../uppercase.txt', allFileName, (upperFile) => {
    convertToLowerCaseAndSplit(upperFile, '../lowercase.txt', allFileName, (lowerFile) => {
        sortAndWriteSentence(lowerFile, '../sorted.txt', allFileName, () => {
            cleanupGeneratedFiles(allFileName);
        });
    });
});
