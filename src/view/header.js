import searchImage from '../images/search.png'

export function header () {
    const header = document.createElement("div");
    const input = document.createElement("input");
    const title = document.createElement("h1");
    title.innerText = "Weather App";
    input.setAttribute("type","text");
    input.setAttribute("id","search");
    input.setAttribute("name","search");
    header.classList.add("header");
    input.classList.add("search");
    header.appendChild(input);
    header.appendChild(title);
    return header;
}