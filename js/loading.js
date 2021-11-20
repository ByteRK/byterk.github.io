const url = "./json/time.json";
const request = new XMLHttpRequest();
request.open("get", url, true);
request.send();
request.onload = function () {
    let list = document.getElementById("track-list");
    if (request.status === 200) {
        const json = JSON.parse(request.responseText);
        let key;
        let num = 0;
        for (key in json) {
            num++;
        }
        for (let i = num; i !== 0; i--) {
            let newLi = document.createElement("li");
            newLi.innerHTML = "<i class=\"node-icon\"><img alt=\"哎呀！图片不见了\" src=\"img/tb.svg\"></i>" +
                "<span class=\"time\">" + json[i]['time'] + "</span>" +
                "<span class=\"txt\">" + json[i]['text'] + "</span>"
            list.append(newLi);
        }
        console.log("\n\n历程加载成功");
    } else {
        let newLi = document.createElement("li");
        newLi.innerHTML = "<i class=\"node-icon\"><img alt=\"哎呀！图片不见了\" src=\"img/tb.svg\"></i>" +
            "<span class=\"time\">Time获取失败</span>" +
            "<span class=\"txt\">Text获取失败</span>"
        list.append(newLi);
        console.log("\n\n历程获取失败");
    }
}