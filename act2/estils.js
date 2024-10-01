//crear element
let nouDiv=document.createElement('div')
nouDiv.classList.add("clickable-div")
nouDiv.addEventListener('click', toggleColor);

//crear el text del div
let textDiv=document.createElement('p')
textDiv.textContent="Click para cambiarme 🤓"

//posar al dom
let body=document.querySelector('body')
nouDiv.appendChild(textDiv)
body.appendChild(nouDiv)

//funcio de canvi de color
function toggleColor() {
    if (nouDiv.classList.contains("color1")) { 
        nouDiv.classList.remove("color1");
    } else {
        nouDiv.classList.add("color1"); 
    }
}