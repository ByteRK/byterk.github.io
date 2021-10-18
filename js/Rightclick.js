document.oncontextmenu = function () {
    event.returnValue = false;
    console.log("右键被我关了哦~~~");
}