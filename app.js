// №5
// const nameInput = document.querySelector("#name-input");
// const nameOutput = document.querySelector("#name-output");

// nameInput.addEventListener("input", (event) => {
//    nameOutput.textContent = event.currentTarget.value;
// });


// №6
// const inputElem = document.querySelector('#validation-input');

// inputElem.addEventListener('focusout', () => {
//    const inputLength = inputElem.value.length;
//    const requiredLength = inputElem.dataset.length;

//    if (inputLength === parseInt(requiredLength)) {
//       inputElem.classList.add('valid');
//       inputElem.classList.remove('invalid');
//    } else {
//       inputElem.classList.add('invalid');
//       inputElem.classList.remove('valid');
//    }
// });


// №7
// const rangeElem = document.querySelector('#font-size-control');
// const textElem = document.querySelector('#text');

// rangeElem.addEventListener('input', () => {
//    textElem.style.fontSize = rangeElem.value + 'px';
// });


// №8
// const input = document.querySelector('input');
// const renderBtn = document.querySelector('button[data-action="render"]');
// const destroyBtn = document.querySelector('button[data-action="destroy"]');
// const boxesContainer = document.querySelector('#boxes');


// function getRandomColor() {
//    const r = Math.floor(Math.random() * 256);
//    const g = Math.floor(Math.random() * 256);
//    const b = Math.floor(Math.random() * 256);
//    return `rgb(${r},${g},${b})`;
// }


// function createBoxes(amount) {
//    const boxes = [];

//    for (let i = 0; i < amount; i += 1) {
//       const box = document.createElement('div');
//       box.style.width = `${30 + i * 10}px`;
//       box.style.height = `${30 + i * 10}px`;
//       box.style.backgroundColor = getRandomColor();
//       boxes.push(box);
//    }

//    boxesContainer.append(...boxes);
// }


// function destroyBoxes() {
//    boxesContainer.innerHTML = '';
// }

// renderBtn.addEventListener('click', () => {
//    const amount = input.value;
//    createBoxes(amount);
// });

// destroyBtn.addEventListener('click', destroyBoxes);
