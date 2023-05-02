// Combinaison de 2 nombres 
const combine = () =>{
    let column = 0;

    for (let i = 0; i < 98; i++){
        if(column < 9){
            column++;
            console.log('0' + '' + column);
        }
        
        if (column >= 9){
            column++;
            console.log(column);
        }
    }
    
}
combine();