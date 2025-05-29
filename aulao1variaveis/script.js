// Variáveis do jogador
let nomeJogador = "Sonic";
let aneisColetados = 57;
let faseAtual = "Green Hill";
let estaVivo = true;

// Exibir informações do jogador
console.log("Nome do jogador:", nomeJogador);
console.log("Número de anéis coletados:", aneisColetados);
console.log("Fase atual:", faseAtual);
console.log("Está vivo?", estaVivo);

// Alerta de boas-vindas
let nomeJogo = "Space Battle";
alert("Bem-vindo ao jogo " + nomeJogo + "!");

// Pontuação do jogador
let pontos = 0;
pontos += 50; // Bônus 1
pontos += 50; // Bônus 2
console.log("Pontuação do jogador:", pontos);

// Redução de vidas
let vidas = 5;
vidas -= 1; // Perdeu uma vida
console.log("Vidas restantes:", vidas);

// Status do jogo
let jogador = "MegaMan";
let energia = 100;
let fase = "Laboratório";
let possuiArmaEspecial = false;

console.log("Jogador:", jogador);
console.log("Energia:", energia);
console.log("Fase:", fase);
console.log("Possui arma especial?", possuiArmaEspecial);

// Alteração de fase
let faseAtual2 = "Floresta";
console.log("Fase atual:", faseAtual2);

faseAtual2 = "Montanha";
console.log("Nova fase atual:", faseAtual2);

// Mistura de dados
let nomeJogadora = "Lara";
let faseJogo = "Templo Perdido";
let pontosJogadora = 200;

console.log(`🎮 ${nomeJogadora} está na fase ${faseJogo} com ${pontosJogadora} pontos.`);
