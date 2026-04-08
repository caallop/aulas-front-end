/*
// Criação de strings
let titulo = "Aprender JavaScript";
let descricao = 'Estudar manipulação de strings';

console.log("Título:", titulo);
console.log("Descrição:", descricao);

// Comprimento da string
console.log("Comprimento do título:", titulo.length);//mostra a quantidade de simbolos (inclui espaço) de uma variavel

// Acesso a caracteres individuais
console.log("Primeiro caractere:", titulo[0]);//mostra o 1 elemento.
console.log("Último caractere:", titulo[titulo.length - 1]); //serve para, sempre puxar o ultimo caractere, titulo.lenght traz o numero do indice, porem, o numero retornado conta o primeiro caractere como "0", então o menos 1 serve para "balancear"
console.log("Caractere na posição 9:", titulo.charAt(9));
*/
/*
let titulo = "Aprender JavaScript";
let descricao = 'Estudar manipulação de strings';

// Concatenação tradicional
let categoria = "Estudo"
let infoCompleta = "Categoria: " + categoria + " - " + titulo
console.log("Concatenação tradicional:", infoCompleta)

console.log("--------------------------------------------------------------------------------------------")
console.log("--------------------------------------------------------------------------------------------")
console.log("--------------------------------------------------------------------------------------------")


// Template strings (ES6+)
let dataCriacao = "01/06/2025"
let resumo = `Tarefa: ${titulo} (${categoria})
Criada em: ${dataCriacao}
Descrição: ${descricao}`
console.log("Template string:")
console.log(resumo)
*/

/*
let titulo = "Aprender JavaScript";
let descricao = 'Estudar manipulação de strings';
// Métodos para busca em strings


console.log("Posição de 'JavaScript':", titulo.indexOf("JavaScript")); //procura aonde esta a palavra da função nativa "indexof(<palavra que quer ser procurada>) e retorna o indice"

console.log("'JavaScript' está presente?", titulo.includes("JavaScript"));//acho que está facil esse

console.log("Começa com 'Aprender'?", titulo.startsWith("Aprender"));//acho que está facil esse

console.log("Termina com 'Script'?", titulo.endsWith("Script"));//acho que está facil esse
*/
/*
// Função que trunca uma string se ela for maior que um tamanho máximo
const truncarDescricao = (texto, maxLength = 30) => {
  if (texto.length <= maxLength) {
    return texto;
  }
  return texto.substring(0, maxLength) + "...";
}

let descricaoLonga = "Este é um exemplo de uma descrição muito longa que precisará ser truncada para exibição.";
console.log(descricaoLonga.length)
console.log("Descrição truncada:", truncarDescricao(descricaoLonga));
console.log("Descrição truncada (20 caracteres):", truncarDescricao(descricaoLonga, 20));
*/

/*
let texto = "JavaScript é incrível!";
console.log("Original:", texto);
console.log("slice(0, 10):", texto.slice(0, 10));      // "JavaScript"
console.log("substring(0, 10):", texto.substring(0, 10)); // "JavaScript"
*/

/*
let tags = "javascript,programação,web,frontend";
let arrayTags = tags.split(",");
console.log("Array de tags:", arrayTags);

let listaTarefas = ["Estudar JS", "Criar TaskMaster", "Testar aplicação"];
let textoTarefas = listaTarefas.join(" | ");
console.log("Lista de tarefas formatada:", textoTarefas);
*/

/*
// Função para destacar um termo em um texto
function destacarTermo(texto, termo) {
  if (!termo) return texto;
  const regex = new RegExp(termo, 'gi');
  return texto.replace(regex, `**$&**`);
}
let busca = destacarTermo("JavaScript é uma linguagem incrível. Amo javascript!", "javascript");
console.log("Resultado com destaque:", busca);
*/

/*
// Exibindo constantes
console.log("Math.PI:", Math.PI);
console.log("Math.E:", Math.E);

// Cálculo da área de um círculo
const raio = 5;
const areaCirculo = Math.PI * Math.pow(raio, 2);
console.log(`Área de um círculo com raio ${raio}: ${areaCirculo}`);
*/

/*
const numero = 9.7;
console.log("Math.round(9.7):", Math.round(numero));
console.log("Math.floor(9.7):", Math.floor(numero));//melhor
console.log("Math.ceil(9.7):", Math.ceil(numero));
console.log("Math.trunc(9.7):", Math.trunc(numero));

const pi = Math.PI;
console.log("Pi com 2 casas decimais:", pi.toFixed(2)); //muuito bom!
*/
/*
// Função para gerar número aleatório entre min e max
const numeroAleatorioEntre = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("Número aleatório entre 1 e 1000000:", numeroAleatorioEntre(1, 1000000));
*/
/*
// Data atual
const hoje = new Date();
console.log("Data atual:", hoje.toString());

// Data a partir de string ISO
const dataISO = new Date("2025-06-15T10:30:00");
console.log("Data a partir de string ISO:", dataISO);

// Data a partir de componentes (mês: 0 a 11)
const dataComponentes = new Date(2025, 5, 15, 10, 30, 0);
console.log("Data a partir de componentes:", dataComponentes);
*/
/*
const hoje = new Date();
// Função para formatar data no formato "DD/MM/AAAA"
function formatarData(data) {
  const dia = data.getDate().toString().padStart(2, '0');
  const mes = (data.getMonth() + 1).toString().padStart(2, '0');
  const ano = data.getFullYear();
  return `${dia}/${mes}/${ano}`;
}

console.log("Data formatada:", formatarData(hoje));
*/
/*
// Diferença entre duas datas (em milissegundos) e conversão para dias
const dataInicial = new Date(2025, 0, 1);
const dataFinal = new Date(2025, 11, 31);
const diferencaMs = dataFinal - dataInicial;
const diferencaDias = Math.ceil(diferencaMs / (1000 * 60 * 60 * 24));
console.log("Diferença em dias:", diferencaDias);
*/
function contarVogais(texto) {
  let contador = 0;
  const vogais = "aeiouAEIOU";
  for (let i = 0; i < texto.length; i++) {
    if (vogais.indexOf(texto[i]) !== -1) {
      contador++;
    }
  }
  return contador;
}

console.log("Vogais em 'JavaScript':", contarVogais("JavaScript"));