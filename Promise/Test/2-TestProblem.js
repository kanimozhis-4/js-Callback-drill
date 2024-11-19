import {readAndConvertToUpperCase,convertToLowerCaseAndSplit,sortAndWriteSentence,cleanupGeneratedFiles} from '../2-problem.js'
const allFileName = 'filenames.txt'; 
readAndConvertToUpperCase('../lipsum.txt', './uppercase.txt', allFileName)
.then(()=>{
    return convertToLowerCaseAndSplit('./uppercase.txt', './lowercase.txt', allFileName)
})
.then(()=>{
    return sortAndWriteSentence(`./lowercase.txt`, `./sorted.txt`,allFileName)
}) 
.then(()=>{
    return cleanupGeneratedFiles(allFileName)
}) 
.catch((err)=>{
    console.log("err in the flow as",err);
})
