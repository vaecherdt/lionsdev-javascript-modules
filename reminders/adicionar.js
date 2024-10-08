function adicionar(lembretes, rl, callback) {
    rl.question("Digite o que você quer ser lembrado: ", (lembrete) => {
        rl.question("Qual é o prazo para fazer isso? ", (prazo) => {
            lembretes.push({
                lembrete,
                prazo,
                concluido: false
            })
            console.log("Lembrete adicionado!")
            callback()
        })
    })
}

module.exports = { adicionar }
