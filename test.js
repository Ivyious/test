API.on(API.chatLog("Nightcore Room Script Running",1));
API.on(API.CHAT_COMMAND, test);
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
    if (command == "/Best"){
        API.sendChat("donvoo Is Better Then Me, and so is his avatar! Also His avatar is better then Sushi's!");
    }
    if (command == "/madeby"){
        API.chatLog("This Script Was Made By donvoo, Go donvoo!",1);
    }
    if (command == "/cmd"){
        API.chatLog("Commands: /meh, /madeby, /Best, and /cmd",1);
    }
}
API.on(API.CHAT, chat);
function chat(data){
    if (data.message.slice(0,12) == "JennyxSilent"){
        API.chatLog("Jenny <3 Silent",1)
    }
    else { console.log("No one said anything that matched")}
}
    


