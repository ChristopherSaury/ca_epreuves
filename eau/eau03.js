// Paramètre à l'envers
function displayArguments(){
    if(arguments.length <= 0 ){
        return console.log('Erreur : Il n\'y a pas d\'argument ');
    }
    let result = '';
    for (let i = arguments.length - 1; i >= 0 ; i--){
        result+= arguments[i] + '\n';
    }
    return console.log(result);
}

displayArguments('Suis','Je','Drôle');
displayArguments('ha','ho');
displayArguments('Bonjour 36');
displayArguments();