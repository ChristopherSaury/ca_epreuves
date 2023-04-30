// Divisions
function divide(n1,n2){
    if(n2 === 0){
        return console.log('erreur.');
    }else if(n1 < n2){
        return console.log('erreur.');
    }else if(n1 > n2){
        let result = n1 / n2;
        let modulus = (n1 % n2);
        return console.log('Résultat : ' + result + '\n' + 'Reste : ' + modulus )
    }
}

divide(5,2);
divide(10,0);
divide(3,5);