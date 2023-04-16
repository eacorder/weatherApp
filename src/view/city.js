export function city (data) { 
    const city = document.createElement("div"); 
    const left = document.createElement("div"); 
    const cityDescription = document.createElement("div"); 
    const right = document.createElement("div"); 

    const cityName = document.createElement("span"); 
    const time = document.createElement("span"); 
    const temperature = document.createElement("span"); 

    const image = document.createElement("img"); 
    const description = document.createElement("span"); 
    image.setAttribute("src",`http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`);
    
    time.innerHTML = timeCity(data.timezone).time;
    cityName.innerHTML = data.name; 
    description.innerHTML = data.weather[0].description; 
    temperature.innerHTML = Math.round(data.main.temp) + " °F";
    city.classList.add("city"); 
    city.classList.add("panel"); 

    left.classList.add("leftCityPanel"); 
    right.classList.add("rightCityPanel"); 
    cityDescription.classList.add("cityDescription"); 
    
    cityDescription.appendChild(cityName);
    cityDescription.appendChild(description);
    left.appendChild(cityDescription);
    left.appendChild(time);

    right.appendChild(temperature);
    right.appendChild(image);
    city.appendChild(left);
    city.appendChild(right);
     
    
    return city;
}

function timeCity(timezone){
    const localTime = new Date().getTime()
    const localOffset = new Date().getTimezoneOffset() * 60000
    const currentUtcTime = localOffset + localTime
    const cityOffset = currentUtcTime + 1000 * timezone
    const cityTime = new Date(cityOffset).toTimeString().split(' ')
   
    return { time: cityTime[0] }
  

}