var estudante = {
    nome:"Alan",
    nota:"5.5",
    curso:"computação",

    getNome:function(){//definindo método
        return this.nome
    }
}
document.getElementById("demo").innerHTML = "O nome do estudante é: " + estudante.getNome()