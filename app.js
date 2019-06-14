const mydata = new myFun();

// get post synchronouse way... get data undefined. because if you want to get data in server you need to wait some milisecond, but we know javascript is synchronously work. so execute not stop then next line execute . 
// const mypost = mydata.get('https://jsonplaceholder.typicode.com/posts');
// console.log(mypost);


// callback way to handle server data
mydata.get('https://jsonplaceholder.typicode.com/posts', function (data) {
    console.log(data);
})