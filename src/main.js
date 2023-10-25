
const cepInput = document.getElementById('cep');
const ruaInput = document.getElementById('rua');
const bairroInput = document.getElementById('bairro');
const estadoInput = document.getElementById('estado');
const cidadeInput = document.getElementById('cidade');
const numero = document.getElementById('numero');
const btnLimpar = document.getElementById('btnLimpar');
const btnSave = document.getElementById('btn');

let req = null;
let numeroRua= '';

async function busca(cepInput){
    const api = `https://viacep.com.br/ws/${cepInput}/json/`;

    const resposta = await fetch(api).then(res => res.json())
    .then(campos => {
        ruaInput.value = campos.logradouro,
        bairroInput.value = campos.bairro,
        estadoInput.value = campos.uf,
        cidadeInput.value = campos.localidade,
        numeroRua = numero.value
        req = campos;
    });

    return resposta;

}

cepInput.addEventListener('blur', () => {
    let campoCep = cepInput.value;

    busca(campoCep);
});

function Limpar(){
    cepInput.value = '';
    ruaInput.value = '';
    bairroInput.value = '';
    estadoInput.value = '';
    cidadeInput.value = '';
    numero.value = '';
}
  
btnSave.addEventListener('click', () =>{
    localStorage.setItem('endereco', JSON.stringify({
        cep: cep.value,
        rua: rua.value,
        numero: numero.value,
        bairro: bairro.value,
        estado: estado.value,
        cidade: cidade.value
    }))
});


  
  
  
  

