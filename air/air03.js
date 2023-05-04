// Chercher l’intrus
const Intruder = (list) =>{
    //gestion d'erreur
    if(!list || !Array.isArray(list)){
        return console.log('Erreur : veuillez saisir un tableau')
    }
    do {
        for(let i = 0; i < list.length; i++){
            let value1 = list[i];
            for (let j = i+1; j < list.length; j++){
                if(list[j] === value1){
                    list.splice(i, 1);
                    list.splice(j-1, 1);
                }
            }
        }
    } while (list.length !== 1);
    return console.log(list[0])
}
   
Intruder([1,2,3,4,5,4,3,2,1])
Intruder(['bonjour','monsieur','bonjour']);