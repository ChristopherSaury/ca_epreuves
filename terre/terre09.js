// Puissance d'un nombre
function calcPow(n1,n2){
    if( isNaN(n1) === true|| isNaN(n2) === true){
        return console.log('erreur');
    }else if(n2 < 0){
        return console.log('erreur');
    }else{
        return console.log(n1**n2);
    }
}

calcPow(2,3);