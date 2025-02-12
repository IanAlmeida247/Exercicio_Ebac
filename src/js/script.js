// Exemplo de função que mostra um alerta
function showAlert() {
    alert('Olá! Este é um alerta!');
}

// Exemplo de interatividade com o DOM
document.getElementById('myButton').addEventListener('click', function() {
    alert('Botão clicado!');
});

// Função para trocar o conteúdo de um elemento com o id 'myElement'
function changeContent() {
    document.getElementById('myElement').textContent = 'O conteúdo foi alterado!';
}

// Um exemplo simples de manipulação de array
let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map(num => num * 2);

console.log(doubledNumbers);  // Exibe o array com números dobrados no console

// Chamando as funções para testes
showAlert();
changeContent();
