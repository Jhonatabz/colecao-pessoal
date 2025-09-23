class Obra {
    constructor(titulo, tipo, genero, capa, sobre) {
        this.titulo = titulo;
        this.tipo = tipo;
        this.genero = genero;
        this.capa = capa;
        this.sobre = sobre;
    }
}

const obras = [
    new Obra('Elena', 'Documentário', 'Drama', 'https://br.web.img3.acsta.net/c_300_300/medias/nmedia/18/93/22/16/20257398.jpg', 'Elena é um documentário brasileiro de 2012 dirigido por Petra Costa. A obra é baseada na vida de Elena Andrade - irmã mais velha de Petra.'),
    new Obra('O Hobbit', 'Filme', 'Fantasia', 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Gollum_by_saulone.jpg/250px-Gollum_by_saulone.jpg', 'Personagem icônico da saga O Senhor dos Anéis.'),
    new Obra('Bilbo', 'Filme', 'Fantasia', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7gJ0DSArMuX4ntuK6ldWZcAaotqVeTcaZ5Q&s', 'Outro exemplo de obra de fantasia.'),
    new Obra('Na Natureza Selvagem', 'Filme', 'Aventura/Drama', 'https://a.ltrbxd.com/resized/film-poster/4/8/5/7/1/48571-into-the-wild-0-1000-0-1500-crop.jpg?v=94f4378014', 'Após se formar pela Universidade de Emory, Christopher McCandless surpreende a todos ao decidir doar suas economias e pertences e viajar rumo ao Alasca em vez de iniciar uma carreira lucrativa.'),
    new Obra('O Gabinete do Dr. Galigari', 'Filme', 'Terror', 'https://a.ltrbxd.com/resized/film-poster/5/1/8/2/2/51822-the-cabinet-of-dr-caligari-0-1000-0-1500-crop.jpg?v=385b332ed8', 'Francis e seu amigo Alan visitam o Gabinete do Dr. Caligari, uma exposição onde o misterioso médico mostra o sonâmbulo Cesare e o desperta por alguns instantes de seu sono mortal.')
];

function carregarConteudo() {
    const hash = window.location.hash.substring(1); // Remove o # da URL
    const indice = parseInt(hash); // Converte o hash para número
    const obra = obras[indice];

    if (obra && !isNaN(indice) && indice >= 0 && indice < obras.length) {
        document.getElementById('obra-titulo').textContent = obra.titulo + ' - ' + obra.genero;
        document.getElementById('obra-descricao').textContent = obra.sobre;
        document.getElementById('obra-capa').src = obra.capa;
        document.getElementById('obra-capa').alt = `${obra.titulo} - ${obra.genero}`;
    } else {
        document.getElementById('obra-titulo').textContent = 'Obra não encontrada';
        document.getElementById('obra-descricao').textContent = 'A obra especificada não existe.';
        document.getElementById('obra-capa').src = '';
        document.getElementById('obra-capa').alt = 'Obra não encontrada';
    }
}

window.addEventListener('hashchange', carregarConteudo);
window.addEventListener('load', carregarConteudo);