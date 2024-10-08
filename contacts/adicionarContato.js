let contatos = require('./contatos');

function adicionarContato(contato) {
    contato.id = contatos.length + 1;

    let jaExiste = contatos.find(cont => cont.email === contato.email);
    if (jaExiste) {
        throw new Error('Já existe um contato com esse email');
    } else {
        contatos.push(contato);
    }
}
  
module.exports = adicionarContato;