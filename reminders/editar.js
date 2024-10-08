const { listar } = require('./listar')

function editar(lembretes, rl, callback) {
    listar(lembretes)
    rl.question("Qual lembrete você deseja editar? ", (numeroDoLembrete) => {
        const index = parseInt(numeroDoLembrete) - 1
        if (lembretes.length > index && index >= 0) {
            rl.question("Digite o novo lembrete: ", (lembrete) => {
                rl.question("Qual é o prazo para fazer isso? ", (prazo) => {
                    lembretes[index] = {
                        lembrete,
                        prazo,
                        concluido: false
                    }
                    console.log("Lembrete editado!")
                    callback()
                })
            })
        } else {
            console.log("Lembrete não encontrado")
            callback()
        }
    })
}

module.exports = { editar }
