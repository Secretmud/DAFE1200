import data from './data.js';
const cards = document.getElementById("blog");
const settings = document.getElementById("settings");
const modal = document.getElementById("modal");
const modalback = document.getElementById("modalback");
const close = document.getElementById("close");
const styles = document.getElementById("style-picker");
const submit = document.getElementById("accept");
const font = document.getElementById("font-size");

// onload and eventlisteners. 
window.onload = function() {
    setColor();
}
window.addEventListener("load", render);
settings.addEventListener("click", function() {
    modal.style.display = "block";
    modalback.style.display = "block";
});
submit.addEventListener("click", function() {
    options_color();
    fontsize();
    window.location.reload(true);
});
close.addEventListener("click", function() {
    modal.style.display = "none";
    modalback.style.display = "none";
});

// Some basic functions needed for the site to work as intended
function render() {
    for (let i = 0; i < Object.keys(data).length; i++) {
        const dataContent = [data[i].id, data[i].img, 
                             data[i].title, data[i].location, 
                             data[i].summary, data[i].citation]
        var div = document.createElement("div");
        div.setAttribute("id", dataContent[0]);
        div.classList.add("features");
        div.innerHTML = `
        <div>
        <img src="${dataContent[1]}" alt="" class="image">
        <label for="${dataContent[0]}">${dataContent[5]} </label>
        </div>
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
function options_color(){
    var selected = styles.value;
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
}
function setStyleSource (linkID, sourceLoc) {
    var theLink = document.getElementById(linkID);
    theLink.href = sourceLoc;
    console.log(theLink.href);
}
function fontStyle(style) {
    var theLink = document.getElementById("body");
    theLink.style.fontSize = style;
    console.log(theLink);
}
function fontsize() {
    var selected = font.value;
    var fontStyle = localStorage.setItem("font-size", JSON.stringify(selected));
    if (!fontStyle) {
        fontStyle = "";
    }
    switch(fontStyle) {
        case 'normal':
            fontStyle = localStorage.setItem("font-size", JSON.stringify(selected));
            document.getElementById("body").style.fontSize = fontStyle;
            break;
        case 'protanopia':
            fontStyle = localStorage.setItem("font-size", JSON.stringify(selected));
            document.getElementById("body").style.fontSize = fontStyle;
            break;
        case 'deutranopes':
            fontStyle = localStorage.setItem("font-size", JSON.stringify(selected));
            document.getElementById("body").style.fontSize = fontStyle; 
            break;
        case 'tritanopes':
            fontStyle = localStorage.setItem("font-size", JSON.stringify(selected));
            document.getElementById("body").style.fontSize = fontStyle;
            break;
        case 'tritanopes':
            fontStyle = localStorage.setItem("font-size", JSON.stringify(selected));
            document.getElementById("body").style.fontSize = fontStyle;
            break;
        default:
            fontStyle = localStorage.setItem("font-size", JSON.stringify(selected));
            document.getElementById("body").style.fontSize = "32px";
            break;
    }   
}
function setColor() {
    var datarecived = localStorage.getItem('scheme');
    var color_blind = localStorage.getItem('color-mode');
    var fontSize= localStorage.getItem('font-size');
    if (!color_blind) { //Opening the modal on first setup. Starting in greyscale mode
        modal.style.display = "block";
        color_blind = localStorage.setItem("color-mode", "css/color/normal.js");
    }
    if (!fontSize) {
       fontsize() 
    } else {
        fontStyle(JSON.parse(fontSize));
        
    }
    if(!datarecived) {
        setStyleSource ("color", "css/color/normal.css");
    } else {
        setStyleSource("color", JSON.parse(datarecived));
    }
}
