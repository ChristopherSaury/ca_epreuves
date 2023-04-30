// Racine carrée d'un nombre
function squareRoot(n){
    
    if(typeof n !== 'number'){
        return console.log('erreur : veuillez entrer des nombres');
    }else if(n < 0){
        return console.log('erreur : la racine carré de nombres négatifs n\'existe pas');
    }
    let y = n;
    let z = (y + (n/y))/2;
     
    while(Math.abs(y-z)>=0.00001){
        y = z;
        z = (y + (n/y))/2;
    }
    return console.log(z);
}

squareRoot(9);