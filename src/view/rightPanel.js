import { weeklyWeather } from "./weeklyWeather";

export function rightPanel (data) {
    const rightPanel = document.createElement("div");   
    const header = document.createElement("span"); 
    const content = document.createElement("div"); 


    header.innerHTML = "Weekly forecast";

    data.list.slice(0,6).forEach(element => {        

        content.appendChild(weeklyWeather(element));

    });

    rightPanel.appendChild(header);
    rightPanel.appendChild(content);
    rightPanel.classList.add("rightPanel"); 
    rightPanel.classList.add("panel"); 
    
    console.log(data)
    return rightPanel;
}