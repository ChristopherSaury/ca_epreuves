// tri a bulle
const my_bubble_sort = (arr) =>{
    // gestion des erreurs
    if(Array.isArray(arr) === false || !arr){
        return console.log('Erreur : veuillez saisir un tableau de nombre')
    }
    for (let i = 0; i < arr.length; i++){
        if(isNaN(arr[i])){
            // gestion des erreurs
            return console.log('Erreur : veuillez saisir des nombres uniquement');
        }
        for (let j = 0; j < arr.length - 1; j++){
            if(arr[j] > arr[j + 1]){
                let value = arr[j]
                arr[j] = arr[j + 1];
                arr[j + 1] = value;
            }
        }
    }
    return console.log(arr);
}

my_bubble_sort([5,4,3,2,1]);
my_bubble_sort(['test', 'test','test']);