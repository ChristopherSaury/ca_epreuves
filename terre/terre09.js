// Racine carrée d'un nombre
function squareRoot(n){

    if(typeof n !== 'number' || !n){
        return console.log('erreur : veuillez entrer des nombres');
    }else if(n < 0){
        return console.log('erreur : la racine carré de nombres négatifs n\'existe pas');
    }

    let sqrt = n / 2;
    let tmp = 0;

    while(sqrt !== tmp){
        tmp = sqrt;
        sqrt = (n / tmp + tmp) / 2;
    }
    return console.log(sqrt);
}

squareRoot(10);