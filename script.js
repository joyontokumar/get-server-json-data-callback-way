function myFun() {
    this.http = new XMLHttpRequest();
}
// get htttp request
myFun.prototype.get = function (url, callback) {
    this.http.open('GET', url, true);
    this.http.onload = () => {
        if (this.http.status === 200) {
            // console.log(this.http.responseText);
            // data ta akani emidatley return korbe. ei datar uppore depend kore jodi onno kichu 2 , 4 second pore call ba kichu show korate chay tahole return  hisabe undefind asbe. karon agai data ta return er mardome distroy hoya gace
            // retrn this.http.responseText;
            callback(this.http.responseText);
        }
    }
    this.http.send();
}

// http post request
myFun.prototype.post = function (url, data, callback) {
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type', 'application/json'); // not mandotory
    this.http.onload = () => {
        callback(this.http.responseText);
    }
    this.http.send(JSON.stringify(data));
}


// http updata request

myFun.prototype.put = function (url, data, callback) {
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('Content-type', 'application/json'); // not mandotory
    this.http.onload = () => {
        callback(this.http.responseText);
    }
    this.http.send(JSON.stringify(data));
}

// http delete request

myFun.prototype.delete = function (url, callback) {
    this.http.open('DELETE', url, true);
    this.http.onload = () => {
        if (this.http.status === 200) {
            callback('post deleted');
        } else {
            callback('Error :' + this.http.responseText);
        }
    }
    this.http.send();
}