import { rightPanel } from "./rightPanel";

export function rightContent(data) {
    const content = document.createElement("div");
    content.classList.add("rightContent");
    content.appendChild(rightPanel(data));
    return content;  
}