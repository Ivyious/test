API.on(API.chatLog("donvoo's Skip Calculator",1));
API.on(API.CHAT_COMMAND, test);
var meh = 200;
function test(chat) {
  var commands = chat;
  if (commands == "/meh") {
    meh = prompt("Please Input How Many People Are In The Room");
    var mehs = meh / .075;
    API.on(API.chatLog("Mehs Needed:"));
    API.on(API.chatLog(mehs));
  }
}
