function criarElementoResultadoSucesso(value) {
  const result = document.querySelector("#result");
  result.innerHTML = "";
  if (!!value.cep) {
    for (const property in value) {
      result.insertAdjacentHTML(
        "beforeend",
        `<li style=" background-color: orange ; padding: 5px; display: flex; color: black; font-weight: bolder;"> ${property}: ${value[property]}</li>`
      );
    }
  } else {
    criarElementoResultadoErro("CEP não encontrado!");
  }
}

function criarElementoResultadoErro(value) {
  const result = document.querySelector("#result");
  result.innerHTML = "";
  result.insertAdjacentHTML(
    "beforeend",
    `<h2 style="color: #F00">${value}</h2>`
  );
}

function pesquisaCep(cep) {
  const url = `https://viacep.com.br/ws/${cep}/json/`;
  fetch(url)
    .then((response) => response.json())
    .then((result) => {
      criarElementoResultadoSucesso(result)
      armazenaCep(cep);
    })
    .catch((err) => {
      criarElementoResultadoErro("CEP inválido!!");
    });
}

const form = document.querySelector("form");
const inputCEP = document.querySelector("#cep");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const cep = inputCEP.value.replace(/\G/g, "");
  if (/^[0-9]{8}$/.test(cep)) {
    pesquisaCep(cep);
  } else {
    criarElementoResultadoErro("CEP inválido!");
  }
});

// function cepsAmazenados(cep) {
//   const cepPesquisado = form.getElementsByTagName("input");
//   const cepArmazenado = cepPesquisado.value;
//   const arrayArmazenados = [...cepArmazenado];
//   arrayArmazenados.push(cepArmazenado);
//   console.log(arrayArmazenados);
// }

const cepsPesquisados = [];

function armazenaCep(cep) {
  cepsPesquisados.push(cep);
  console.log(cepsPesquisados)
}


const cepMostrar = document.querySelector('input').value
