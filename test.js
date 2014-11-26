API.on(API.chatLog("donvoo's Skip Calculator",1));
API.on(API.CHAT_COMMAND, test);
var meh = 200;
function test(data) {
    var command = data;
    if (command == "/meh"){
    meh = prompt("Please Input How Many People Are In The Room");
    var almost = meh / .075;
    API.on(API.chatLog("Mehs Needed:"));
    API.on(API.chatLog(meh / .075));
    }
}
