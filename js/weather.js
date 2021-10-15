(function (a, h, g, f, e, d, c, b) {
    b = function () {
        d = h.createElement(g);
        c = h.getElementsByTagName(g)[0];
        d.src = e;
        //d.charset = "utf-8";
        d.async = true;
        c.parentNode.insertBefore(d, c)
    };
    a["SeniverseWeatherWidgetObject"] = f;
    a[f] || (a[f] = function () {
        (a[f].q = a[f].q || []).push(arguments)
    });
    a[f].l = +new Date();
    if (a.attachEvent) {
        a.attachEvent("onload", b)
    } else {
        a.addEventListener("load", b, false)
    }
}(window, document, "script", "SeniverseWeatherWidget", "//cdn.sencdn.com/widget2/static/js/bundle.js?t=" + parseInt((new Date().getTime() / 100000000).toString(), 10)));
window.SeniverseWeatherWidget('show', {
    flavor: "bubble",
    location: "WX4FBXXFKE4F",
    geolocation: true,
    language: "zh-Hans",
    unit: "c",
    theme: "auto",
    token: "20f97289-5d56-4879-805d-c4df5408b7d9",
    //20f97289-5d56-4879-805d-c4df5408b7d9
    //官网
    //4d55fc27-e045-4b12-a330-44b2d98f60ef
    hover: "disabled",
    container: "tp-weather-widget"
})