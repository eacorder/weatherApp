 import { home } from "./view/home";
 import { content } from "./view/content";
 import './style.css';

 home();
 renderProjects();

function renderProjects () { 
    const city = document.querySelector("#search");     
    const container = document.querySelector(".container");
    let weatherInfo ;
    //weatherInfo = getWeather(); 
  //  getDataWeather(); 
    city.addEventListener('keypress', () => {
        if (event.key === "Enter") {
            event.preventDefault(); 
            getDataWeather(city.value);    
                   
        }
    } );  
}


const getCurrentWeather = (city) => {
  return new Promise((resolve, reject) => (
    //fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=imperial&appid=1978763defbedd74c8358d2e0af69fff', {mode: 'cors'})
    fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=imperial&appid=1978763defbedd74c8358d2e0af69fff', {mode: 'cors'}) 
    .then(function(response) {      
      return response.json();
    })
    .then ((data) =>{
       resolve(data)
    })
    .catch (err => reject(err))
  ))
}

const getHourlyWeather = (city) => {
  return new Promise((resolve, reject) => (
    //fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=imperial&appid=1978763defbedd74c8358d2e0af69fff', {mode: 'cors'})
    fetch('https://api.openweathermap.org/data/2.5/forecast?q='+city+'&units=imperial&appid=1978763defbedd74c8358d2e0af69fff', {mode: 'cors'}) 
    .then(function(response) {      
      return response.json();
    })
    .then ((data) =>{
       resolve(data)
    })
    .catch (err => reject(err))
  ))
}

const getWeeklyWeather = (city) => {
  return new Promise((resolve, reject) => (
    //fetch('https://api.openweathermap.org/data/2.5/weather?q='+city+'&units=imperial&appid=1978763defbedd74c8358d2e0af69fff', {mode: 'cors'})
    fetch('https://api.openweathermap.org/data/2.5/forecast/daily?q='+city+'&units=imperial&appid=1978763defbedd74c8358d2e0af69fff', {mode: 'cors'}) 
    .then(function(response) {      
      return response.json();
    })
    .then ((data) =>{
       resolve(data)
    })
    .catch (err => reject(err))
  ))
}

async function getDataWeather (city) {
  const container = document.querySelector(".container");
  const contentDiv = document.querySelector(".content");
  const data = await getCurrentWeather(city);
  const data2 = await getHourlyWeather(city);
  const data3 = await getWeeklyWeather(city);
  if (contentDiv != null ) {
    contentDiv.remove();
  }
  container.appendChild(content(data, data2, data3));
  
   
 
}
