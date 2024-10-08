let contatos = require('./contatos');

function listarContatos() {
	contatos.forEach((contato, index) => {
		console.log(`
	ID: ${contato.id}
	Nome: ${contato.nome}
	Telefones: ${contato.telefones}
	Email: ${contato.email}`);
		});
}

module.exports = listarContatos;