import { hourlyWeather } from "./hourlyWeather";

export function today (data) {
    const today = document.createElement("div"); 
    const header = document.createElement("span"); 
    const content = document.createElement("div"); 

    today.classList.add("today"); 
    today.classList.add("panel"); 

    header.innerHTML = "Hourly forecast";

    data.list.slice(0,6).forEach(element => {
        
        content.appendChild(hourlyWeather(element));
    });

    today.appendChild(header);
    today.appendChild(content);
    return today;
}