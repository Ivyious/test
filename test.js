API.on(API.chatLog("Nightcore Script Running",1));
API.on(API.CHAT_COMMAND, test);
var e = new Date();
var bug = '100';
var bu = '0';
var b = API.getUsers().length;
var c = b * .075;
var d = Math.round(c)
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
    }
    if (command == "/cmd"){
        API.chatLog("Commands: /meh, /madeby, /best, and /cmd",1);
    }
    if (command == "/JennyxSilent"){
        API.chatLog("http://i.imgur.com/uT7yXPZ.png",1)
        API.chatLog("Please Dont Kill Me JenJen <3",1)
    }
}
API.on(API.CHAT, chat);
function chat(data){
    if (data.message.slice(0,19) == "@SushiNatiliebetter"){
        API.sendChat("donvoo is better then Sushi!!!")
    }
    if (data.message.slice(0,11) == "WhoMyScript"){
        API.sendChat("I'm Using Your Script donvoo-Senpai <3 !")
    }
    else { console.log("No one said anything that matched!")}
}
    


