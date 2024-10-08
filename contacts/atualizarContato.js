let contatos = require('./contatos');

function atualizarContato(id, novoContato) {
	const index = contatos.findIndex(contato => contato.id === id);
	if (index !== -1) {
		let jaExiste = contatos.find(cont => cont.email === novoContato.email);
		if (jaExiste) {
			throw new Error('Já existe um contato com esse email');
		} else {
			contatos[index] = {id, ...novoContato};
		}
	} else {
		throw new Error('Contato não encontrado');
	}
}


module.exports = atualizarContato;



