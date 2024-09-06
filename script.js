document.getElementById('startButton').addEventListener('click', function() {
    // Iniciar canción
    const song = document.getElementById('song');
    song.play();

    // Frases de amor
    const frases = [
        "Eres mi luz en los días más oscuros.",
        "Cada momento contigo es un regalo.",
        "Gracias por tu paciencia infinita.",
        "Eres mi paz, mi alegría y mi inspiración.",
        "El amor que me das me hace ser mejor.",
        "No imagino mi vida sin ti.",
        "Tu sonrisa ilumina mi mundo.",
        "Agradezco cada día tenerte a mi lado.",
        "Eres el mejor capítulo de mi vida.",
        "Gracias por ser parte de mi vida.",
        "Gracias por hacer parte de mi vida."
    ];

    let index = 0;
    const message = document.getElementById('message');
    const startButton = document.getElementById('startButton');

    // Ocultar botón
    startButton.style.display = 'none';

    // Mostrar frases con intervalo
    const interval = setInterval(() => {
        if (index < frases.length) {
            message.innerText = frases[index];
            message.style.opacity = 1;

            setTimeout(() => {
                message.style.opacity = 0;
            }, 7000); // Esconder la frase después de 2 segundos

            index++;
        } else {
            message.innerText = "¿ Quieres ser mi novia ?";
            message.style.opacity = 1;
            clearInterval(interval);
        }
    }, 10000); // Cambiar la frase cada 3 segundos
});
