const imagens = [
    'https://avatars.githubusercontent.com/u/114354596?v=4',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Gollum_by_saulone.jpg/250px-Gollum_by_saulone.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7gJ0DSArMuX4ntuK6ldWZcAaotqVeTcaZ5Q&s',
    'https://b.fssta.com/uploads/application/soccer/headshots/713.vresize.350.350.medium.1.png',
    'https://samory.sistemasresponsivos.com.br/wp-content/uploads/2024/01/png-transparent-javascript-logo-comment-html-markup-language-analitycs-angle-text-rectangle.png'
];

const links = [
    'obra.html#obra1',
    'obra.html#obra2',
    'obra.html#obra3',
    'obra.html#obra4',
    'obra.html#obra5'
];

let indiceAtual1 = 0;
let indiceAtual2 = 1;
const imgElement1 = document.getElementById('carrossel-img1');
const imgElement2 = document.getElementById('carrossel-img2');
const bntAnterior = document.getElementById('anterior');
const bntProximo = document.getElementById('proximo');

bntAnterior.addEventListener('click', () => {
    indiceAtual1 = (indiceAtual1 - 1 + imagens.length) % imagens.length;
    indiceAtual2 = (indiceAtual2 - 1 + imagens.length) % imagens.length;
    imgElement1.src = imagens[indiceAtual1];
    imgElement2.src = imagens[indiceAtual2];
    imgElement1.parentElement.href = links[indiceAtual1];
    imgElement2.parentElement.href = links[indiceAtual2];
});

bntProximo.addEventListener('click', () => {
    indiceAtual1 = (indiceAtual1 + 1) % imagens.length;
    indiceAtual2 = (indiceAtual2 + 1) % imagens.length;
    imgElement1.src = imagens[indiceAtual1];
    imgElement2.src = imagens[indiceAtual2];
    imgElement1.parentElement.href = links[indiceAtual1];
    imgElement2.parentElement.href = links[indiceAtual2];
});