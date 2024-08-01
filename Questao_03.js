let alunos = [
    {nome: "João da Silva", nota1: 7, nota2: 8.5},
    {nome: "Maria Oliveira", nota1: 6, nota2: 9},
    {nome: "Pedro Santos", nota1: 8, nota2: 7.5}
];

alunos.forEach(aluno => {
    let nota1Peso = aluno.nota1 * 0.6;
    let nota2Peso = aluno.nota2 * 0.4;
    let notaFinal = nota1Peso + nota2Peso;
    alert(`Aluno: ${aluno.nome}\nNota 1: ${aluno.nota1}\nNota 2: ${aluno.nota2}`);
    alert(`Nota Final: ${notaFinal}`);
});