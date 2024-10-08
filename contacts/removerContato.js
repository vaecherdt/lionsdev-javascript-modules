let contatos = require('./contatos');

function removerContato(id, confirmacao) {
	const index = contatos.findIndex(contato => contato.id === id);
	if (index !== -1) {
		if (confirmacao.toLocaleLowerCase() === 's') {
			contatos.splice(index, 1);
			return true
		} else {
			return false
		}
	}
}

module.exports = removerContato;