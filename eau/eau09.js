// Chiffre only
const checkNumber = (input) =>{
    if(typeof input !== 'string'){
        console.log('Erreur : veuillez saisir une chaîne de caractère');
    }
    for (let i = 0; i < input.length; i++){
        if(!input[i].match(/^[0-9]+$/)){
            return console.log(false);
        }
    }
    return console.log(true);
}

checkNumber('Bonjour 36');
checkNumber('42');
checkNumber('4445I353');