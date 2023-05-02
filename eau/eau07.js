// Majuscule
const UpperCaseToStr = (input) => {
    if (typeof input !== 'string' || !input){
        return console.log('Erreur de saisie');
    }
    let chars = input.split('');  
    for (let i = 0; i < chars.length; i++){    
        switch(true){
            case i === 0 || chars[i - 1] === ' ':
            chars[i] = chars[i].toUpperCase();
            break;
        }
    }
    let result = chars.join("");
    return console.log(result);
}

UpperCaseToStr('bonjour mathilde, comment vas-tu ?!')
UpperCaseToStr(42);