const readline = require('readline')
const { adicionar } = require('./adicionar')
const { listar } = require('./listar')
const { editar } = require('./editar')
const { marcarConcluido } = require('./marcarConcluido')

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

let lembretes = []
executar()

function executar() {
    console.log("-*- -*- -*- Lembretes -*- -*- -*-")
    console.log(`
1. Adicionar lembrete
2. Listar lembretes
3. Editar lembrete
4. Marcar lembrete como concluído
5. Sair
`)
    rl.question("Escolha uma opção: ", opcao => {
        switch (opcao) {
            case '1':
                adicionar(lembretes, rl, executar)
                break
            case '2':
                listar(lembretes)
                executar()
                break
            case '3':
                editar(lembretes, rl, executar)
                break
            case '4':
                marcarConcluido(lembretes, rl, executar)
                break
            case '5':
                rl.close()
                break
            default:
                console.log("Opção inválida")
                executar()
                break
        }
    })
}
