const { listar } = require('./listar')

function marcarConcluido(lembretes, rl, callback) {
    listar(lembretes)
    rl.question("Qual lembrete você deseja marcar como concluído? ", (numeroDoLembrete) => {
        const index = parseInt(numeroDoLembrete) - 1
        if (lembretes.length > index && index >= 0) {
            lembretes[index].concluido = true
            console.log("Lembrete marcado como concluído!")
            callback()
        } else {
            console.log("Lembrete não encontrado")
            callback()
        }
    })
}

module.exports = { marcarConcluido }
