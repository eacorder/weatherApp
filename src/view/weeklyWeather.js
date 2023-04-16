

export function weeklyWeather (data) {  

    let unix_timestamp = data.dt 
    var date = new Date(unix_timestamp * 1000);

    const hour  = date.toDateString().slice(0,10);
    const content = document.createElement("div"); 

    const time = document.createElement("span");  
    const image = document.createElement("img"); 
    const tempLeft = document.createElement("div"); 
    const tempRight = document.createElement("div"); 

    const day = document.createElement("div");  
    const morn = document.createElement("div");  
    const eve = document.createElement("div");  
    const max = document.createElement("div");  
    const min = document.createElement("div");  
    const night = document.createElement("div");  

    const dayTitle = document.createElement("span");  
    const dayDesc = document.createElement("span");  

    const mornTitle = document.createElement("span");  
    const mornDesc = document.createElement("span");  
    
    const eveTitle = document.createElement("span");  
    const eveDesc = document.createElement("span");  

    const maxTitle = document.createElement("span");  
    const maxDesc = document.createElement("span");  

    const minTitle = document.createElement("span");  
    const minDesc = document.createElement("span");  

    const nightTitle = document.createElement("span");  
    const nightDesc = document.createElement("span");  

    dayTitle.innerHTML = "Temp"; 
    dayDesc.innerHTML =  Math.round(data.temp.day) + " °F";  

    mornTitle.innerHTML = "Morn";  
    mornDesc.innerHTML =  Math.round(data.temp.morn) + " °F"; 
    
    eveTitle.innerHTML = "Eve";  
    eveDesc.innerHTML =  Math.round(data.temp.eve) + " °F";

    maxTitle.innerHTML = "Max";  
    maxDesc.innerHTML =  Math.round(data.temp.max) + " °F";

    minTitle.innerHTML = "Min";  
    minDesc.innerHTML =  Math.round(data.temp.min) + " °F"; 

    nightTitle.innerHTML = "Night";  
    nightDesc.innerHTML = Math.round(data.temp.night) + " °F";

    day.appendChild(dayTitle);
    day.appendChild(dayDesc);

    morn.appendChild(mornTitle);
    morn.appendChild(mornDesc);

    eve.appendChild(eveTitle);
    eve.appendChild(eveDesc);

    max.appendChild(maxTitle);
    max.appendChild(maxDesc);

    min.appendChild(minTitle);
    min.appendChild(minDesc);

    night.appendChild(nightTitle);
    night.appendChild(nightDesc);

    tempLeft.appendChild(day); 
    tempLeft.appendChild(max); 
    tempLeft.appendChild(min); 
    tempRight.appendChild(morn); 
    tempRight.appendChild(eve); 
    tempRight.appendChild(night); 

    time.innerHTML = hour; 
    image.setAttribute("src",`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
   // temp.innerHTML = Math.round(data.main.temp) + " °F";

    content.appendChild(time);
    content.appendChild(image);
    content.appendChild(tempLeft);
    content.appendChild(tempRight);

    content.classList.add("week");  
     
    return content;
}