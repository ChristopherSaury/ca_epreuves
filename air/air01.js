// Split en fonction
const SplitStr = (char1, char2) =>{

    let index = [];
    for (let i = 0; i < char1.length; i++){
        let word = '';
        for (let j = 0; j < char2.length; j++){
            word+= char1[i + j];
            if(word.length === char2.length && word === char2){
                index.push(i);
            }
        }
    }
    for (let j = 0; j < index.length + 1; j++){
        if(j === 0){
            //result.push(char1.slice(0,index[j]))
            console.log(char1.slice(0,index[j]))
        }
        else if (j !== 0){
            //result.push(char1.slice(index[j-1] + 1,index[j]))
            console.log(char1.slice(index[j-1] + char2.length,index[j]))
        }
    }
}

SplitStr('Crevette magique dans la mer des étoiles','la')