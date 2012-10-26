/**
 * @author ChetanD
 */

Title:BinaryJs
Author:"BinaryJs"
Github:https://github.com/binaryjs/binaryjs
website:http://binaryjs.com/
Installation:npm install binaryjs
Purpose: Real time data streaming

Thumps Up: 
         i found many real time libary like socket.io and stream from native node.js .But on thing fasinating about binaryJs is it allow us to create
         streaming server from client side.this is osm. in one project i need to stream data from client to another client through server. It is perfectly 
         fit into it. Yeah another thing, how can i miss this ?? as name tells it stream binary data so I find it is fast.
         It has very  simple api.They are using websocket feature from html5.And we can hook up it with your http server like socket.io!!! Unlike socket.io
         which send data from client on event like say socket.emit() function. but in binaryJs we can create stream from client to server this is osm.Still 
         i am exploring it. 
         
Thumps Down:
         I do not know how to host app which is using binary js.
         

API explored:
       1) there are many function on 'on' event like 'data' ,'end' and all
       2) BinaryClient constructore use to create binary server at client side!!! arguments are simple websocket address of binaryserver with whom you want 
          to connect..  
          

