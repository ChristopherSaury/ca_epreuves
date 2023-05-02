// Trouver la Suisse
function middleNumber(n1,n2,n3){
    
    if(n1 == n2 || n2 == n3 || n1 == n3 || 
        arguments.length < 3 || isNaN(n1) === true
        || isNaN(n2) === true || isNaN(n3) === true){
        return console.log('Erreur');
    }

    switch (true){
        case n1 > n2 && n1 < n3 :
        console.log(n1);
        break;
        case n1 < n2 && n1 > n3 :
        console.log(n1);
        break;
        case n2 > n1 && n2 < n3 :
        console.log(n2);
        break;
        case n2 < n1 && n2 > n3 :
        console.log(n2);
        break;
        case n3 > n1 && n3 < n2 :
        console.log(n3);
        break;
        case n3 < n1 && n3 > n2 :
        console.log(n3);
        break;
        default :
        console.log('Erreur Interne')
        break;

    }
}

middleNumber(11, 40, 34);
middleNumber(2, 1, 3)
middleNumber(2, 2, 2)