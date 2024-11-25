const form = document.getElementById('form-atividade');
const nomes = [];
const telefones = [];


let linhas = '';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha () {

    const inputNome = document.getElementById('nome');
    const inputTelefone = document.getElementById('telefone');

    if (telefones.includes(inputTelefone.value)){
        alert (`O telefone ${inputNomeAtividade.value} ja foi inserido`);
    } else {
    nomes.push(inputNome.value);
    telefones.push(parseFloat(inputTelefone.value));

    let linha = '<tr>';
    linha += `<td> ${inputNome.value} </td>`;
    linha += `<td> ${inputTelefone.value} </td>`;
    linha += `</tr>`;

    linhas += linha;
    }

    inputNome.value = '';
    inputTelefone.value = '';
}

function formataTelefone(input) {
    let value = input.value.replace(/\D/g, '');
    
    if (value.length <= 2) {
        value = `(${value}`;
    } else if (value.length <= 6) {
        value = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else {
        value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`;
    }
    
    input.value = value;
}

function atualizaTabela (){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}


