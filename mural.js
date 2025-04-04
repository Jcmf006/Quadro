// Define a data e hora da última mensagem
const ultimaMensagem = new Date("2025-04-02T23:30:00"); // Formato AAAA-MM-DDTHH:MM:SS

function atualizarTempo() {
    const agora = new Date();
    let diferenca = agora - ultimaMensagem;

    if (diferenca < 0) {
        document.getElementById("tempo-passado").innerText = "A data ainda não chegou.";
        return;
    }

    let segundos = Math.floor(diferenca / 1000);
    let minutos = Math.floor(segundos / 60);
    let horas = Math.floor(minutos / 60);
    let dias = Math.floor(horas / 24);
    let meses = Math.floor(dias / 30);
    let anos = Math.floor(dias / 365);

    // Ajusta os valores para exibir corretamente
    dias %= 30;
    horas %= 24;
    minutos %= 60;
    segundos %= 60;

    // Formata a string corretamente
    let tempoFormatado = `${anos} anos, ${meses} meses, ${dias} dias, ${horas} horas, ${minutos} minutos e ${segundos} segundos`;

    // Adiciona lembrete caso passe de um mês
    if (meses >= 1 || anos >= 1) {
        tempoFormatado += " 🚨 Já passou de um mês! Um sushi deve ser pago! 🍣";
    }

    document.getElementById("tempo-passado").innerText = tempoFormatado;
}

// Atualiza a cada segundo
setInterval(atualizarTempo, 1000);

// Chamada inicial para exibir o tempo imediatamente ao carregar a página
atualizarTempo();
