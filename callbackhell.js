//callback hell

//request to api
///I may need the request to follow particular sequence

//library.json
//books.json
const getTodos = (resource,callback) => {
    const request = new XMLHttpRequest();
    request.addEventListener("readystatechange", (e) => {
        if (request.readyState == 4 && request.status == 200) {
            const info=JSON.parse(request.responseText)
            callback(undefined,info)
           // console.log(request.responseText);
        }
        else if (request.readyState == 4) {
            callback("could not load/fetch data",undefined)
            //console.log("could not load")
        }
    });

    request.open("GET", resource);
    request.send();

}

getTodos("books.json",(err,data)=>{
    if(err){        // callback hell
        console.log(err);
    }
    else{
        console.log("Books.json\n\n")
       for(let i=0;i<data.length;i++){
        console.log(data[i].title)
        console.log(data[i].author)
        console.log(data[i].price)
       }
       console.log("\nJournals.json\n")

       getTodos("journals.json",(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
           for(let i=0;i<data.length;i++){
            console.log(data[i].title)
            console.log(data[i].author)
            console.log(data[i].journal)
           }
            
        }
    });
        
    }
});

/* do like this if sequence is not required
getTodos("books.json",(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
        console.log("Books.json\n\n")
       for(let i=0;i<data.length;i++){
        console.log(data[i].title)
        console.log(data[i].author)
        console.log(data[i].price)
       }
    }
});

getTodos("journals.json",(err,data)=>{
    if(err){
        console.log(err);
    }
    else{
       for(let i=0;i<data.length;i++){
        console.log(data[i].title)
        console.log(data[i].author)
        console.log(data[i].journal)
       }
        
    }
});*/