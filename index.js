let nome = "Logica de programação";
let dataevento = "22/09/2021";
let dataatual = "20/09/2021";
let idade = 18;
let ocupacao = "estudante";
let palestrantes = 3;
let publico = 50;
let total = palestrantes + publico;

console.log(`
Nome do Evento: ${nome}
Data do evento: ${ dataevento}
Data atual: ${dataatual}
Idade: ${idade}
Ocupação: ${ocupacao}
Quantidade de Palestrantes: ${palestrantes} pessoas
Quantidade de convidados: ${publico} pessoas
Total de publico: ${total} pessoas
`)
if(dataevento <dataatual){
console.log("Evento não poderá ser cadastrado")
console.log("Motivo: Data do evento não poderá ser menor que a data atual!")
}
else if (idade <18){
console.log("Evento não poderá ser cadastrado")
console.log("Motivo: Idade do participante é menor que o permitido (18 anos)")
}
else if (total >100){
    console.log("Evento não poderá ser cadastrado")
    console.log("Motivo: Limite excedido 100 pessoas")    
}
else {
    console.log("Evento poderá ser cadastrado")
    console.log("Parabéns - cadastro atende todos os requisitos")  
}
