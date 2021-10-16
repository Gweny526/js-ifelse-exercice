// # exo 1
// let tabPrenoms = ["Jules", "Gweny", "Igor", "Céline", "Nasta", "Lou", "Lo", "Eek", "Hajir"];
// console.log(tabPrenoms);
// let tabL = tabPrenoms.length;
// let bjr = "bonjour ";
// console.log(tabL);
// tabPrenoms.forEach(element =>{
//     console.log("bonjour : " + element);
// })

console.log("______");
// # exo2

let rand = Math.floor(Math.random()* 10);
alert(`reponse ${rand}`)

// Exo 3
// QCM
let tabQuestion = ["2 + 3 = ", "5 + 7 = ", "10 + 32 = "];
let tabReponse = ["5", "12", "42"];
let tabQuestREpo = [];

// 1er question 
let reponse = parseInt(prompt(' ${tabQuestion[0]} ? '))
if (reponse != tabReponse[0]){
    reponse = parseInt(prompt(' ${tabQuestion[0]}  ?'))
}
// check la reponse de Ayhan sur discord
