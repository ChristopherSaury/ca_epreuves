// Différence minimum absolue
const absoluteMin = (arr) =>{
    let values = [];
    let descArr;
    let result;

    if(Array.isArray(arr) === false || !arr){
        return console.log('Erreur : veuillez saisir un tableau de chiffre');
    }else{
        descArr = arr.sort(function(a,b){return b-a});
    }
    for (let i = 0; i < arr.length; i++){
        if(isNaN(arr[i])){
            return console.log('Erreur : veuillez saisir un tableau de chiffre uniquement');
        }
        for (let j = 0; j < descArr.length - 1; j++){
            values.push(descArr[j] - descArr[j + 1]);
        }
    }
    result = values[0];
    for (let k = 0; k < values.length; k++){
        if( values[k] < result ){
        result = values[k];
        }
        
    }
    return console.log(result)
    
}

absoluteMin([5,1,19,21])
absoluteMin([20,5,1,19,21])
absoluteMin([-8,-6,4])
