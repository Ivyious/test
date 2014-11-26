API.on(API.chatLog("donvoo's Skip Calculator",1));
API.on(API.CHAT_COMMAND, test);
var bug = '100';
var bu = '0';
var b = API.getUsers().length;
var c = b * .075;
function test(data) {
    var command = data;
    if (command == "/meh"){
    //bug = prompt("Please Input How Many People Are In The Room");
    bu = bug * .075
    API.chatLog("Mehs To Skip",1);
    API.chatLog(JSON.stringify(c),1);
    }
}

