const btnColor = document.querySelector('button');
const h1 = document.querySelector('h1');

function randomColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 255);
    const rgbColor = `rgb(${r}, ${g}, ${b})`;
    return rgbColor;
}
const rngClrResult = randomColor();

btnColor.addEventListener('click', function () {
    document.body.style.backgroundColor = randomColor();
    h1.innerText = randomColor();
});
