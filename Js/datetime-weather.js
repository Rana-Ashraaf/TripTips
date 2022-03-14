var cityName = sessionStorage.getItem("cityName");
// datetime
switch(cityName){
    case "cairo":
        city ="Africa/Cairo"
        break;
    case "tokyo":
        city ="Asia/Tokyo"
        break;
    case "london":
        city ="Europe/London"
        break;
    case "new york":
        city ="America/New_York"
        break;
    case "paris":
        city ="Europe/Paris"
        break;
}

var mydate = new Date;
date = mydate.toLocaleString("en-US", {timeZone: city})
clock = Array.from(date)
date = Array.from(date)
date.splice(9,14);
date = date.join("")
document.getElementById("date").innerHTML = date
clock.splice(0,10);
clock.splice(-6,6);
clock = clock.join("")
document.getElementById("clock").innerHTML = clock


//weather

const url =`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=0675fdbce733014786f3c2950d9474da`;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      const { main, weather } = data
      document.getElementById("weather").innerHTML = `${weather[0]["description"]} `;
    document.getElementById("temp").innerHTML = `${Math.round(main.temp)-273}`;

    switch(`${weather[0]["description"]}`){
        case "overcast clouds":
            icon = "fa-solid fa-cloud"
            break;
        case "clear sky":
            icon = "fa-solid fa-sun"
            break;
        case "few clouds":
            icon = "fa-solid fa-cloud-sun"
            break;
        case "scattered clouds":
            icon = "fa-solid fa-clouds"
            break;
        case "snow":
            icon = "fa-solid fa-snowflakes"
            break;
        case "light snow":
            icon = "fa-solid fa-snowflake"
            break;
        case "broken clouds":
            icon = "fa-solid fa-cloud"
            break;
    }
    document.getElementById("icon").className = `${icon}`
    })


