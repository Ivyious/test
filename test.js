API.on(API.chatLog("donvoo's Skip Calculator",1));
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
    API.chatLog("Mehs To Skip",1);
    API.chatLog(JSON.stringify(d),1);
    }
    if (command == "/best"){
        API.sendChat("donvoo Is Better Then Me");
    }
}
API.on(API.CHAT, chat);
function chat(data){
    if (data.message.slice(0,7) == "JennyxSilent"){
        API.sendChat("Jenny <3 Silent")
    }
    else { console.log("No one said anything that matched")}
}
    


