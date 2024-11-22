let slideIndex = 0; // Índice do slide atual
let slides;         // Variável para armazenar todos os slides
let slideInterval;  // Variável para armazenar o intervalo do slideshow automático

// Função para mostrar os slides
function showSlides() {
    slides = document.getElementsByClassName("mySlides");  // Seleciona todos os slides

    // Esconde todos os slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }

    // Garante que o índice esteja dentro do número total de slides
    if (slideIndex >= slides.length) { slideIndex = 0 } // Volta para o primeiro slide
    if (slideIndex < 0) { slideIndex = slides.length - 1 } // Vai para o último slide

    // Mostra o slide atual
    slides[slideIndex].style.display = "block";
}

// Função para alterar o slide baseado no valor de n
function plusSlides(n) {
    slideIndex += n;  // Atualiza o índice do slide
    showSlides();     // Atualiza a exibição dos slides
    resetSlideInterval(); // Reinicia o intervalo do slideshow automático
}

// Função para iniciar o slideshow automático
function startSlideInterval() {
    // Atualiza o slideshow automaticamente a cada 3 segundos
    slideInterval = setInterval(function() {
        slideIndex++;  // Avança para o próximo slide
        showSlides();  // Atualiza a exibição
    }, 3000);  // 3000 milissegundos = 3 segundos
}

// Função para reiniciar o intervalo ao clicar nos botões
function resetSlideInterval() {
    clearInterval(slideInterval); // Limpa o intervalo anterior
    startSlideInterval();         // Inicia um novo intervalo
}

// Inicializa o slideshow, mostrando o primeiro slide e começando a troca automática
showSlides();
startSlideInterval();  // Inicia o slideshow automático

