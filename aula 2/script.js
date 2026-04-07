// If "Ternário" 

let idade1 = 18 

let status = idade1 >= 18 ? "Maior de idade." : "Menor de idade" // o ? seria se for verdadeiro faça tal, o : seria o senão faça tal coisa.

console.log(idade1)
console.log(status)

// Coalescência nula

let valor = null

let resultado = valor ?? "Valor padrão." // se tal variável é igual a outra verdadeira (no caso não é, por ser nulo), printe o valor de "valor", se não (??) printe outra coisa

console.log(resultado)

let idade2 = 25
let temCarteira = true

// Estrutura de condição

if (idade2 >= 18 && temCarteira) {
    console.log("Pode dirigir.")
}

if (idade2 < 18 || !temCarteira ) { //! no temCarteira é para inverter o valor, ou seja, se torna false
    console.log("Não pode dirigir.")
}

if (!temCarteira) {
    console.log("Não pode dirigir.")
}

let tarefaConcluida = true

if (tarefaConcluida) {
    console.log("A tarefa está concluída.")
}

let prioridade = 1

 if (prioridade >= 3) {
     console.log("Prioridade alta.")
 } else {
     console.log("Prioridade não é alta.")
} 

// console.log(prioridade >= 3 ? "Prioridade alta" : "Prioridade não é alta") - if Ternário.

if (prioridade === 1) {
    console.log("Prioridade baixa.")
} else if (prioridade === 2) {
    console.log("Prioridade média.")
} else if (prioridade >= 3) {
    console.log("Prioridade alta.")
} else {
    console.log("Prioridade desconhecida.")
}

let diaSemana = new Date().getDay()

console.log(diaSemana)

if (diaSemana === 0) {
    console.log("Domingo.")
} else if (diaSemana === 1) {
    console.log ("Segunda.")
} else if (diaSemana === 2) {
    console.log ("Terça.")
} else if (diaSemana === 3) {
    console.log ("Quarta.")
} else if (diaSemana === 4) {
    console.log ("Quinta.")
} else if (diaSemana === 5) {
    console.log ("Sexta.")
} else if (diaSemana === 6) {
    console.log ("Sábado.")
}

switch (diaSemana) {
    case 0:
        console.log("Domingo.")
        break;
    case 1:
        console.log("Segunda.")
        break;
    case 2:
        console.log("Terça.")
        break;
    case 3:
        console.log("Quarta.")
        break;
    case 4:
        console.log("Quinta.")
        break;
    case 5:
        console.log("Sexta.")
        break;
    case 6:
        console.log("Sábado.")
        break;

    default:
        console.log("Dia inválido.")
        break;
}

// Estrutura de repetição

for (let i = 0;i < 5;i++) { // A estrutura do for tem três quadrantes: 1- definindo variável. 2- definindo até onde a execução repete. 3- definindo o incremento da variável, no caso do i++ é de 1 em 1, para 2 em 2 seria i = i + 2 ou + 3 e etc.
    console.log("Contagem:", i)
}

let contador = 0

while (contador < 5) { // Enquanto tal coisa for verdadeira, faça tal coisa. Basicamente o mesmo que o for, a diferença é que não se define a variável dentro dele.
    console.log("Contador")
    contador++
}

let numero = 5

do {
    console.log("Número é:", numero)
    numero--
} while (numero > 0)