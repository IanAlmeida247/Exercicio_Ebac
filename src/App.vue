<template>
  <div id="app">
    <h1>Vamos Calcular!</h1>

    <div class="calculator">
      <div class="input-container">
        <input
          type="number"
          v-model="numero1"
          placeholder="Digite o primeiro número"
          class="input"
        />
        <select v-model="operacao" class="select">
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <input
          type="number"
          v-model="numero2"
          placeholder="Digite o segundo número"
          class="input"
        />
      </div>

      <h2 class="result">Resultado: {{ resultado }}</h2>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      numero1: 0,
      numero2: 0,
      operacao: '+',
    };
  },
  computed: {
    resultado() {
      let res;
      switch (this.operacao) {
        case '+':
          res = this.numero1 + this.numero2;
          break;
        case '-':
          res = this.numero1 - this.numero2;
          break;
        case '*':
          res = this.numero1 * this.numero2;
          break;
        case '/':
          // Prevenção de divisão por zero
          res = this.numero2 !== 0 ? this.numero1 / this.numero2 : 'Erro';
          break;
        default:
          res = 0;
          break;
      }
      return res;
    },
  },
};
</script>

<style scoped>
#app {
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f4f4f9;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

h1 {
  font-size: 2.5em;
  color: #4a90e2;
  margin-bottom: 30px;
}

.calculator {
  background-color: #ffffff;
  border-radius: 10px;
  padding: 30px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  width: 320px;
  text-align: center;
}

.input-container {
  display: flex;
  flex-direction: column;
  gap: 15px;
}

.input {
  padding: 12px;
  font-size: 1.2em;
  border: 2px solid #ddd;
  border-radius: 8px;
  text-align: center;
  width: 80%;
  margin: 0 auto;
  transition: border-color 0.3s ease;
}

.input:focus {
  border-color: #4a90e2;
}

.select {
  padding: 12px;
  font-size: 1.2em;
  border: 2px solid #ddd;
  border-radius: 8px;
  width: 80%;
  margin: 0 auto;
  background-color: #f9f9f9;
  color: #4a90e2;
  transition: border-color 0.3s ease;
}

.select:focus {
  border-color: #4a90e2;
}

.result {
  font-size: 1.5em;
  font-weight: bold;
  color: #333;
  margin-top: 20px;
}

h2 {
  margin-top: 20px;
  font-size: 1.5em;
  color: #333;
}
</style>





