// Trié ou pas 
function sortList(){
    let sorted = 0;
    let notSorted = 0;

    for (let i = 0; i < arguments.length; i++){
        if(isNaN(arguments[i])){
            return console.log('Erreur');
        }else if(arguments[i] > arguments[i+1]){
            notSorted++;
        }else{
            sorted++;
        }
    }
    
    if(notSorted > 0){
        return console.log('pas triés !');
    }else if (notSorted === 0){
        return console.log('triés');
    }else{
        return console.log('Erreur interne');
    }
}

sortList(9,8,3);
sortList(3,8,9,12);
sortList('salut');