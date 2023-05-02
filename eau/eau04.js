// Prochain nombre premier
const NextPrime = (n) =>{
    if(!n || typeof n !== 'number'){
        return console.log('Erreur');
    }
    let isNext = "false";

    if(n === 1){
        return console.log(2);
    }else if(n === 2){
        return console.log(3);
    }

    while(isNext === "false"){
        n++
        let prime = 0;
        for (let i = 2; i < n; i++){
            if(n % i === 0){
                n++;
            }else{
                prime++
            }
        }
        if(prime > 1){
            isNext = "OK";
            return console.log(n)
        }
    }
}

NextPrime(14);