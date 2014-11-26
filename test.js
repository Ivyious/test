API.on(API.chatLog("donvoo's Skip Calculator",1));
API.on(API.CHAT_COMMAND, test);
var bug = '100';
function test(data) {
    var command = data;
    if (command == "/meh"){
    bug = prompt("Please Input How Many People Are In The Room");
    API.chatLog("larg");
    }
}

