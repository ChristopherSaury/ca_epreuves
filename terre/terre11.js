// Nombre premier
function isPrime (n){
    if(typeof n !== 'number'){
        return console.log('Erreur de saisie');
    }
    for (let i = 2; i < n; i++){
        if(n % i === 0){
            return console.log(`non ${n} n'est pas un nombre premier`);
        }
    }
    return console.log(`oui ${n} est un nombre premier.`);
}

isPrime(5)
isPrime(6)
