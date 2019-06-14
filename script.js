function myFun() {
    this.http = new XMLHttpRequest();
}

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