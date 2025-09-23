class Obra {
    constructor(tipo, genero, capa, sobre) {
        this.tipo = tipo;
        this.genero = genero;
        this.capa = capa;
        this.sobre = sobre;
    }
}

const obras = [
    new Obra('Filme', 'Fantasia', 'https://avatars.githubusercontent.com/u/114354596?v=4', 'Filme de fantasia inspirado no livro de mesmo nome.'),
    new Obra('Filme', 'Fantasia', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Gollum_by_saulone.jpg/250px-Gollum_by_saulone.jpg', 'Personagem icônico da saga O Senhor dos Anéis.'),
    new Obra('Filme', 'Fantasia', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7gJ0DSArMuX4ntuK6ldWZcAaotqVeTcaZ5Q&s', 'Outro exemplo de obra de fantasia.'),
    new Obra('Filme', 'Esporte', 'https://b.fssta.com/uploads/application/soccer/headshots/713.vresize.350.350.medium.1.png', 'História de um jogador de futebol famoso.'),
    new Obra('Tecnologia', 'Programação', 'https://samory.sistemasresponsivos.com.br/wp-content/uploads/2024/01/png-transparent-javascript-logo-comment-html-markup-language-analitycs-angle-text-rectangle.png', 'Introdução ao JavaScript.')
];

// Dynamically generate carousel content
const imgElement1 = document.getElementById('carrossel-img1');
const imgElement2 = document.getElementById('carrossel-img2');
const bntAnterior = document.getElementById('anterior');
const bntProximo = document.getElementById('proximo');

let indiceAtual1 = 0;
let indiceAtual2 = 1;

function updateCarousel() {
    imgElement1.src = obras[indiceAtual1].capa;
    imgElement2.src = obras[indiceAtual2].capa;
    imgElement1.parentElement.href = `obra.html#obra${indiceAtual1 + 1}`;
    imgElement2.parentElement.href = `obra.html#obra${indiceAtual2 + 1}`;
}

bntAnterior.addEventListener('click', () => {
    indiceAtual1 = (indiceAtual1 - 1 + obras.length) % obras.length;
    indiceAtual2 = (indiceAtual2 - 1 + obras.length) % obras.length;
    updateCarousel();
});

bntProximo.addEventListener('click', () => {
    indiceAtual1 = (indiceAtual1 + 1) % obras.length;
    indiceAtual2 = (indiceAtual2 + 1) % obras.length;
    updateCarousel();
});

updateCarousel();

// Dynamically generate catalog content
const catalogoGrid = document.querySelector('.catalogo-grid');
catalogoGrid.innerHTML = '';

obras.forEach((obra, index) => {
    const catalogoItem = document.createElement('div');
    catalogoItem.classList.add('catalogo-item');

    catalogoItem.innerHTML = `
        <a href="obra.html#obra${index + 1}">
            <img src="${obra.capa}" alt="${obra.tipo} - ${obra.genero}">
        </a>
        <p>${obra.sobre}</p>
    `;

    catalogoGrid.appendChild(catalogoItem);
});