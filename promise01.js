///promise-is task that can start now and finish later

//promise is either resolved or rejected

const getSomething = () => {
    return new Promise((resolve, reject) => {
        // write your asyn code here
        resolve("Data fetched successfully");
        reject("Could not fetch the data...");
    });

};
getSomething().then((data) => {
    console.log(data)
}).catch((err) => {
    console.log(err)
})
