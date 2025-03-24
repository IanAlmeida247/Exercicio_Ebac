// Array de objetos com nome e nota dos alunos
const alunos = [
    { nome: 'João', nota: 8 },
    { nome: 'Maria', nota: 5 },
    { nome: 'Pedro', nota: 7 },
    { nome: 'Ana', nota: 4 },
    { nome: 'Carlos', nota: 6 }
];

  // Função para filtrar alunos com nota maior ou igual a 6
    function alunosAprovados(alunos) {
    return alunos.filter(aluno => aluno.nota >= 6);
}

  // Chamando a função e exibindo os alunos aprovados
    const aprovados = alunosAprovados(alunos);
    console.log(aprovados);