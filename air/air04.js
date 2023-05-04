// Un seul à la fois
const OnceAtTime = (char) =>{
    if(!char || typeof char !== 'string'){
        return console.log('Erreur : veuillez saisir une chaîne de caractères')
    }
    let charToArr = char.split('');
    //return console.log(charToArr)
    for (let i = 0; i < charToArr.length; i++){
        if(charToArr[i] === charToArr[i+1]){
            charToArr.splice(i,1)
        }
    }
    let result = charToArr.join('');
    return console.log(result)
}

OnceAtTime('Hello milady,  bien ou quoi ??');