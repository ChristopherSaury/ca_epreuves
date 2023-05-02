// tri par sélection
const my_select_sort = (arr) =>{
    // gestion des erreurs
    if(Array.isArray(arr) === false || !arr){
        return console.log('Erreur : veuillez saisir un tableau de nombre')
    }
    for (let i = 0; i < arr.length; i++){
        if(isNaN(arr[i])){
            // gestion des erreurs
            return console.log('Erreur : veuillez saisir des nombres uniquement');
        }
        let min = i;
        for (let j = i+1; j < arr.length; j++){
            if(arr[j] < arr[min]){
                min = j
            }
        }
        let value = arr[i];
        arr[i] = arr[min];
        arr[min] = value;
    }
    return console.log(arr)
}

my_select_sort([5,4,3,2,1]);