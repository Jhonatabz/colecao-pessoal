const imagens = [
    'https://avatars.githubusercontent.com/u/114354596?v=4',
    'https://uploads.metroimg.com/wp-content/uploads/2024/05/09105858/Gollum-O-Senhor-dos-Aneis.jpg',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7gJ0DSArMuX4ntuK6ldWZcAaotqVeTcaZ5Q&s',
    'https://b.fssta.com/uploads/application/soccer/headshots/713.vresize.350.350.medium.1.png',
    'https://samory.sistemasresponsivos.com.br/wp-content/uploads/2024/01/png-transparent-javascript-logo-comment-html-markup-language-analitycs-angle-text-rectangle.png'
];

let indiceAtual1 = 0;
let indiceAtual2 = 1;
const imgElement1 = document.getElementById('carrossel-img1');
const imgElement2 = document.getElementById('carrossel-img2');
const bntAnterior = document.getElementById('anterior');
const bntProximo = document.getElementById('proximo');

bntAnterior.addEventListener('click', () => {
    indiceAtual1 = (indiceAtual1 + 1) % imagens.length;
    indiceAtual2 = (indiceAtual2 + 1) % imagens.length;
    imgElement1.src = imagens[indiceAtual1];
    imgElement2.src = imagens[indiceAtual2];
})

bntProximo.addEventListener('click', () => {
    indiceAtual1 = (indiceAtual1 - 1 + imagens.length) % imagens.length;
    indiceAtual2 = (indiceAtual2 - 1 + imagens.length) % imagens.length;
    imgElement1.src = imagens[indiceAtual1];
    imgElement2.src = imagens[indiceAtual2];
})