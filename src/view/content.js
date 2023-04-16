import { rightContent } from "./rightContent";
import { leftContent } from "./leftContent";

export function content(data, data2, data3) {
    
    const content = document.createElement("div");
    content.classList.add("content");
    content.appendChild(leftContent(data, data2));
    content.appendChild(rightContent(data3));
    return content;  
}