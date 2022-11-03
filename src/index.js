console.log("Hoi");
import { Parser } from "./Parser";
console.log("Parser got loaded YEEAYAYYYYA");
const server_list = document.querySelector("#server-list");
const form = document.querySelector("#url-finder");
const input = document.querySelector("#keyword-in");
form?.addEventListener("submit", e => {
    e.preventDefault();
    // Prevent idiots from putting nothing in the box
    if (input?.value == "" || input?.value == null)
        return;
    let keyword = input.value;
    let parser = new Parser();
    let data = parser.fetch(keyword);
});
