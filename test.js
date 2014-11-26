API.on(API.chatLog("donvoo's Skip Calculator",1));
var meh = 200;
function test(chat) {
  var command = chat;
  if (command == "/meh") {
    meh = prompt("Please Input How Many People Are In The Room");
    var mehs = meh / .075;
    API.on(API.chatLog("Mehs Needed:"));
    API.on(API.chatLog(mehs));
  }
}
