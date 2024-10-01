//modificar el titol
let titol=document.querySelector('h1')
titol.innerText="Titol modificat!"

//modificar la llista
let llista=document.querySelector('ul')
let nouItem=document.createElement('li')
nouItem.textContent="Anar a comprar enciam"
llista.appendChild(nouItem)

//funcio de canviar el 'p'
function canviDeText(){
   let p=document.querySelector('p')
   p.innerText="Aquesta es una llista de la compra!!🎉🎉🎉" 
}