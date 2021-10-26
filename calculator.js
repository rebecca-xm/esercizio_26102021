/* 
    Sulla base di quanto detto a lezione, creare una calcolatrice capace di svolgere diverse operazioni
    (più ne mettete meglio è!).
    La scelta dell'operazione da effettuare (per esempio somma)
    e la scelta dei numeri, deve essere specificata dell'utente.
    A tal fine, potrete utilizzare la funzione 'prompt()' per catturarne i dati.
    
    ATTENZIONE:
    L'utilizzo delle callbacks, delle arrow function e dello spread operator
    sono elementi fondamentali di questa esercitazione, mi raccomando.
    Potete chiaramete controllare il codice scritto a lezione, ma cercate di non copiare.
*/

/* Esercizio avanzato:
    Oltre alle classici funzioni somma, moltiplicazione, ecc... provate ad implementare
    l'operazione potenza e l'operazione radice quadrata.
    SUGGERIMENTO: esistono delle funzioni della libreria Math (vista a lezione).
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
*/

const sum = (numOne, numTwo) => numOne + numTwo;
const sub = (numOne, numTwo) => numOne - numTwo;
const mult = (numOne, numTwo) => numOne * numTwo;
const div = (numOne, numTwo) => numOne / numTwo;
const pow = (numOne, numTwo) => Math.pow(numOne, numTwo);
const sqrt = (num) => Math.sqrt(num)
const cbrt = (num) => Math.cbrt(num)

function calculator(operation, numbers)
{
    return operation(...numbers);
}

let numChoice = prompt("Inserisci una delle seguenti operazioni/uno dei seguenti simboli matematici: somma (+), moltiplicazione (*), divisione (/), potenza (^), radice quadrata o radice cubica.");
let nums = prompt("Inserisci i numeri separati da una virgola: ");

const numbers = nums.split(",");
const parsedNumbers = [];

for(x of numbers) {
    parsedNumbers.push(parseInt(x));
}

let result;

switch(numChoice) {
    case "somma":
    case "+":
        totOperation = calculator(sum, parsedNumbers);
        break;
    case "moltiplicazione":
    case "*":
        totOperation = calculator(mult, parsedNumbers);
        break;
    case "divisione":
    case "/":
        totOperation = calculator(div, parsedNumbers);
        break;
    case "potenza":
    case "^":
        totOperation = calculator(pow, parsedNumbers);
        break;
    case "radice quadrata":
        totOperation = calculator(sqrt, parsedNumbers);
        break;
    case "radice cubica":
        totOperation = calculator(cbrt, parsedNumbers);
        break;
    default:
        totOperation = "Errore: operazione non ammessa.";
}
console.log(totOperation);