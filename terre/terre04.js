// Pair ou impair
function evenOdd(n){
    if (n % 2 === 0 && isNaN(n) === false){
        return console.log('paire');
    }else if (n % 2 !== 0 && isNaN(n) === false){
        return console.log('impaire');
    }else{
        return console.log('Tu ne me la mettras pas à l’envers.');
    }
}

evenOdd(2);
evenOdd(5);
evenOdd('Bonjour');
evenOdd();
