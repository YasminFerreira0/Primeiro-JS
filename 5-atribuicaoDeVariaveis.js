console.log("Trabalhando com Atribuição de Variaveis");

//const idade = 18;
const primeiroNome = "Yasmin";
//let nome = "Yasmin";//variavel comum
const sobrenome = "Ferreira";

console.log(primeiroNome, sobrenome);//a virgula e usada como separador de itens

console.log(primeiroNome + " " + sobrenome);//a sinal de mais e usado para fazer uma concatenação ("operação de unir o conteudo de duas strings")

console.log(`Meu nome é ${primeiroNome} ${sobrenome}`);//textos declarados usando crase.${ourValue} interpolação de variaveis 

//nome = nome + sobrenome;//sobreescre um variavel com um novo valor atribuido
const nomeCompleto = primeiroNome + sobrenome;

console.log(`Meu nome é ${nomeCompleto}`); 

//const- variavel contante, que nao pode ser mudado o valor | let- variavel comum, que pode ser atribuido novos valores, podendo ser sobreescrita varias vezes

//na linguaguem JavaScreipt variaveis podem ser sobreescritas de forma muito flexifel comparada a outra linguagens, podendo uma variavel do tipo texto poder ser reescrita como tipo numero. Entrtando, não é uma boa prativa ficar reatribuindo variaveis, é e recomendado usar variaveis do tipo const

let idade; //declarando variável
idade = 17; //atribuindo valor
idade = idade + 1; //reatribuindo valor
console.log(idade);

