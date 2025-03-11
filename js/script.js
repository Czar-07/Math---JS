function verificarNumero() {
    var numero = document.getElementById("numero").value;
    var mensagem = '';

    if (numero === "") {
        mensagem = "Por favor, digite um número.";
    } else if (numero >= 0) {
        mensagem = "Positivo - " + "Positivo".length + " letras";
    } else {
        mensagem = "Negativo - " + "Negativo".length + " letras";
    }

    document.getElementById("resultado").innerHTML = mensagem;
}