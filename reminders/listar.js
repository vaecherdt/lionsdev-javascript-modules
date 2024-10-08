function listar(lembretes) {
    if (lembretes.length == 0) {
        console.log("Nenhum lembrete cadastrado.")
    } else {
        console.log("Lembretes:")
        lembretes.forEach((lembrete, index) => {
            console.log(`${index + 1}. ${lembrete.lembrete} - ${lembrete.prazo} - ${lembrete.concluido ? "Concluído" : "Pendente"}`)
        })
    }
}

module.exports = { listar }
