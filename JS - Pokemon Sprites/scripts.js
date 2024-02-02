// https://raw.githubusercontent.com/pokeAPI/sprites/master/sprites/pokemon/1.png
const baseUrl = 'https://raw.githubusercontent.com/pokeAPI/sprites/master/sprites/pokemon/'
const firstSection = document.querySelector('section');
for (let i = 1; i < 1026; i++) {
    const pokeImg = document.createElement('img');
    const label = document.createElement('span');
    const pokeFrame = document.createElement('div')
    pokeFrame.classList.add('pokeframe')
    label.innerText = `#${i}`
    let pokeUrl = `${baseUrl}${i}.png`
    pokeImg.src = pokeUrl;
    firstSection.appendChild(pokeFrame);
    pokeFrame.appendChild(pokeImg);
    pokeFrame.appendChild(label);
}