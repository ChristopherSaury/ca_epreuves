// String dans string
const strDetect = (char1, char2) =>{
    let comparison = '';
    let match = 0;

    if(typeof char1 !== 'string' || typeof char2 !== 'string' || !char1 || !char2){
        return console.log('Erreur : Veuillez saisir des chaîne de caractère!!');
    }else if(char1 === '' || char2 === ''){
        return console.log('Erreur : Veuillez saisir toutes les entrées !!');
    }else if (char2.length > char1.length){
        return console.log('Erreur : La chaîne à comparer est plus longue que la chaîne de comparaison!!');
    }

    let firstLetter = [];
    for (let i = 0; i < char1.length; i++){
        if(char1[i] === char2[0]){
            firstLetter.push(i);
        }
    }
    firstLetter.forEach(index => {
        for (i = index; i < index + char2.length; i++){
            comparison+= char1[i];
        }
        comparison === char2 ? match++ : comparison = '';
    });
    
    if(match){
        return console.log(true);
    }else{
        return console.log(false);
    }
}
strDetect('bonjour', 'jour')
strDetect('bonjour', 'joure')
strDetect('bonjour', '')