// Par ordre Ascii
const AsciiOrder = (arr) =>{
    if(Array.isArray(arr) === false || !arr){
        return console.log('Erreur : veuillez saisir un tableau de caractère');
    }
    let value;
    for (let i = 0; i < arr.length; i++){
        if(typeof arr[i] !== 'string'){
            return console.log('Erreur : veuillez saisir un tableau de caractère')
        }
        for (let j = 0; j < arr.length-1; j++){
            if(arr[j] > arr[j+1]){
               value = arr[j];
               arr[j] = arr[j+1]
               arr[j+1] = value 
            }
        }
    }
    return console.log(arr);
}

AsciiOrder(['Alfred','Momo','Gilbert']);
AsciiOrder(['A','Z','E','R','T','Y']);