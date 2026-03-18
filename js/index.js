//Constants for convertion, using metric as the baseline
const units = {

"kg": 1,
"lbs": 0.4535924,

"cm": 1,
"inch": 2.54,
"meter": 100,
"yard": 91.44,

"km": 1,
"mile": 1.609344

}

//Function for unit convertion
function convert(value, unit1, unit2){
    let rate1 = units[unit1];
    let rate2 = units[unit2];
    return (value * rate1) / rate2;
}

//Function for temperature conversion
function tempConvert(input, output, value){
    let result;
    if(input == "c" && output == "k"){
        result = value - 273;
    } else if(input == "k" && output == "c"){
        result = value + 273;
    } else if(input == "c" && output == "f"){
        result = (value - 32) * (1/1.8);
    } else if(input == "f" && output == "c"){
        result = (value*1.8) + 32;
    } else{
        result = null;
    }

    return result;
}