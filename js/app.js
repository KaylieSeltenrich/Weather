    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
        let forecastWeather = JSON.parse(this.responseText);

        document.getElementById("DateOne").innerHTML = "Weather in Calgary at : " + forecastWeather.list[5].dt_txt;
        document.getElementById("WeatherDayOne").innerHTML = forecastWeather.list[5].main.temp_max;
        document.getElementById("DateTwo").innerHTML = "Weather in Calgary at : " + forecastWeather.list[13].dt_txt;
        document.getElementById("WeatherDayTwo").innerHTML = forecastWeather.list[13].main.temp_max;
        document.getElementById("DateThree").innerHTML = "Weather in Calgary at : " + forecastWeather.list[21].dt_txt;
        document.getElementById("WeatherDayThree").innerHTML = forecastWeather.list[21].main.temp_max;
        document.getElementById("DateFour").innerHTML = "Weather in Calgary at : " + forecastWeather.list[29].dt_txt;
        document.getElementById("WeatherDayFour").innerHTML = forecastWeather.list[29].main.temp_max;
        document.getElementById("DateFive").innerHTML = "Weather in Calgary at : " + forecastWeather.list[37].dt_txt;
        document.getElementById("WeatherDayFive").innerHTML = forecastWeather.list[37].main.temp_max;





        } else if (this.readyState != 4) {
            document.getElementById("WeatherDayOne").innerHTML = "LOADING!";
        } else {
                document.getElementById("WeatherDayOne").innerHTML = "SOMETHING WENT WRONG!";
            }
        }

    
    ajax.open ("GET","http://api.openweathermap.org/data/2.5/forecast?q=Calgary,CA&appid=4d32fbc59974a1ca707068729a32bc81&units=metric", true);
    ajax.send();

