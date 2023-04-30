// Combinaison de 3 chiffre
const combine = () => {
    let column = [0,1,1];

    for (let i = 0; column[0] < 7; i++){
        switch (true){
            case column[2] < 9 :
            column[2] = column[2] + 1;
            console.log(`${column[0]}${column[1]}${column[2]}`);
            break;
            case column[2] === 9 && column[1] < 8 :
            column[1] = column[1] + 1;
            column[2] = column[1] + 1;
            console.log(`${column[0]}${column[1]}${column[2]}`);
            break;
            case column[2] === 9 && column[1] === 8 :
            column[0] = column[0] + 1;
            column[1] = column[0] + 1;
            column[2] = column[1] + 1;
            console.log(`${column[0]}${column[1]}${column[2]}`);
            break;
        }
    }
}

combine();

