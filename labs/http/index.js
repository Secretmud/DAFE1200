import paths from "./paths.js";
const path_anchor = document.getElementById("anchor");
function render() {
    for (let i = 0; i < Object.keys(paths).length; i++) {
        const dataContent = [paths[i].id,
                             paths[i].location,
                             paths[i].name];
        var div = document.createElement("div");
        div.setAttribute("id", dataContent[0]);
        div.classList.add("link");
        div.innerHTML = `
        <a href="${dataContent[1]}">${dataContent[2]}</a>
        `;
        path_anchor.appendChild(div);
    }
}

window.onload = function() {
    render();
}