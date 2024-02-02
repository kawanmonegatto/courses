let todoList = [];
let opt = "s";
let todoPrg, newValid, optValid = false;
const NEW = "new";
const LIST = "list";
const DELETE = "delete";
const QUIT = "quit";
const TODO_OPT = [NEW, LIST, DELETE, QUIT];

//Loop de iniciação do programa
while (todoPrg !== true) {
    //Reset de variáveis de loop
    optValid = newValid = false;
    //Prompt com verificação para escolher uma opção válida da lista.
    let usrOpt = prompt("O que deseja fazer?");
    while (optValid != true) {
        if (TODO_OPT.includes(usrOpt) == true) {
            optValid = true;
        } else {
            usrOpt = prompt("Opção invalida, digite novamente.")
        }
    }
    //Switch case para selecionar as opções disponíveis
    switch (usrOpt) {
        case NEW:
            while (newValid !== true) {
                if (opt == "s") {
                    todoList.push(prompt("Digite a tarefa para adicionar a lista."));
                    prompt
                    opt = prompt("Deseja adicionar outra tarefa? (s) ou (n)");
                } else if (opt == "n") {
                    newValid = true;
                }
            }
            break;
        case LIST:
            for (let i = 0; i < todoList.length; i++) {
                console.log(`${i} - ${todoList[i]}`);
            }
            break;
        case DELETE:
            let delItem = parseInt(prompt("Digite o numero do item que deseja remover."));
            todoList.splice(delItem, 1);
            break;
        case QUIT:
            console.log("Obrigado por usar nossa ToDo List")
            todoPrg = true;
            break;
        default:
            break;
    }
}