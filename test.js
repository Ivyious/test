API.on(API.chatLog("Nightcore Script Running, Go /cmd For Commands",1));
API.on(API.CHAT_COMMAND, test);
//Variables
var b = API.getUsers().length;
var c = b * .075;
var d = Math.round(c);
//Commands
function test(data) {
    var command = data;
    if (command == "/meh"){
    API.chatLog("Mehs To Skip:",1);
    API.chatLog(JSON.stringify(d),1);
    }
    if (command == "/best"){
        API.sendChat("donvoo Is The Best!");
    }
    if (command == "/madeby"){
        API.chatLog("This Script Was Made By donvoo, Go donvoo!",1);
        API.chatLog("Documents made by DJ_YoloSwaggins33, What a scrub!",1)
    }
    if (command == "/cmd"){
        API.chatLog("Commands: /meh, /madeby, /best, /Rick, /Website and /cmd",1);
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
}
//Chat Triggers
API.on(API.CHAT, chat);
function chat(data){
    if (data.message.slice(0,11) == "WhoMyScript" & data.un == "donvoo" ){
        API.sendChat("I'm Using Your Script donvoo-Senpai <3 !")
    }
    if (data.message.slice(0,7) == "@donvooo" & data.un == "SushiNatilie" ){
        API.sendChat("Why Would You Say that!?!",1)
    }
     if (data.message.slice(0,8) == "RickRoll" & data.un == "donvoo" ){
      window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")   
    }
}
    


