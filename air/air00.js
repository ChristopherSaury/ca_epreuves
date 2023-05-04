// Split
const SplitStr = (char1,char2) =>{

    // gestion des erreurs
    if(!char1 || !char2 || typeof char1 !== 'string'|| typeof char2 !== 'string' ){
        return console.log('Erreur : veuillez insérer deux chaîne de caractères');
    }
    let index = []
    //let result = []
    for (let i = 0; i < char1.length; i++){
        if(char1[i] === char2){
            index.push(i);
        }
    }
    for (let j = 0; j < index.length + 1; j++){
        if(j === 0){
            console.log(char1.slice(0,index[j]))
        }
        else if (j !== 0){
            console.log(char1.slice(index[j-1] + 1,index[j]))
        }
    }
    //console.log(result)
}

SplitStr('Bonjour les gars', ' ');

