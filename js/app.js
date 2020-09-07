    let ajax = new XMLHttpRequest();
    ajax.onreadystatechange = function() {
        if(this.readyState == 4 && this.status == 200) {
        let currentWeather = JSON.parse(this.responseText);

        document.getElementById("Weather").innerHTML = Math.round(currentWeather.main.temp);
        } else if (this.readyState != 4) {
            document.getElementById("Weather").innerHTML = "LOADING!";
        } else {
                document.getElementById("Weather").innerHTML = "SOMETHING WENT WRONG!";
            }
        
        }
    
    ajax.open ("GET","http://api.openweathermap.org/data/2.5/weather?q=Calgary,CA&appid=4d32fbc59974a1ca707068729a32bc81&units=metric", true);
    ajax.send();

