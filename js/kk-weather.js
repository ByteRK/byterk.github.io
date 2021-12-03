class KK {
    init(){
        const url = "https://api.hackerjk.top/tools/kk_weather.php";
        const request = new XMLHttpRequest();
        request.open("get", url,true);
        request.send();
        request.onload = function () {
            if (request.status === 200) {
                const json = JSON.parse(request.responseText);

                if(json.state === 503){
                    console.log("%c天气获取失败！", "color: #FC427B");
                }else if(json.state === 418){
                    console.log("%c天气获取成功！", "color: #16a085");
                    document.getElementById("kk_icon").className= 'qi-'+json.now.icon;
                    document.getElementById('kk_temp').innerHTML = json.now.temp;
                    document.getElementById('kk_city').innerHTML = json.city;
                    document.getElementById('kk_weather').style.display = 'block';
                }else{
                    console.log("%c天气出了未知错误！", "color: #FC427B");
                }
            }else{
                console.log("%c咦~好像天气接口出了问题", "color: #FC427B");
            }
        }
    }
}
const kk=new KK()
kk.init()
