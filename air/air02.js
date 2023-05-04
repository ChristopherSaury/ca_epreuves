// Concat
const ConcatStr = (list,char) =>{
    if(!Array.isArray(list) || !list){
        return console.log('Erreur : le premier argument doit être un tableau');
    }else if (typeof char !== 'string' || !char){
        return console.log('Erreur : le second argument doit être une chaîne de caractère');
    }

    let concat1 = '';
    for (let i = 0; i < list.length; i++){
        if(typeof list[i] !== 'string'){
            return console.log('Erreur : le tableau ne doit contenir que des chaîne de caractères');
        }
        concat1+= list[i];
        concat1+= char;
    }
    return console.log(concat1)
}

ConcatStr(['je','test','des','trucs'], ' ')