### 🎱 Bola 8 Mágica

Este projeto implementa uma versão simples da Bola 8 Mágica utilizando JavaScript.
O programa gera uma resposta aleatória entre nove opções pré-definidas, simulando o funcionamento do brinquedo original.

---

### 📖 Descrição

O usuário insere uma questão na variável questao.

O programa utiliza a função Math.random() para gerar um número aleatório de 1 a 9.

Cada número está associado a uma resposta fixa.

A questão e a resposta são exibidas no console.

---

### 📂 Estrutura do código
```javascript
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

console.log("Questão:", questao);
console.log("Resposta:", pergunta);

```

---

# 📝 Exemplo de saída
Questão: Vou conseguir o emprego?
Resposta: Sem dúvida

Exemplo de saída
Questão: Vou conseguir o emprego?
Resposta: Sem dúvida
