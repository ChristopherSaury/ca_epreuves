// Index wanted
const WantedIndex = (input) =>{
    if (typeof input !== 'string' || !input){
        return console.log('Erreur : Veuillez saisir un chaîne de caractère');
    }
    let sentence = input.split(' ');
    
    for (let i = 0; i < sentence.length - 1; i++){
        if(sentence[i] === sentence[sentence.length -1]){
            return console.log(i);
        }
    }
    return console.log(-1);
}

WantedIndex('Ceci est le monde qui contient Charlie un homme sympa Charlie');
WantedIndex('test test test');
WantedIndex('test boom');
