function checkAnswer(answer, questionNumber) {
    const resultado = document.getElementById('resultado');

    if (questionNumber === 1 && answer === 'Angular') {
        resultado.textContent = "Correto! Angular é do Google.";
        resultado.className = "alert alert-success";
    } else if (questionNumber === 2 && answer === 'Python') {
        resultado.textContent = "Correto! Python é usada em IA e ciência de dados.";
        resultado.className = "alert alert-success";
    } else {
        resultado.textContent = "Resposta incorreta. Tente novamente!";
        resultado.className = "alert alert-danger";
    }
}
