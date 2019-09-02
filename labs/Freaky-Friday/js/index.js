import data from './data.js';
const cards = document.getElementById("blog");
const settings = document.getElementById("settings");
const modal = document.getElementById("modal");
const close = document.getElementById("close");
window.onload = function() {
    setColor();
}
function render() {
    for (let i = 0; i < Object.keys(data).length; i++) {
        const dataContent = [data[i].id, data[i].img, 
                             data[i].title, data[i].location, 
                             data[i].summary]
        var div = document.createElement("div");
        div.setAttribute("id", dataContent[0]);
        div.classList.add("features");
        div.innerHTML = `
        <img src="${dataContent[1]}" alt="" class="image">
        <div class="card-text">
            <div class="title">
                ${dataContent[2]}
            </div>
            <div class="location">
                ${dataContent[3]}
            </div>
            <div class="summary">
                ${dataContent[4]}
            </div>
        </div>
        `;
        cards.appendChild(div);
    }
}

window.addEventListener("load", render);
settings.addEventListener("click", function() {
    modal.style.display = "block"
});
close.addEventListener("click", function() {
    modal.style.display = "none"
});


document.getElementById("style-picker").addEventListener("click", function(){
    var selected = this.options[this.selectedIndex].value;
    var color = localStorage.setItem("scheme", JSON.stringify(selected));
    var datarecived = localStorage.getItem('scheme');
    switch(color) {
        case 'normal':
            setStyleSource ("color", selected);
            break;
        case 'protanopia':
            setStyleSource ("color", selected);
            break;
        case 'deutranopes':
            setStyleSource ("color", selected);
            break;
        case 'tritanopes':
            setStyleSource ("color", selected);
            break;
        default:
            setStyleSource ("color", "normal");
            break;
    }   
});
function setStyleSource (linkID, sourceLoc) {
    var theLink = document.getElementById(linkID);
    theLink.href = sourceLoc;
    console.log(theLink.href);
}
function setColor() {
    var datarecived = localStorage.getItem('scheme');
    var color_blind = localStorage.getItem('color-mode');
    if (!color_blind) {
        modal.style.display = "block";
        color_blind = localStorage.setItem("color-mode", true);
    }
    if(!datarecived) {
        setStyleSource ("color", "css/colorscheme/dark.css");
        console.log("State1:", JSON.parse(color));
    } else {
        setStyleSource("color", JSON.parse(datarecived));
        console.log("State2:", JSON.parse(datarecived));
    }
}
