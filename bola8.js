

const questao = "Coloque a questão aqui";

const numeroAleatorio = Math.floor(Math.random() * 9) + 1;

let pergunta = "";

if (numeroAleatorio === 1){
  pergunta = 'Sim, definitivamente';
} else if (numeroAleatorio === 2) {
  pergunta = 'É decididamente assim';
} else if (numeroAleatorio === 3) {
  pergunta = 'Sem dúvida';
} else if (numeroAleatorio === 4) {
  pergunta = 'Resposta nebulosa, tente novamente';
} else if (numeroAleatorio === 5) {
  pergunta = 'Pergunte novamente mais tarde';
} else if (numeroAleatorio === 6) {
  pergunta = 'Better not tell you now';
} else if (numeroAleatorio === 7) {
  pergunta = 'Minhas fontes dizem que não';
} else if (numeroAleatorio === 8) {
  pergunta = 'Perspectiva não tão boa';
} else if (numeroAleatorio === 9) {
  pergunta = 'Muito duvidoso';
} else {
  pergunta = 'Error';
}

console.log("questão: ", questao);
console.log("pergunta:   ", pergunta);
  
