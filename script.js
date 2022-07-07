// task 1 --------------------
const param = {
    "url": "https://api.openweathermap.org/data/2.5/",
    "appid": "0f6f682be05c12bc8e85ac01c2e99e07"
}


document.getElementById('#city').onchange = getWeather;



function getWeather() {
    const cityId = document.getElementById('#city').value;
    fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
        .then(data => {
            return data.json()
        })
        .then(showWeather)

    function showWeather(data) {

        // Shortened data

        let humidity = data.main.humidity;
        let temp = data.main.temp;
        let tempMax = data.main.temp_max;
        let tempMin = data.main.temp_min;
        let cityName = data.name;
        let wind = data.wind.speed;

        // Showing data

        document.querySelector('.temp').innerHTML = Math.round(temp) + '&deg;';
        document.querySelector('.temp-max').innerHTML = 'Max temperature ' + Math.round(tempMax) + '&deg;';
        document.querySelector('.temp-min').innerHTML = 'Min temperature ' + Math.round(tempMin) + '&deg;';
        document.querySelector('.wind').textContent = 'Wind speed: ' + wind + ' m/s';
        document.querySelector('.humidity').textContent = 'Humidity: ' + humidity;
        document.querySelector('.city-name').textContent = cityName;
        document.querySelector('.out-picture').innerHTML = `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@4x.png">`;
    }

}


getWeather();




// console.log(cityName);

// console.log(data);
