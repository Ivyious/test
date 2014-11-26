API.on(API.chatLog("Nightcore Script Running",1));
API.on(API.CHAT_COMMAND, test);
var e = new Date();
var bug = '100';
var bu = '0';
var b = API.getUsers().length;
var c = b * .075;
var d = Math.round(c)
var seto = "Nothing has been set"
var lala = document.getElementByClassName("vote").bottom()
function test(data) {
    var command = data;
    if (command == "/meh"){
    //bug = prompt("Please Input How Many People Are In The Room");
    bu = bug * .075
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
        API.chatLog("Commands: /meh, /madeby, /best, /Rick, and /cmd",1);
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
    if (command == "/Test"){
        API.chatLog(lala,1)
    }
}
API.on(API.CHAT, chat);
function chat(data){
    if (data.message.slice(0,4) == "seto" & data.un == "donvoo"){
        API.sendChat(seto)
    }
    if (data.message.slice(0,11) == "WhoMyScript" & data.un == "donvoo" ){
        API.sendChat("I'm Using Your Script donvoo-Senpai <3 !")
    }
     if (data.message.slice(0,8) == "RickRoll" & data.un == "donvoo" ){
      window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ")   
     }
    else { console.log("No one said anything that matched!")}
}
    


