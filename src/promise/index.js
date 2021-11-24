const somethingWillHappen = () =>{
    return new Promise((resolve, reject) => {
        if(true){
            resolve("Hey!")
        }else{
            reject('Whooops!')
        }
    });
};


somethingWillHappen()
.then(res => console.log(res))
.catch(err => console.log(err))

const somethingWillHappen2 = () =>{
    return new Promise((resolve, reject) =>{
        if(true){
            setTimeout(() => {
                resolve("True")
            }, 2000)
        }else{
            const error = new Error("Whoops!");
            reject(error);
        }
    })
}

somethingWillHappen2()
.then(res => console.log(res))
.catch(err => console.log(err))

Promise.all([somethingWillHappen(), somethingWillHappen2()])
.then(res => {
    console.log("Array of results", res);
})
.catch(err => console.log(err))