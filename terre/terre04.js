// L'alphabet à partir de
function displayLetter(letter){
    let letters = 'abcdefghijklmnopqrstuvwxyz';
    let cutAlphabet = letters.substring(letters.lastIndexOf(letter.toLowerCase()));
    let result = '';
    for (let i = 0; i < cutAlphabet.length; i++){
        result+= cutAlphabet[i] + '\n';
    }
    return console.log(result)
}

displayLetter('n');