// Contrôle de pass sanitaire
const removeContainChars = (arr,char) =>{
    let removeIndex = [];
    for (let i = 0; i < arr.length; i++) {
        let count = arr[i].length;
        for (let j = 0; j < count; j++) {
            if(arr[i][j] === char.toLowerCase() || arr[i][j] === char.toUpperCase()){
                removeIndex.push(i)
            }
        }
    }
    for (let i = removeIndex.length - 1; i >= 0; i--){
        arr.splice(removeIndex[i],1);
    }
    return console.log(arr);
}

removeContainChars(['Michel','Albert','Thérèse', 'Benoit'], 't');
removeContainChars(['Michel','Albert','Thérèse', 'Benoit'], 'a');