// L'alphabet
function alphabet(){
    let letter = 'abcdefghijklmnopqrstuvwhyz';
    let result = '';

    for (let i = 0; i < letter.length; i++){
        result+= letter[i] + '\n';
    }
    return console.log(result);
}

alphabet();