//debug
console.log("Meteo.JS is loaded !");

// API call
let queryUrl = "https://api.openweathermap.org/data/2.5/onecall?";
let lat = "lat=44.933393&";
let lon = "lon=4.89236&";
let lang = "lang=fr&";
let apiOptions = "units=metric&exclude=minutely,hourly,alerts&";
let apiKey = "appid=dbb76c5d98d5dbafcb94441c6a10236e";
let file = queryUrl + lat + lon + lang+ apiOptions + apiKey;

fetch(file)
  .then((response) => response.json())
  .then((data) => {
    // Données sur la météo d'aujourd'hui
    let description = data.current.weather[0].description;
    let temp = Math.round(data.current.temp);
    let name = "Valence";

    document.getElementById("description").innerHTML = description;
    document.getElementById("temp").innerHTML = temp + "°C";
    document.getElementById("city").innerHTML = name;

    // Données sur la température des 3 prochains jours 
    let Day_1_Temp = Math.round(data.daily[0].temp.day);
    let Day_2_Temp = Math.round(data.daily[1].temp.day);
    let Day_3_Temp = Math.round(data.daily[2].temp.day);

    document.getElementById("day_1_temp").innerHTML =
      Day_1_Temp + "°";
    document.getElementById("day_2_temp").innerHTML =
      Day_2_Temp + "°";
    document.getElementById("day_3_temp").innerHTML =
      Day_3_Temp + "°";

    // Icones
    let iconBaseUrl = "http://openweathermap.org/img/wn/";
    let iconFormat = ".png";

        // Aujourd'hui
    let iconCodeToday = data.current.weather[0].icon;
    let iconFullyUrlToday = iconBaseUrl + iconCodeToday + iconFormat;
    document.getElementById("wrapper-icon-today").src = iconFullyUrlToday;

        // Jour d'aujourd'hui + 1 jour
    let iconCodeDay_1 = data.daily[0].weather[0].icon;
    let iconFullyUrlDay_1 = iconBaseUrl + iconCodeDay_1 + iconFormat;
    document.getElementById("wrapper-icon-day-1").src = iconFullyUrlDay_1;

        // Jour d'aujourd'hui + 2 jours
    let iconCodeDay_2 = data.daily[1].weather[0].icon;
    let iconFullyUrlDay_2 = iconBaseUrl + iconCodeDay_2 + iconFormat;
    document.getElementById("wrapper-icon-day-2").src = iconFullyUrlDay_2;

        // Jour d'aujourd'hui + 3 jours
    let iconCodeDay_3 = data.daily[2].weather[0].icon;
    let iconFullyUrlDay_3 = iconBaseUrl + iconCodeDay_3 + iconFormat;
    document.getElementById("wrapper-icon-day-3").src = iconFullyUrlDay_3;

   

    //Jours de la semaine traduit en français + fonction d'ajout de jours
    
        //Fonction d'ajout de jours par rapport à la date du jour
    function addDays(date, days) {
        var result = new Date(date);
        result.setDate(date.getDate() + days);
        return result.toLocaleString('fr-FR',{
    weekday: 'short'});
    }

    let day = new Date();
        
        // Aujourd'hui
    let today = day.toLocaleString('fr-FR',{
    weekday: 'long'});
    document.getElementById("today_weekday").innerHTML = today;

        // Jour d'aujourd'hui (format court) + 1 jour
    let day_1 = addDays(day,1);
    document.getElementById("day_1_weekday").innerHTML = day_1;
        
         // Jour d'aujourd'hui (format court)+ 2 jours
    let day_2 = addDays(day,2);
    document.getElementById("day_2_weekday").innerHTML = day_2;

         // Jour d'aujourd'hui (format court) + 2 jours
    let day_3 = addDays(day,3);
    document.getElementById("day_3_weekday").innerHTML = day_3;
  });