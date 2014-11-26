API.on(API.chatLog("donvoo's Skip Calculator",1));
API.on(API.CHAT_COMMAND, test);
var testtest = "100";
var lala = "hello world";
function test(data) {
    var command = data;
    if (command == "/meh"){
    testtest = prompt("Please Input How Many People Are In The Room");
    API.chatLog("test");
    }
}

