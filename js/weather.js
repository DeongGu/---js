const API_KEY = "99bcd3cb21ee1fe82d2e6d081ad1adfc";
function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            const city = document.querySelector("#weather span:last-child");
            const icon = document.querySelector('#weatherImage');
            let weatherIcon = {
                '01' : 'fas fa-sun',
                '02' : 'fas fa-cloud-sun',
                '03' : 'fas fa-cloud',
                '04' : 'fas fa-cloud-meatball',
                '09' : 'fas fa-cloud-sun-rain',
                '10' : 'fas fa-cloud-showers-heavy',
                '11' : 'fas fa-poo-storm',
                '13' : 'fas fa-snowflake',
                '50' : 'fas fa-smog'
            }
            city.innerText = data.name;
            weather.innerText = `${data.weather[0].main}/ ${data.main.temp}°C`;
            icon.className = `${weatherIcon[data.weather[0].icon.substring(0,2)]}`;
        });
}
function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);