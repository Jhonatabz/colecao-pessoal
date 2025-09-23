class Obra {
    constructor(tipo, genero, capa, sobre) {
        this.tipo = tipo;
        this.genero = genero;
        this.capa = capa;
        this.sobre = sobre;
    }
}

const obras = [
    new Obra('Documentário', 'Drama', 'https://br.web.img3.acsta.net/c_300_300/medias/nmedia/18/93/22/16/20257398.jpg', 'Elena é um documentário brasileiro de 2012 dirigido por Petra Costa. A obra é baseada na vida de Elena Andrade - irmã mais velha de Petra.'),
    new Obra('Filme', 'Fantasia', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Gollum_by_saulone.jpg/250px-Gollum_by_saulone.jpg', 'Personagem icônico da saga O Senhor dos Anéis.'),
    new Obra('Filme', 'Fantasia', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7gJ0DSArMuX4ntuK6ldWZcAaotqVeTcaZ5Q&s', 'Outro exemplo de obra de fantasia.'),
    new Obra('Filme', 'Aventura/Drama', 'https://a.ltrbxd.com/resized/film-poster/4/8/5/7/1/48571-into-the-wild-0-1000-0-1500-crop.jpg?v=94f4378014', 'Após se formar pela Universidade de Emory, Christopher McCandless surpreende a todos ao decidir doar suas economias e pertences e viajar rumo ao Alasca em vez de iniciar uma carreira lucrativa.'),
    new Obra('Filme', 'Terror', 'https://a.ltrbxd.com/resized/film-poster/5/1/8/2/2/51822-the-cabinet-of-dr-caligari-0-1000-0-1500-crop.jpg?v=385b332ed8', 'Francis e seu amigo Alan visitam o Gabinete do Dr. Caligari, uma exposição onde o misterioso médico mostra o sonâmbulo Cesare e o desperta por alguns instantes de seu sono mortal.')
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