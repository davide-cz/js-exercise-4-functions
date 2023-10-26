/*
function confronto(parola1, parola2) {
  if (parola1.length === parola2.length) {
    console.log(`${parola1},${parola2}`);
  } else if (parola1.length > parola2.length) {
    console.log(`${parola1}`);
  } else {
    console.log(`${parola2}`);
  }
}
let parolaA = prompt("scrivi una parola");
let parolaB = prompt(`scrivi un'altra parola`);

confronto(parolaA, parolaB);
*/

/*
function revert(parola) {
  let rev;
  for (i < parola.length; i >= 0; i--) {
    rev = rev + parola[i];
  }
  return rev;
}

domanda = prompt("inserisci una parola");
revert(domanda);

console.log(domanda[i]);
*/

/*
function melt(array1, array2, array3) {
  for (i = 0; i < array1.length; i++) {
    let elem1 = array1[i];
    let elem2 = array2[i];

    array3.push(elem1);
    array3.push(elem2);
  }
}
let arrayA = ["1", "2", "3"];
let arrayB = ["a", "b", "c"];
let arrayC = [];

melt(arrayA, arrayB, arrayC);
alert(`${arrayC}`);
*/

let arraymele = [];

function mele(array1) {
  for (i = 0; i < 10; i++) {
    let mela = {
      peso: Math.random() * 0.5,
      diametro: Math.random() * 0.2,
      varieta: Math.floor(Math.random() * 10 + 1),
    };
    array1.push(mela);
  }
}

mele(arraymele);

console.log(arraymele);
