// Taille d'une chaîne
function countString(characters){
    let count = 0;
    if (arguments.length > 1){
        return console.log('erreur');
    }else if (typeof characters !== 'string'){
        return console.log('erreur');
    }else if(characters === ''){
        return console.log('erreur');
    }else {
        for (let i = 0; i < characters.length; i++){
            count++;
        }
        return console.log(count);
    }
}

countString('Hello world!');
countString('');
countString('Bonjour', 'Aurevoir');
countString(10);