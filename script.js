document.getElementById('startButton').addEventListener('click', function() {
    const song = document.getElementById('song');
    song.play();

    const coronau = document.getElementById('coronau')

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

    startButton.style.display = 'none';

    const interval = setInterval(() => {
        if (index < frases.length) {
            message.innerText = frases[index];
            message.style.opacity = 1;

            setTimeout(() => {
                message.style.opacity = 0;
            }, 7000);

            index++;
        } else {
            message.innerText = "¿ Quieres ser mi novia ?";
            message.style.opacity = 1;
            clearInterval(interval);
            document.getElementById('buttons').style.display = 'block';
        }
    }, 100);
const noButton = document.getElementById('noButton');
noButton.addEventListener('mouseover', function() {
    console.log("You're trying to reach the 'No' button!");

    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);

    noButton.style.position = 'absolute';
    noButton.style.left = x + 'px';
    noButton.style.top = y + 'px';
});

const yesButton = document.getElementById('yesButton');
yesButton.addEventListener('click', function() {
    console.log('Sí button clicked!');
    song.pause();
    coronau.play();
});

});