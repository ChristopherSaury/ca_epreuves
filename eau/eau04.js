// Suite de Fibonacci
function fibonacci(n){
    let fiboA = 0;
    let fiboB = 1;
    let fiboC;

    if(isNaN(n) || n < 0){
        return console.log(-1);
    }else if (n === 0){
        return console.log(`F(${n}) : ${fiboA}`);
    }else if (n === 1){
        return console.log(`F(${n}) : ${fiboB}`);
    }else{
        for (let i = 2; i < n + 1; i++){
            let fiboC = fiboA + fiboB;
            fiboA = fiboB;
            fiboB = fiboC;
            if(i === n){
                return console.log(` F(${i}) : ${fiboC}`);
            }
        }
    }

}

fibonacci(6);