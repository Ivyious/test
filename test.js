//All this work is donvoo's :3 <insertcopyright> pff
//Variables
var b = API.getUsers().length;
var c = b - 100;
var cc = c * .10;
var d = Math.round(cc);
var a = localStorage.getItem("babe")
var welcome = "Nightcore Script Running, Go /cmd For Commands"
var ccc = '0';
var ddd = "nada";
var eee = "@donvoo";
var zzz = "test"
API.chatLog( welcome,true);
API.on(API.CHAT_COMMAND, test);
API.on(API.CHAT, test)

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
    if (command == "/resetooo"){
       ccc =  prompt("What Would You Like To Set It To")
       localStorage.setItem("babe",ccc)
    }
    if (command == "/mute"){
        ddd = prompt("Mute Who")
        var ggg = getId("@"+ddd)
        API.moderateMuteUser(JSON.stringify(ggg),1,API.MUTE.SHORT)
    }
    if (command == "/donteverusethiscommand"){
        zzz = prompt("Ban Who")
        var yyy = getId("@"+zzz)
        API.moderateBanUser(JSON.stringify(yyy),1,API.BAN.PERMA)
    }
    if (command == "/id"){
        eee = prompt("Whos Id Do You Want?")
        var fff = getId("@"+eee)
        API.chatLog(JSON.stringify(fff),1)
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
    API.chatLog("DJ: "+data.lastPlay.dj.username,1)
    
}
//User ID
function getId(username) {
        username = username.substr(1);
        var users = API.getUsers();
        for (var i = 0; i < users.length; i++) {
                if (users[i].username===username) {
                        return users[i].id;
                }
        };
        return false;
}
 


