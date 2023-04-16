import { city } from "./city";
import { today } from "./today";
import { airCondition } from "./airCondition";

export function leftContent(data, data2) {
    const content = document.createElement("div");
    content.classList.add("leftContent");
    content.appendChild(city(data));
    content.appendChild(today(data2));
    content.appendChild(airCondition(data));
    return content;  
}