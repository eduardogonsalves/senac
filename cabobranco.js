// Função para mostrar marcadores no mapa
function showMarkers(category) {
    // Implemente a lógica para mostrar marcadores conforme a categoria selecionada
  }
  
// Carrossel de Imagens

let slideIndex = 0;
showSlides();

function showSlides() {
  let slides = document.querySelectorAll('.slide');
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = 'none';  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  slides[slideIndex-1].style.display = 'block';  
  setTimeout(showSlides, 2000); // Troca de imagem a cada 2 segundos (2000 milissegundos)
}

// Configuração do mapa

// Colocação de pontos e outras informações no mapa(https://leafletjs.com/examples/quick-start/)
var map = L.map('map').setView([-7.1266, -34.8254], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);



// Função para inicializar o mapa
function initMap() {
  // Coordenadas do centro do mapa (exemplo: João Pessoa, Paraíba)
  var center = { lat: -7.1195, lng: -34.845 };

  // Opções do mapa
  var mapOptions = {
      zoom: 12, // Zoom inicial
      center: center // Centro do mapa
  };

  // Criar o mapa dentro da div com o id "map"
  var map = new google.maps.Map(document.getElementById('map'), mapOptions);

  // Exemplo de marcador (pode adicionar mais marcadores conforme necessário)
  var marker = new google.maps.Marker({
      position: center, // Posição do marcador
      map: map, // Mapa onde o marcador será exibido
      title: 'João Pessoa, Paraíba' // Título do marcador (exibido ao passar o mouse sobre ele)
  });
}