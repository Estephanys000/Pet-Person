function validarFormulario() {
    // Obter os valores dos campos
    var nome = document.getElementById("nome").value;
    var telefone = document.getElementById("telefone").value;
    var email = document.getElementById("email").value;
    var mensagem = document.getElementById("mensagem").value;

    // Verificar se o campo 'nome' está vazio
    if (nome.trim() == "") {
        alert("Por favor, preencha o campo 'Seu nome'.");
        return false;
    }

    // Verificar se o campo 'email' está vazio
    if (email.trim() == "") {
        alert("Por favor, preencha o campo 'Seu E-mail'.");
        return false;
    }

    // Verificar se o campo 'mensagem' está vazio
    if (mensagem.trim() == "") {
        alert("Por favor, escreva uma mensagem.");
        return false;
    }

    // Verificar se o telefone foi preenchido
    if (telefone.trim() != "" && !/^\d{10,11}$/.test(telefone)) {
        alert("Por favor, preencha um telefone válido (10 ou 11 dígitos).");
        return false;
    }

    // Se tudo estiver correto, permite o envio do formulário
    return true;
}
