// Insertion dans un tableau trié
const InsertInSorted = (list,number) =>{
    if(!Array.isArray(list)){
        return console.log('Erreur : veuillez saisir un tableau en premier argument');
    }
    if(isNaN(number)){
        return console.log('Erreur : veuillez saisir un chiffre en second argument');
    }

    list.push(number);
    let value;
    for (let i = 0; i < list.length; i++) {
        for (let j = i+1; j < list.length; j++) {
            if(list[i] > list[j]){
                value = list[i];
                list[i] = list[j];
                list[j] = value;
            }
        }
        
    }
    return console.log(list);
}

InsertInSorted([1,3,4],2);
InsertInSorted([10,20,30,40,50,60,70,90],33)