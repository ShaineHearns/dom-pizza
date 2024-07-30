// reference to each button
let imgButton = document.getElementById("img-button");
let pButton = document.getElementById("p-button");
// main div
let imgDiv = document.getElementById('img-div');
let pDiv = document.getElementById('p-div');
// functions
function addImage(){
    
    let newImage = document.createElement('img');
    newImage.src = "pizza.png";
    imgDiv.style.display = "block";
    pDiv.style.display = "none";
    imgDiv.appendChild(newImage);
}

function addParagraph(){
    let newParagraph = document.createElement('p');
    let TheText = document.createTextNode("I love pizza!");
    newParagraph.appendChild(TheText);
    newParagraph.style.fontSize = "20px";
    newParagraph.style.fontWeight = "900"
    newParagraph.style.backgroundColor = "black";
    newParagraph.style.color = "white";
    pDiv.appendChild(newParagraph);
    pDiv.style.display = "block";
    imgDiv.style.display = "none";

}

// events
imgButton.addEventListener("click",addImage)
pButton.addEventListener("click",addParagraph)