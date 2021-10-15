document.oncontextmenu = function () {
    event.returnValue = false;
    console.log("右键");
}