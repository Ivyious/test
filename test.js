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
var tt = "test";
var counter = '0';

counter = setInterval(function (){counter = counter + 1},1000)
API.chatLog(welcome,true);
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
    if (command == "/getmeh"){
        var tt = getIdo(-1)
        API.chatLog("People Who Mehed: "+JSON.stringify(tt),1)
    }
    if (command == "/battle"){
        var matho = Math.random(1) * 10;
        var P1 = prompt("Who Will Do The Killing?")
        var P2 = prompt("Who Will Get Killed?")
        if (matho > 5 ){
        API.sendChat("A Wild "+P1+" Appeared... "+P1+" Used a GIANT FUCKING KNIFE On "+P2+" ...It's Super Effective!... "+P2+" Faints!")
        }
        if (matho < 5)
        {
        API.sendChat("A Wild "+P1+" Appeared... "+P1+" Used a GIANT FUCKING KNIFE On "+P2+" ...It's Not Very Effective!... "+P1+" Faints From Shame!")
        }
        else{API.sendChat("Battle Failed!")}
        
    }
    if (command == "/resetsongtime"){
        localStorage.setItem("songTime",0) 
    }
    if (command == "/time"){
        API.chatLog("Time You Have Been In Room",1);
        API.chatLog("Seconds: "+counter,1);
        var larr = counter / 60;
        var larrr = Math.floor(larr);
        var larrrr = Math.floor(larr * 100)/100;
        var dar = counter / 3600;
        var darr = Math.floor(dar*100)/100;
        API.chatLog("Minutes: "+larrrr,1);
        API.chatLog("Hours: : "+darr,1);
    }
    if (command == "/faggot"){
        API.sendChat(":lenny: Donvoo is a faggot in 10 :lenny:");
        setTimeout(basedd,10000)
        function basedd(){
            API.sendChat(":KappaGif: Donvoo is a faggot! :KappaGif:")
        }
    }
    if (command == "/bassdropfake"){
        API.sendChat(":Basssss: Dropping The Bass In 10! :Basssss:");
        setTimeout(baseddd,10000)
        function baseddd(){
            API.sendChat(":SadBear: Wait... Wheres My Base Drop??? :SadBear:")
        }
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
    API.chatLog(data.lastPlay.media.duration,1)
    if (localStorage.songTime) {
        localStorage.songTime = parseInt(localStorage.songTime)+counter} 
            else {localStorage.songTime = 1
            }
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
//Get Mehs
function getIdo(vote) {
        var usersVoted = [];
        var users = API.getUsers();
        for (var i = 0; i < users.length; i++) {
                if (users[i].vote===vote) {
                        usersVoted.push(users[i]);
                }
        };
        return usersVoted;
}
    return /Ctrl/i.test(username);
}
API.on(API.USER_JOIN,laquit);
function laquit(user){
    var username = user.username;
    if (user.level < 3){
        API.chatLog("A User Under Lv 3 Has Joined, Name: @"+user.username,1)
    }
}


