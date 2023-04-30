// 24 to 12
function convertHour(time){
    let hour = time.slice(0,2);
    let meridiem;
    let convert;

    if (hour == 0 || hour == 12){
        hour == 0 ? meridiem = 'AM' : meridiem = 'PM'; 
        time = time.replace(time[0], '1');
        time = time.replace(time[1], '2');
        return console.log(time + meridiem);
    }else if (hour <= 11){
        meridiem = 'AM';
        return console.log(time + meridiem)
    }else if (hour > 11){
        meridiem = 'PM';
        convert = hour - 12;
        let hourToStr = convert.toString();
        if(!hourToStr[1]){
            time = time.replace(time[0], '0');
            time = time.replace(time[1], hourToStr);
        }else if (hourToStr[1]){
            time = time.replace(time[0], hourToStr[0]);
            time = time.replace(time[1], hourToStr[1]);
        }
        return console.log(time + meridiem);
    }
}

convertHour('23:40');