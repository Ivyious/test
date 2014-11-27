//All this work is donvoo's :3 <insertcopyright> pff


//Variables
var b = API.getUsers().length;
var c = b - 100;
var cc = c * .10;
var d = Math.round(cc);
var a = localStorage.getItem("babe")
var welcome = "Nightcore Script Running, Go /cmd For Commands"
var ccc = '0';
API.chatLog( welcome,true);
API.on(API.CHAT_COMMAND, test, API.CHAT, chat);
//Commands
function test(data) {
    var command = data;
    if (command == "/meh"){
    API.chatLog("Mehs To Skip: "+JSON.stringify(d),1);
    }
    if (command == "/best"){
        API.sendChat("donvoo Is The Best!");
    }
    if (command == "/madeby"){
        API.chatLog("This Script Was Made By donvoo <---(Very Sexy, 10/10)",1);
        API.chatLog("Document Made By DJ_YoloSwaggins33",1)
    }
    if (command == "/cmd"){
        API.chatLog("Commands: /meh, /madeby, /best, /Rick, /Website, /Ship, /babe, and /cmd",1);
    }
    if (command == "/Ship"){
        API.chatLog("http://imgur.com/gallery/eHGde/new",1)
        API.chatLog("All The Ships!",1)
    }
    if (command == "/set"){
        seto =  prompt("What Would You Like To Text To Be?")
    }
    if (command == "/Rick"){
        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")
    }
    if (command == "/Website"){
        API.chatLog("URL: http://www.nightcore-331.tk/index.php",30)
    }
    if (command == "/babe"){
        API.chatLog("Times donvoo Has Been Mentioned: "+localStorage.getItem("babe"),1)
    }
    if (command == "/resetooo" & data.un == "donvoo"){
       ccc =  prompt("What Would You Like To Set It To")
       localStorage.setItem("babe",ccc)
    }
}
//Chat Triggers
API.on(API.CHAT, chat);
function chat(data){
    if (data.message.slice(0,11) == "WhoMyScript" & data.un == "donvoo" ){
        API.sendChat("I Am donvoo  <3 !")
    }
    if (data.message.slice(0,7) == "@donvoo"){
        if (localStorage.babe) {
        localStorage.babe = parseInt(localStorage.babe)+1} 
            else {localStorage.babe = 1
            }
    }
     if (data.message.slice(0,8) == "RickRoll" & data.un == "donvoo" ){
      window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")   
    }
}
//Final Song Score (WIP)
API.on(API.ADVANCE, callback);
function callback(data){
    API.chatLog("Woots:  "+data.lastPlay.score.positive+"  Grabs:  "+data.lastPlay.score.grabs+"  Mehs:  "+data.lastPlay.score.negative,1)
}

 


