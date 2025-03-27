<script setup>
import { ref, computed } from 'vue';

const num1 = ref('');
const num2 = ref('');
const operacao = ref(null);
const expressao = ref('');

const resultado = computed(() => {
  let n1 = parseFloat(num1.value);
  let n2 = parseFloat(num2.value);
  let res;

  // Verificando se num1 ou num2 são números válidos
  if (isNaN(n1) || isNaN(n2)) {
    return 'Erro';
  }

  switch (operacao.value) {
    case '+':
      res = n1 + n2;
      break;
    case '-':
      res = n1 - n2;
      break;
    case '*':
      res = n1 * n2;
      break;
    case '/':
      if (n2 === 0) {
        res = 'Erro';
      } else {
        res = n1 / n2;
      }
      break;
    default:
      res = n1;
  }
  return res;
});

function adicionarNumero(num) {
  if (operacao.value === null) {
    num1.value += num.toString();
  } else {
    num2.value += num.toString();
  }
  expressao.value = `${num1.value} ${operacao.value ? `${operacao.value} ` : ''}${num2.value}`;
}

function selecionarOperacao(oper) {
  if (num1.value !== '' && num2.value !== '') {
    calcularResultado();
  }
  operacao.value = oper;
  expressao.value = `${num1.value} ${oper}`;
}

function calcularResultado() {
  if (num1.value !== '' && num2.value !== '') {
    num1.value = resultado.value.toString();
    num2.value = '';
    operacao.value = null;
    expressao.value = num1.value;
  }
}

function limparDisplay() {
  num1.value = '';
  num2.value = '';
  operacao.value = null;
  expressao.value = '';
}
</script>

<template>
  <div class="app">
    <div class="calculadora">
      <h1>Vamos Calcular</h1>

      <div class="display">
        <p class="resultado">{{ expressao }}</p>
      </div>

      <div class="teclado">
        <button @click="adicionarNumero(7)">7</button>
        <button @click="adicionarNumero(8)">8</button>
        <button @click="adicionarNumero(9)">9</button>
        <button @click="selecionarOperacao('+')">+</button>

        <button @click="adicionarNumero(4)">4</button>
        <button @click="adicionarNumero(5)">5</button>
        <button @click="adicionarNumero(6)">6</button>
        <button @click="selecionarOperacao('-')">-</button>

        <button @click="adicionarNumero(1)">1</button>
        <button @click="adicionarNumero(2)">2</button>
        <button @click="adicionarNumero(3)">3</button>
        <button @click="selecionarOperacao('*')">*</button>

        <button @click="adicionarNumero(0)">0</button>
        <button @click="limparDisplay">C</button>
        <button @click="calcularResultado">=</button>
        <button @click="selecionarOperacao('/')">/</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #f8f9fa, #0072ff);
  font-family: 'Roboto', sans-serif;
}

.calculadora {
  width: 100%;
  max-width: 380px;
  background-color: #34495e;
  border-radius: 20px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.2);
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

h1 {
  font-size: 2.8em;
  color: #fff;
  font-family: 'Pacifico', cursive;
  margin-bottom: 20px;
  text-align: center;
}

.display {
  width: 100%;
  padding: 20px;
  text-align: right;
  background-color: #ecf0f1;
  border-radius: 12px;
  margin-bottom: 20px;
}

.display p {
  font-size: 3em;
  color: #2c3e50;
  margin: 0;
}

.teclado {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  width: 100%;
}

button {
  padding: 25px;
  font-size: 1.6em;
  border-radius: 12px;
  border: none;
  background-color: #ecf0f1;
  color: #2c3e50;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.1s ease;
}

button:hover {
  background-color: #bdc3c7;
  transform: scale(1.05);
}

button:active {
  background-color: #95a5a6;
}

button:focus {
  outline: none;
}

button:nth-child(4n) {
  background-color: #f39c12;
  color: white;
}

button:nth-child(4n):hover {
  background-color: #e67e22;
}

button:nth-child(16) {
  background-color: #27ae60;
  color: white;
}

button:nth-child(16):hover {
  background-color: #2ecc71;
}
</style>








