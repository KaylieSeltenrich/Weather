let ajax1 = new XMLHttpRequest();
ajax1.onreadystatechange = function() {
    if(this.readyState == 4 && this.status == 200) {
    let currentWeather = JSON.parse(this.responseText);

    document.getElementById("CurrentWeather").innerHTML = "Current Weather : <br> " + Math.round(currentWeather.main.temp) + "° C" + "<img src='http://openweathermap.org/img/wn/" + currentWeather.weather[0].icon + "@2x.png'>" +  "<br> Description: <br>" + currentWeather.weather[0].main + "<br> Wind: <br>" + currentWeather.wind.speed + " m/s";
    } else if (this.readyState != 4) {
        document.getElementById("CurrentWeather").innerHTML = "LOADING!";
    } else {
            document.getElementById("CurrentWeather").innerHTML = "SOMETHING WENT WRONG!";
        }

    }

ajax1.open ("GET","http://api.openweathermap.org/data/2.5/weather?q=Calgary,CA&appid=4d32fbc59974a1ca707068729a32bc81&units=metric", true);
ajax1.send();


    
    





    
    let ajax2 = new XMLHttpRequest();
    ajax2.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
        let forecastWeather = JSON.parse(this.responseText);

        document.getElementById("DateOne").innerHTML = "Weather in Calgary at : " + forecastWeather.list[5].dt_txt;
        document.getElementById("WeatherDayOne").innerHTML = "Temp: " + Math.round(forecastWeather.list[5].main.temp_max) + "° C" + "<br> Feels Like: " + Math.round(forecastWeather.list[5].main.feels_like) + "° C"  + "<br> Description: " + forecastWeather.list[5].weather[0].description;
        document.getElementById("DateTwo").innerHTML = "Weather in Calgary at : " + forecastWeather.list[13].dt_txt;
        document.getElementById("WeatherDayTwo").innerHTML = "Temp: " + Math.round(forecastWeather.list[13].main.temp_max) + "° C" + "<br> Feels Like: " + Math.round(forecastWeather.list[13].main.feels_like) + "° C" + "<br> Description: " + forecastWeather.list[13].weather[0].description;
        document.getElementById("DateThree").innerHTML = "Weather in Calgary at : " + forecastWeather.list[21].dt_txt;
        document.getElementById("WeatherDayThree").innerHTML = "Temp: " + Math.round(forecastWeather.list[21].main.temp_max) + "° C" + "<br> Feels Like: " + Math.round(forecastWeather.list[21].main.feels_like) + "° C" + "<br> Description: " + forecastWeather.list[21].weather[0].description;
        document.getElementById("DateFour").innerHTML = "Weather in Calgary at : " + forecastWeather.list[29].dt_txt;
        document.getElementById("WeatherDayFour").innerHTML = "Temp: " + Math.round(forecastWeather.list[29].main.temp_max) + "° C" + "<br> Feels Like: " + Math.round(forecastWeather.list[29].main.feels_like) + "° C" + "<br> Description: " + forecastWeather.list[29].weather[0].description;
        document.getElementById("DateFive").innerHTML = "Weather in Calgary at : " + forecastWeather.list[37].dt_txt;
        document.getElementById("WeatherDayFive").innerHTML = "Temp: " + Math.round(forecastWeather.list[37].main.temp_max) + "° C" + "<br> Feels Like: " + Math.round(forecastWeather.list[37].main.feels_like) + "° C" + "<br> Description: " + forecastWeather.list[37].weather[0].description;





        } else if (this.readyState != 4) {
            document.getElementById("WeatherDayOne").innerHTML = "LOADING!";
        } else {
                document.getElementById("WeatherDayOne").innerHTML = "SOMETHING WENT WRONG!";
            }
        }

    
    ajax2.open ("GET","http://api.openweathermap.org/data/2.5/forecast?q=Calgary,CA&appid=4d32fbc59974a1ca707068729a32bc81&units=metric", true);
    ajax2.send();

