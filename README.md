<b>Project Description :</b>

when you want to get server json data and put to your dom application . when you send a request in server then server  take a minisecond time . but we already know
javascript synchronously work. it can't wait the server code execute. but next line emidately show the output server data . then we see the
out show undefined. because javascritp could not find any sever data to show the dom. only variable hoisted working that why show undefinded


<b>so how to solved this problem :</b>

this problem different way to solved. this time i want to try callback function way.
callback function are main feature is when other function execution completed other function means those function where callback function 
used as argument. when main function execution completed then work callback,
that why it show output json data. because callback woking when json data back to my dom . 


<b>GET, POST, PUT, DELETE :</b>
here  i applyed four https request. bellow the structure

<li>GET	/posts</li>
<li>GET	/posts/1</li>
<li>GET	/posts/1/comments</li>
<li>GET	/comments?postId=1</li>
<li>GET	/posts?userId=1</li>
<li>POST	/posts</li>
<li>PUT	/posts/1</li>
<li>PATCH	/posts/1</li>
<li>DELETE	/posts/1</li>









