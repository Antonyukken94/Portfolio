const weatherForm = document.querySelector(".weatherForm");
const cityInput = document.querySelector(".cityInput");
const card = document.querySelector(".card");
const apiKey = "37a2edb7afd5f3cebdc9e948850c0e75";
weatherForm.addEventListener("submit", async event => {
    event.preventDefault();
    const city = cityInput.value;

    if (city) {
        try {

            const weatherData = await getWeatherData(city);
            displayWeatherInfo(weatherData);


        }
        catch (error) {
            console.error(error);
            displayError(error);
        }


    }
    else {
        displayError("Please enter a city");
    }

});
async function getWeatherData(city) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;
    const response = await fetch(apiUrl);
    if (!response.ok) {
        throw new error("could not fetch weather data");

    }
    return await response.json();
    console.log(response);

}
function displayWeatherInfo(data) {
    const { name: city, 
        main: { temp, humidity }, 
        weather: [{ description, id }] } = data;
        card.textContent="";
        card.style.display="flex";
        const cityDisplay=document.createElement("h1");
        const tempDisplay=document.createElement("p");
        const humidityDisplay=document.createElement("p");
        const descDisplay=document.createElement("p");
        const WeatherEmoji=document.createElement("p");
        
        cityDisplay.textContent=city;
        tempDisplay.textContent=`${temp}°C`;
        humidityDisplay.textContent=`Humidity: ${humidity}%`;
        descDisplay.textContent=description;
        WeatherEmoji.textContent=getWeatherEmoji(id);



        cityDisplay.classList.add("cityDisplay");
        tempDisplay.classList.add("tempDisplay");
        humidityDisplay.classList.add("humidityDisplay");
        descDisplay.classList.add("descDisplay");
        WeatherEmoji.classList.add("WeatherEmoji");

        card.appendChild(cityDisplay);
        card.appendChild(tempDisplay);
        card.appendChild(humidityDisplay);
        card.appendChild(descDisplay);
        card.appendChild(WeatherEmoji);


}
function getWeatherEmoji(weatherId) {
    switch(true){
        case(weatherId>=200 && weatherId<300 ):
        return "⛈️";
        case(weatherId>=300 && weatherId<400 ):
        return "🌧️";
        case(weatherId>=500 && weatherId<600 ):
        return "🌧️";
        case(weatherId>=600 && weatherId<700 ):
        return "🌨️";
        case(weatherId>=700 && weatherId<800 ):
        return "☀️";
        case(weatherId === 800 ):
        return "☀️";
        case(weatherId>=801 && weatherId<810 ):
        return "☁️";
        default:
            return "🛸";
        
    }


}
function displayError(message) {
    const errorDisplay = document.createElement("p");
    errorDisplay.textContent = message;
    errorDisplay.classList.add(".errorDisplay");

    card.textContent = "";
    card.style.display = "flex";
    card.appendChild(errorDisplay);

}

