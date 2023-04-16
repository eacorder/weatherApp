

export function hourlyWeather (data) {  
    const hour  = data.dt_txt.split(/(\s+)/)[2].slice(0,5) ;
    const content = document.createElement("div"); 

    const time = document.createElement("span"); 
    const image = document.createElement("img"); 
    const temp = document.createElement("span"); 

    time.innerHTML = hour; 
    image.setAttribute("src",`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
    temp.innerHTML = Math.round(data.main.temp) + " °F";

    content.appendChild(time);
    content.appendChild(image);
    content.appendChild(temp);

    content.classList.add("hour");  
     
    return content;
}