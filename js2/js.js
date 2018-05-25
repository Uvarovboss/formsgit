var Days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
var Month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];
document.getElementById('btn-search').onclick = function () {
    var city = document.getElementById('select-city').value;
    var reqGetWeather =
        'https://api.openweathermap.org/data/2.5/find?q=' +
        city +
        '&units=metric&appid=f65a144af2c21696d1eba90d0e96d77a';

    var reqOdj = request(reqGetWeather);
    var temperature = reqOdj.list[0].main.temp;
    var cityRes = reqOdj.list[0].name;
    var iconCode = reqOdj.list[0].weather[0].icon;
    var descr = reqOdj.list[0].weather[0].description;
    write(temperature, cityRes, iconCode, descr);
};

function request(url) {
    var weather = new XMLHttpRequest();
    weather.open('GET', url, false);
    weather.send();
    return JSON.parse(weather.response);
}
function write(temperature, city, img, description) {
    var today = new Date();

    document.getElementById('day').innerHTML = Days[today.getDay()];
    document.getElementById('date').innerHTML = today.getDate() + ' ' + Month[today.getMonth()] + ' ' + today.getFullYear();
    document.getElementById('temparature').innerHTML = temperature;
    document.getElementById('city-name').innerHTML = city;
    document.getElementById('weather').innerHTML = '<img src =' + 'https://openweathermap.org/img/w/' + img + '.png' + '>';
    document.getElementById('description').innerHTML = description;
}