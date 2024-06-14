let newWindow = window.open("", "newWindow", "width=410px, height=410px");
setTimeout(() => {
  newWindow.resizeTo(500, 500);
}, 2000);
setTimeout(() => {
  newWindow.moveTo(200, 200);
}, 4000);
setTimeout(() => {
  newWindow.close();
}, 6000);
