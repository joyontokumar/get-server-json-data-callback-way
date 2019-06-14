const mydata = new myFun();

// get post synchronouse way... get data undefined. because if you want to get data in server you need to wait some milisecond, but we know javascript is synchronously work. so execute not stop then next line execute . 
// const mypost = mydata.get('https://jsonplaceholder.typicode.com/posts');
// console.log(mypost);


// callback way to handle server data
mydata.get('https://jsonplaceholder.typicode.com/posts', function (data) {

    const outputdata = JSON.parse(data);
    //console.log(outputdata);

    let output = '';
    outputdata.forEach(element => {
        output += `<div class="single-element">
            <h6>${element.title}</h6>
            <p>${element.body}</p>
        </div>`;
    });
    document.getElementById('output').innerHTML = output;
});

// --------------post request retrive data ------  //

// create data
const data = {
    title: 'this is another blog post update',
    body: 'this is custom post in my json server. easy way you can get the json data'
}

// catch data
mydata.post('https://jsonplaceholder.typicode.com/posts/', data, function () {
    //console.log(data);

    let output = '';
    output += `<div class="single-element">
            <h6>${data.title}</h6>
            <p>${data.body}</p>
        </div>`;
    document.getElementById('output2').innerHTML = output;
});

// --------------put request update data ------  //
mydata.put('https://jsonplaceholder.typicode.com/posts/1', data, function () {
    console.log(data);

    let output = '';
    output += `<div class="single-element">
            <h6>${data.title}</h6>
            <p>${data.body}</p>
        </div>`;
    document.getElementById('output3').innerHTML = output;
});

// --------------delete request update data ------  //

mydata.delete('https://jsonplaceholder.typicode.com/posts/1', function (err, respniseData) {
    if (err) {
        console.log(err);
    } else {
        console.log(respniseData);
    }
});