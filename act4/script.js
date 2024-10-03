const productInput = document.querySelector("input")
const productsContainer = document.getElementById("product-container")
const productForm = document.getElementById("product-form");
const productIdArray = []

productForm.addEventListener("submit", function (event) {
    event.preventDefault();
    addNewProduct();
});

function addNewProduct() {
    let newProduct = productInput.value
    let productElement = document.createElement("article")
    let productText = document.createElement("p")
    let id = createId()
    productIdArray.push(id)
    productText.textContent = newProduct
    productElement.setAttribute("id", id)
    productElement.appendChild(productText)
    productElement.appendChild(createDeleteButton(id))
    productElement.appendChild(createDoneButton(id))
    productsContainer.appendChild(productElement)
}

function createDeleteButton(id) {
    let deleteButton = document.createElement("button")
    deleteButton.classList.add("color-red")
    deleteButton.textContent = "Eliminar"
    deleteButton.addEventListener("click", () => {
        deleteProduct(id)
    })
    return deleteButton
}


function createDoneButton(id) {
    let doneButton = document.createElement("button")
    doneButton.classList.add("color-yellow")
    doneButton.textContent = "Fet"
    doneButton.addEventListener("click", () => {
        toggleDone(id)
    })
    return doneButton
}
function deleteProduct(id) {
    let productElement = document.getElementById(id)
    productElement.remove()
    productIdArray.pop(id)
}

function toggleDone(id) {
    let productElement = document.getElementById(id)
    productElement.classList.toggle("done")
}

function createId() {
    let newId
    do {
        newId = Math.floor(Math.random() * 10000)
    } while (productIdArray.includes(newId))
    return newId
}