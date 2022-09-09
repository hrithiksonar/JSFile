const getTodos = (resource) => {
    return new Promise((resolve, reject) => {
        const request = new XMLHttpRequest();
        request.addEventListener("readystatechange", (e) => {
            if (request.readyState == 4 && request.status == 200) {
                const info = JSON.parse(request.responseText)
                resolve(info)
            }
            else if (request.readyState == 4) {
                reject("Could not fetched data")
            }
        });


        request.open("GET", resource);
        request.send();

    });
};

getTodos("books.json").then((data)=>{
    console.log(data)

}).catch((err) => {
    console.log(err)
});


/*nested callbacks
getTodos("books.json").then((data)=>{
    console.log(data)
    getTodos("journals.json").then((data)=>{
        console.log(data)
        getTodos("books.json").then((data)=>{
            console.log(data)
            getTodos("journals.json").then((data)=>{
                console.log(data)
            }).catch((err) => {
                console.log(err)
            });
        }).catch((err) => {
            console.log(err)
        });
    }).catch((err) => {
        console.log(err)
    });
}).catch((err) => {
    console.log(err)
});*/
getTodos("books.json").then((data)=>{
    console.log(data)
    return getTodos("journals.json");}).then((data)=>{
        console.log(data);
    return getTodos("books.json")}).then((data)=>{
        console.log(data);}).catch((err)=>{
            console.log(data)
        })

   