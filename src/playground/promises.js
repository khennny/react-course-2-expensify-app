const promise = new Promise((resolve,reject) => {    
    /*
    setTimeout(() => {
        resolve('This is my resolved data');
    }, 5500)
    */
    reject('Something went wrong!');
});

console.log('Before');

promise.then((data) => {
    console.log(data);
},(error) => {
    console.log('error: ',error);
});

console.log('After');