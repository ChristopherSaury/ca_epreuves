// Sur chacun d’entre eux
const AddSubstract = (numberList, number) =>{
    //return console.log(number[0])
    if(!numberList || !number){
        return console.log('Erreur : veuillez saisir un tableau de nombres et chiffre en second argument');
    }
    if(!Array.isArray(numberList)){
        return console.log('Erreur : veuillez saisir un tableau de chiffre en première entrée')
    }
    if(typeof number !== 'string'){
        return console.log('Erreur : saisir un chiffre en second argument');
    }

    for (let i = 0; i < numberList.length; i++){
        if(typeof numberList[i] != 'number'){
            return console.log('Erreur : le tableau ne doit contenir que des nombres');
        }
        if(number[0] === '+'){
            numberList[i]+= parseInt(number[1]);
        }
        if(number[0] === '-'){
            numberList[i]-= parseInt(number[1]);
        }
    }
    return console.log(numberList);
}

AddSubstract([1,2,3,4,5], '+2')
AddSubstract([10,11,12,20],'-5')