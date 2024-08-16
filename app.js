// script.js

// Variáveis para armazenar o número de jogadas e o resultado
let numJogadas = 0; // Contador para rastrear o número de jogadas feitas
const maxJogadas = 3; // Número máximo de jogadas permitido no jogo!!!

// Variáveis para armazenar os pontos do usuário e do computador
let userPoints = 0; // Contador para os pontos do usuário
let computerPoints = 0; // Contador para os pontos do computador

// Função que é chamada quando o usuário faz uma escolha
function play(userChoice) {
    // Incrementa o número de jogadas
    numJogadas++;

    // Verifica se o número máximo de jogadas foi atingido
    if (numJogadas > maxJogadas) {
        // Atualiza a mensagem para informar que o jogo terminou
        document.getElementById('resultMessage').innerText = 'O jogo terminou. Recarregue a página para jogar novamente.';
        // Limpa as escolhas exibidas
        document.getElementById('userChoice').innerText = '';
        document.getElementById('computerChoice').innerText = '';
        return; // Sai da função para não continuar com o processamento
    }

    // Array contendo as opções possíveis para o jogo
    const choices = ['pedra', 'papel', 'tesoura'];
    // Escolha aleatória do computador
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
    // Variável para armazenar a mensagem de resultado
    let resultMessage = '';

    // Determina o resultado da jogada
    if (userChoice === computerChoice) {
        resultMessage = 'Empate!'; // Se for empate
    } else if (
        // Condições onde o usuário ganha
        (userChoice === 'pedra' && computerChoice === 'tesoura') ||
        (userChoice === 'papel' && computerChoice === 'pedra') ||
        (userChoice === 'tesoura' && computerChoice === 'papel')
    ) {
        resultMessage = 'Você ganhou!'; // Se o usuário ganhar
        userPoints++; // Incrementa os pontos do usuário
    } else {
        resultMessage = 'Você perdeu!'; // Caso contrário, o usuário perde
        computerPoints++; // Incrementa os pontos do computador
    }

    // Atualiza o texto do elemento com o ID 'resultMessage' com a mensagem de resultado e número da jogada
    document.getElementById('resultMessage').innerText = `Jogada ${numJogadas} de ${maxJogadas}: ${resultMessage}`;
    // Atualiza o texto do elemento com o ID 'userChoice' com a escolha do usuário
    document.getElementById('userChoice').innerText = `Sua escolha: ${userChoice}`;
    // Atualiza o texto do elemento com o ID 'computerChoice' com a escolha do computador
    document.getElementById('computerChoice').innerText = `Escolha do computador: ${computerChoice}`;
    // Atualiza o texto do elemento com o ID 'score' com a pontuação atual
    document.getElementById('score').innerText = `Pontuação - Você: ${userPoints} | Computador: ${computerPoints}`;

    // Se o número máximo de jogadas for atingido, exibe uma mensagem final com a pontuação
    if (numJogadas === maxJogadas) {
        document.getElementById('resultMessage').innerText += ` O jogo terminou. Recarregue a página para jogar novamente. Pontuação Final - Você: ${userPoints} | Computador: ${computerPoints}`;
    }
}

// Função para reiniciar o jogo
function resetGame() {
    // Reseta o número de jogadas
    numJogadas = 0; 
    // Reseta os pontos do usuário
    userPoints = 0; 
    // Reseta os pontos do computador
    computerPoints = 0; 
    // Atualiza o texto dos elementos para exibir a mensagem inicial e limpar as escolhas e a pontuação
    document.getElementById('resultMessage').innerText = 'Escolha uma opção!';
    document.getElementById('userChoice').innerText = '';
    document.getElementById('computerChoice').innerText = '';
    document.getElementById('score').innerText = 'Pontuação - Você: 0 | Computador: 0';
}
