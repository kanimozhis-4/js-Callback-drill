/*
    1. Create a Promise that resolves with the number 10 after
       3 seconds
    2. Create another Promise that resolves with the number
       20 after 5 seconds

    How can we log out the sum (30) of these two resolved values
    once, after BOTH promises successfully fulfill?

    HINT: Use Google/Documentation to help find an answer
    HINT2: You can Google for something like:
           "resolve 2 promises at the same time javascript"
*/ 
let func1=()=>{
    return new Promise((resolve,reject)=>{ 
        setTimeout(()=>{
            resolve(10);
        },3000)
    })
}  
let func2=()=>{
    return new Promise((resolve,reject)=>{ 
        setTimeout(()=>{
            resolve(20);
        },5000)
    })
}  
Promise.all([func1(),func2()])
.then((datas)=>{
    let ans=datas.reduce((acc,data)=>{
        acc+=data
        return acc
    },0) ;  
    console.log(ans);
});

