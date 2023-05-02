// Inverser une chaîne
function reverseString(characters){
    let result = '';
    for (let i = characters.length - 1; i >= 0; i--){
        result+= characters[i];
    }
    return console.log(result);
}

reverseString('Hello World!');
reverseString('Michel');