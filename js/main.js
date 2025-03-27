function abrirModal() {
    document.getElementById("modalAgendamento").style.display = "flex";
    document.getElementById("iframeContainer").style.display = "none";
    document.getElementById("abrirCalendarioBtn").style.display = "block";
    document.getElementById("fecharCalendarioBtn").style.display = "none";
}
function fecharModal() {
    document.getElementById("modalAgendamento").style.display = "none";
}
function abrirCalendario() {
    document.getElementById("calendarIframe").src = "https://calendar.google.com/calendar/appointments/schedules/AcZssZ0SM9rsvxiT71domAfyIgbUVGVsAQcNBgPsgCgJLAGcehcsXJAknGROda26JT7QQOBAm2CT73h8";
    document.getElementById("iframeContainer").style.display = "block";
    document.getElementById("abrirCalendarioBtn").style.display = "none";
    document.getElementById("fecharCalendarioBtn").style.display = "block";
}
function fecharCalendario() {
    document.getElementById("iframeContainer").style.display = "none";
    document.getElementById("abrirCalendarioBtn").style.display = "block";
    document.getElementById("fecharCalendarioBtn").style.display = "none";
}

// Inserir o ano atual
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("anoAtual").textContent = new Date().getFullYear();
});

document.querySelectorAll(".toggle-btn").forEach(button => {
    button.addEventListener("click", function() {
        const options = this.nextElementSibling;
        if (options.style.display === "none" || options.style.display === "") {
            options.style.display = "block";
        } else {
            options.style.display = "none";
        }
    });
});

// Função para mostrar/ocultar o chat
function toggleChat() {
    var chatbox = document.getElementById("chatbox");
    if (chatbox.style.display === "none" || chatbox.style.display === "") {
        chatbox.style.display = "block";
    } else {
        chatbox.style.display = "none";
    }
}

// Enviar mensagem para WhatsApp
function sendMessage() {
    var msg = document.getElementById("message").value;
    var phone = "351917767712"; // Substitua pelo seu número no formato correto
    if (msg) {
        window.open(`https://wa.me/${phone}?text=${encodeURIComponent(msg)}`, "_blank");
    }
}

document.addEventListener("DOMContentLoaded", function () {
    let titleText = " ESPECIAL Exames Nacionais 2025 de Português | Biologia | Psicologia | Filosofia | ";
    let speed = 120; // Velocidade do movimento (ms)
    let index = 0;

    function scrollTitle() {
        document.title = titleText.substring(index) + titleText.substring(0, index);
        index = (index + 1) % titleText.length;
        setTimeout(scrollTitle, speed);
    }

    scrollTitle();
});

// Exibir sugestão após 3 minuto (180 segundos)
setTimeout(() => {
    let sugestaoModal = new bootstrap.Modal(document.getElementById('sugestaoModal'));
    sugestaoModal.show();
}, 180000);

// Abrir o modal de agendamento diretamente
function abrirModalAgendamento() {
    document.getElementById("sugestaoModal").style.display = "none";
    abrirModal();
}

// Carousel
let currentIndex = 0;

function nextSlide() {
    const carousel = document.querySelector('.carousel');
    const items = document.querySelectorAll('.carousel-item');
    currentIndex = (currentIndex) % items.length;
    const offset = -currentIndex * 100;
    carousel.style.transform = `translateX(${offset}%)`;
}

// Muda o slide a cada 3 segundos
setInterval(nextSlide, 5000);


// // Google Analitics
// window.dataLayer = window.dataLayer || [];
// function gtag(){dataLayer.push(arguments);}
// gtag('js', new Date());

// gtag('config', 'G-8VH1F0BD1X');