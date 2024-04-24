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

// API de Geolocalização

// PEGAR LOCALIZAÇÃO
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        document.getElementById("demo").innerHTML = "Geolocalização não é suportada por este navegador.";
    }
}

// MOSTRAR POSIÇÃO
function showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
    document.getElementById("demo").innerHTML = "Latitude: " + latitude + "<br>Longitude: " + longitude;
    // Aqui você pode usar as coordenadas para realizar outras ações, como mostrar locais próximos.
}


