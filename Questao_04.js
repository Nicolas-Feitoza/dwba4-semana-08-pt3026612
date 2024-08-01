class Aluno {
    constructor(primeiroNome, segundoNome, primeiraNota, segundaNota) {
        this.primeiroNome = primeiroNome;
        this.segundoNome = segundoNome;
        this.primeiraNota = primeiraNota;
        this.segundaNota = segundaNota;
    }
    nomeCompleto() {
        return `${this.primeiroNome} ${this.segundoNome}`;
    }
    media() {
        return (this.primeiraNota * 0.6) + (this.segundaNota * 0.4);
    }
    situacao() {
        return this.media() > 6 ? "Aprovado" : "Reprovado";
    }
}
const alunos = [
    new Aluno("Galileo", "Galilei", 7, 8.5),
    new Aluno("Isaac", "Newton", 9, 7.8),
    new Aluno("Marie", "Curie", 6.5, 8),
    new Aluno("Albert", "Einstein", 5, 6.5),
    new Aluno("Nikola", "Tesla", 8, 9)
];
function mostrarDadosAlunos() {
    alunos.forEach(aluno => {
        alert(`Nome Completo: ${aluno.nomeCompleto()}\nMédia: ${aluno.media()}\nSituação: ${aluno.situacao()}`);
    });
}
mostrarDadosAlunos();
