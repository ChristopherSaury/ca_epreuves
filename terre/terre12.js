// 12 to 24
function convertHour(time){
    let hour = time.slice(0,2);
    let min = time.slice(2,5)
    let meridiem = time.slice(5,7).toUpperCase();

    if(hour > 12 || hour == 0){
        return console.log('Erreur de Format!!!')
    }else if(hour == 12){
        return meridiem == 'AM'? console.log('00' + min) : console.log('12' + min);
    }else if (meridiem === 'AM'){
        return console.log(time.slice(0,5))
    }else if (meridiem === 'PM'){
        hour = parseInt(hour);
        hour+= 12;
        return console.log(hour.toString() + min);
    }
}

convertHour('11:40PM')