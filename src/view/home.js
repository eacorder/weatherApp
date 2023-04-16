import { header } from "./header";

export function home() {
    const body = document.querySelector("body");
    const container = document.createElement("div");
    container.classList.add("container");
    container.appendChild(header());
  
    body.appendChild(container);
}

