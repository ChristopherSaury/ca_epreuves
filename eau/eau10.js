// Entre min et max
const MinMax = (n1,n2) =>{
    switch(true){
        case isNaN(n1) === true || isNaN(n2) :
        console.log('Erreur : Veuillez saisir des chiffres');
        break;
        case n1 === undefined || n2 === undefined :
        console.log('Erreur : Veuillez remplir tous les champs');
        break;
        case n1 < n2 :
            do {
                n1++
                console.log(n1)
            } while (n1 < n2 - 1);
        break;
        case n1 > n2 :
            do {
                n2++
                console.log(n2)
            } while (n2 < n1 - 1);
        break;
    }
}

MinMax(20,25);
MinMax(25,20);
MinMax('hello');