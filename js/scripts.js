// Selecione todos os itens do menu
const menuItems = document.querySelectorAll('.menu-lateral .item');


menuItems.forEach(item => {
    item.addEventListener('click', () => {
        
        menuItems.forEach(item => {
            item.classList.remove('active');//Remove a classe active
        });
       
        item.classList.add('active');//Adiciona classe active
        
        
        
        if (item.textContent === 'Registro de Atividades') {
            
            console.log('Redirecionar para a página de registro de atividades');
        } else if (item.textContent === 'Plano de Treino') {
            
            console.log('Redirecionar para a página de plano de treino');
        }
       
    });
});


// Seleciona o botão de menu
const menuBtn = document.getElementById('menu-btn');
const leftSection = document.querySelector('.left-section');

// Adiciona um ouvinte de evento de clique ao botão de menu
menuBtn.addEventListener('click', function(event) {
    event.stopPropagation(); // Impede que o clique se propague para o documento
    toggleMenu();
});

// Adiciona um ouvinte de evento de clique ao documento
document.addEventListener('click', function(event) {
    // Verifica se o clique ocorreu fora do menu
    const isClickedOutsideMenu = !leftSection.contains(event.target);

    // Fecha o menu se estiver aberto e o clique ocorrer fora do menu
    if (isClickedOutsideMenu && leftSection.style.left === '0px') {
        toggleMenu();
    }
});

// Função para alternar a exibição do menu
function toggleMenu() {
    // Verifica se o menu lateral está visível
    const isVisible = leftSection.style.left === '0px';

    // Se estiver visível, esconde o menu; caso contrário, mostra o menu
    leftSection.style.left = isVisible ? '-160px' : '0px';
}


// Selecione os botões de navegação
const prevButton = document.querySelector('.prev-btn');
const nextButton = document.querySelector('.next-btn');

// Selecione o carrossel
const carousel = document.querySelector('.carousel');

// Selecione os itens do carrossel
const contents = document.querySelectorAll('.content');

// Defina a largura de um item do carrossel
const contentWidth = contents[0].offsetWidth;

// Defina o número total de itens no carrossel
const totalContents = contents.length;

// Inicialize o índice do item atual
let currentIndex = 0;


prevButton.addEventListener('click', () => {
    
    if (currentIndex > 0) {
        
        currentIndex--;
        
        const newPosition = -currentIndex * contentWidth;
        
        carousel.style.transform = `translateX(${newPosition}px)`;
    }
});


nextButton.addEventListener('click', () => {
   
    if (currentIndex < totalContents - 1) {
        
        currentIndex++;
        
        const newPosition = -currentIndex * contentWidth;
        
        carousel.style.transform = `translateX(${newPosition}px)`;
    }
});

// // Defina a variável map globalmente
// const map = new ol.Map({
//     layers:[
//         new ol.layer.Tile({
//             source: new ol.source.TileJSON({
//                 url: 'https://api.maptiler.com/maps/basic-v2/tiles.json?key=RBKrruyHQERgVYSO6nS1',
//                 tileSize: 512,
//             })
//         })
//     ],
//     target: 'map',
//     view: new ol.View({
//         center: ol.proj.fromLonLat([-43.206091, -22.920387]),
//         zoom: 13 // Defina o nível de zoom desejado
//     })
// });

// // API de Geolocalização

// // PEGAR LOCALIZAÇÃO
// function getLocation() {
//     if (navigator.geolocation) {
//         navigator.geolocation.getCurrentPosition(showPositionAndAddMarkers);
//     } else {
//         document.getElementById("demo").innerHTML = "Geolocalização não é suportada por este navegador.";
//     }
// }

// // MOSTRAR POSIÇÃO E ADICIONAR MARCADORES DE LOCAIS PRÓXIMOS
// function showPositionAndAddMarkers(position) {
//     var latitude = position.coords.latitude;
//     var longitude = position.coords.longitude;
//     document.getElementById("demo").innerHTML = "Latitude: " + latitude + "<br>Longitude: " + longitude;
    
//     // Aqui você pode adicionar a lógica para calcular e exibir marcadores de locais de treino próximos
//     // por exemplo, chamando a função para adicionar marcadores
//     addNearbyTrainingLocationsToMap(latitude, longitude);
// }

// // Função para adicionar marcadores de locais de treino próximos ao usuário
// function addNearbyTrainingLocationsToMap(latitude, longitude) {
//     // Aqui você pode implementar a lógica para calcular os locais de treino próximos com base na localização do usuário
//     // e adicionar marcadores ao mapa utilizando a função addMarkerToMap() do exemplo anterior.
//     // Por exemplo:
//     const locaisDeTreino = [
//         { nome: 'Academia A', latitude: -22.900345, longitude: -43.176689 },
//         { nome: 'Academia B', latitude: -22.910123, longitude: -43.185432 },
//         { nome: 'Academia C', latitude: -22.920987, longitude: -43.170987 }
//     ];

//     const raioProximo = 1000; // Raio de 1 km

//     locaisDeTreino.forEach(local => {
//         const distancia = calculateDistance(latitude, longitude, local.latitude, local.longitude);
//         if (distancia <= raioProximo) {
//             addMarkerToMap(map, local.latitude, local.longitude, local.nome);
//         }
//     });
// }

// // Função para calcular a distância entre duas coordenadas (em metros)
// function calculateDistance(lat1, lon1, lat2, lon2) {
//     const R = 6371; // Raio da Terra em km
//     const dLat = (lat2 - lat1) * (Math.PI / 180);
//     const dLon = (lon2 - lon1) * (Math.PI / 180);
//     const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
//               Math.cos(lat1 * (Math.PI / 180)) * Math.cos(lat2 * (Math.PI / 180)) *
//               Math.sin(dLon / 2) * Math.sin(dLon / 2);
//     const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
//     const d = R * c * 1000; // Distância em metros
//     return d;
// }

// // Função para adicionar marcador ao mapa
// function addMarkerToMap(map, latitude, longitude, label) {
//     // Cria um marcador
//     const marker = new ol.Feature({
//         geometry: new ol.geom.Point(ol.proj.fromLonLat([longitude, latitude]))
//     });

//     // Define um estilo para o marcador
//     const markerStyle = new ol.style.Style({
//         image: new ol.style.Icon({
//             src: 'https://cdn.rawgit.com/openlayers/ol3/master/examples/data/icon.png'
//         }),
//         text: new ol.style.Text({
//             text: label,
//             offsetY: -25,
//             font: '14px Calibri,sans-serif',
//             fill: new ol.style.Fill({ color: '#000' }),
//             stroke: new ol.style.Stroke({ color: '#fff', width: 2 })
//         })
//     });

//     marker.setStyle(markerStyle); // Aplica o estilo ao marcador

//     // Cria uma camada de vetor para os marcadores
//     const markerLayer = new ol.layer.Vector({
//         source: new ol.source.Vector({
//             features: [marker]
//         })
//     });

//     map.addLayer(markerLayer); // Adiciona a camada de marcadores ao mapa
// }



