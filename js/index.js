//Constants for convertion, using metric as the baseline
const kg = 1;
const lbs = 0.4535924;

const cm = 1;
const inch = 2.54;
const meter = 100;
const yard = 91.44;

const km = 1;
const mile = 1.609344;

//Function for unit convertion

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