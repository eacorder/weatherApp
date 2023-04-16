export function airCondition (data) {
    const airCondition = document.createElement("div"); 
    const header = document.createElement("span"); 
    const leftSide = document.createElement("div"); 
    const rightSide = document.createElement("div"); 

    const feelTitle = document.createElement("span"); 
    const feel = document.createElement("span"); 

    const windTitle = document.createElement("span"); 
    const wind = document.createElement("span"); 

    const humidityTitle = document.createElement("span"); 
    const humidity = document.createElement("span"); 

    const cloudTItle = document.createElement("span"); 
    const cloud = document.createElement("span"); 

    header.innerHTML = "Air condition"

    feelTitle.innerHTML = "Feels like"
    feel.innerHTML = Math.round(data.main.feels_like) + " °F";

    windTitle.innerHTML = "Wind speed" 
    wind.innerHTML = data.wind.speed + " m/h";

    humidityTitle.innerHTML = "Humidity porcentage"
    humidity.innerHTML = data.main.humidity + " %";

    cloudTItle.innerHTML = "Cloud porcentage"
    cloud.innerHTML = data.clouds.all + " %";


    const feelDescription = document.createElement("div"); 
    const windDescription = document.createElement("div"); 
    const humityDescription = document.createElement("div"); 
    const cloudDescription = document.createElement("div"); 
    const container = document.createElement("div"); 

    airCondition.classList.add("airCondition"); 
    airCondition.classList.add("panel"); 
    container.classList.add("airContainer");

    header.classList.add("headerCondition"); 
    leftSide.classList.add("leftCondition"); 
    rightSide.classList.add("rightCondition"); 


    feelDescription.appendChild(feelTitle);
    feelDescription.appendChild(feel);

    windDescription.appendChild(windTitle);
    windDescription.appendChild(wind);

    humityDescription.appendChild(humidityTitle);
    humityDescription.appendChild(humidity);

    cloudDescription.appendChild(cloudTItle);
    cloudDescription.appendChild(cloud);


    leftSide.appendChild(feelDescription);
    leftSide.appendChild(windDescription);

    rightSide.appendChild(humityDescription);
    rightSide.appendChild(cloudDescription);

    airCondition.appendChild(header);
    container.appendChild(leftSide);
    container.appendChild(rightSide);
    airCondition.appendChild(container);
    return airCondition;
}