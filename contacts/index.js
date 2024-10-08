const prompt = require('prompt-sync')();
const listarContatos = require('./listarContatos');
const adicionarContato = require('./adicionarContato');
const atualizarContato = require('./atualizarContato');
const removerContato = require('./removerContato');

function mainMenu() {
	console.log(`
-*- -*- -*- Menu -*- -*- -*-
1. Listar contatos
2. Adicionar contato
3. Atualizar contato
4. Remover contato
5. Sair
	`);

	const opcao = prompt('Escolha uma opção: ');

	switch (opcao) {
		case '1':
			listarContatos();
			mainMenu();
			break;
		case '2':
			const nome = prompt('Nome: ');
			let telefones = [];
			let telefone;
			while ((telefone = prompt('Telefone (ou deixe em branco para sair): '))) {
				telefones.push(telefone);
			}
			const email = prompt('Email: ');
			adicionarContato({ nome, telefones, email });
			console.log('Contato adicionado com sucesso!');
			mainMenu();
			break;
		case '3':
			listarContatos();
			const idAtualizar = parseInt(prompt('ID do contato a atualizar: '));
			const novoNome = prompt('Novo nome: ');
			let novosTelefones = [];
			let novoTelefone;
			while ((novoTelefone = prompt('Novo Telefone (Ou deixe em branco para sair): '))) {
				novosTelefones.push(novosTelefones)
			}
			const novoEmail = prompt('Novo email: ');
			atualizarContato(idAtualizar, { nome: novoNome, telefones: novosTelefones, email: novoEmail });
			console.log('Contato atualizado com sucesso!');
			mainMenu();
			break;
		case '4':
			listarContatos();
			const idRemover = parseInt(prompt('ID do contato a remover: '));
			let confirmacao = prompt(`Tem certeza que deseja remover este contato? (s/n)`)
			if (removerContato(idRemover, confirmacao)) {
				console.log('Contato removido com sucesso!');
			} else {
				console.log('Operação cancelada');
			}

			mainMenu();
			break;
		case '5':
			break;
		default:
			console.log('Opção inválida!');
			mainMenu();
	}
}

mainMenu();
