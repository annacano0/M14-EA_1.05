let textContainer = document.querySelector('#text-container');

function addText() {
    const input = document.querySelector('input');
    let newText = document.createElement('p');
    newText.textContent = input.value;
    textContainer.appendChild(newText);
}
