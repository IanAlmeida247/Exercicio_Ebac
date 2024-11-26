function validarFormulario() {
    
    const numeroA = parseFloat(document.getElementById('numeroA').value);
    const numeroB = parseFloat(document.getElementById('numeroB').value);
    
    
    const mensagem = document.getElementById('mensagem');
    
    if (numeroB > numeroA) {
        
        mensagem.textContent = "Parabéns! O número B é maior que o número A.";
        mensagem.style.color = "green";  
    } else {
        
        mensagem.textContent = "Erro! O número B deve ser maior que o número A.";
        mensagem.style.color = "red";    
    }
}
