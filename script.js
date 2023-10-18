document.addEventListener('DOMContentLoaded', function () {
    const resultado = document.getElementById('resultado');
    const calcularAmor = document.getElementById('calcularAmor');
    const frases = [
        "Você é a erva do meu chimarrão",
        "Você é a pessoa mais incrível do mundo",
        "Você é a pessoa mais linda do mundo",
        "O seu cabelo é muito lindo",
        "Você tem um estilo lindo",
        "O seu sorriso é lindo",
        "Você é muito cheirosa",
        "É muito talentosa",
        "Amo a sua criatividade",
        "Independente do dia te amarei para sempre",
        "Você gosta de Toddynho? Sim? Então sou Toddynho seu!",
        "Você tem um mapa? Porque eu me perdi no brilho dos seus olhos.",
        "Você não é pescoço, mas mexeu com a minha cabeça.",
        "Não sou traficante, mas eu quero a sua boca.",
    ];

    calcularAmor.addEventListener('click', function () {
        const amorPercentage = Math.floor(Math.random() * 51) + 101; // Gera uma porcentagem aleatória
        resultado.textContent = `O amor do Erik por você, Victoria, é de ${amorPercentage}% ou mais! 💖`;
        
        const randomIndex = Math.floor(Math.random() * frases.length); // Escolhe uma frase aleatória
        const fraseAleatoria = frases[randomIndex];
        
        const fraseElement = document.getElementById('fraseAleatoria');
        fraseElement.textContent = fraseAleatoria;
    });
});