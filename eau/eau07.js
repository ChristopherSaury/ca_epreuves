// Majuscule sur deux
function UppercaseOnTwo(input) {
    if(!input || input === '' || typeof input !== 'string'){
        return console.log('Erreur de saisie');
    }

    let chars = input.toLowerCase().split("");
   
    for (let i = 0; i < chars.length; i += 2) {
    if(chars[i].match(/^[a-z]+$/) ){
        chars[i] = chars[i].toUpperCase();
    }
}
    let result = chars.join("");

    return console.log(result)
};

UppercaseOnTwo('Hello world !')
