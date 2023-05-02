// Afficheur d'arguments
function displayArguments(){
    let result = '';
    for (let i = 0; i < arguments.length; i++){
        result+= arguments[i] + '\n';
    }
    return console.log(result);
}

displayArguments('je', 'suis', 'solide', '!');