class KK {

    init(){
        const url = "https://api.hackerjk.top/Tools/kk_weather.php";
        const request = new XMLHttpRequest();
        request.open("get", url,true);
        request.send();
        request.onload = function () {
            if (request.status === 200) {
                console.log("天气获取成功！");
                const json = JSON.parse(request.responseText);

                document.getElementById("kk_icon").className= 'qi-'+json.icon;
                document.getElementById('kk_temp').innerHTML = json.temp;
                document.getElementById('kk_city').innerHTML = json.city;

                document.getElementById('kk_weather').style.display = 'block';


                console.log(request.responseText);
            }
        }
    }
}

const kk=new KK()
kk.init()
