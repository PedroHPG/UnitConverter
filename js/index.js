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


//Function to get the units for conversion
function getUnits(){
    let units = [];

    let elements = document.getElementsByClassName("unit-choice")
    for(let element of elements){
        if(window.getComputedStyle(element).display != "none"){
            units.push(element.selectedOptions[0]?.text);
        }
    }

    return units;
}

//Function to get the currently input value
function getValue(){
    let elements = document.getElementsByClassName("input-value")
    for(let element of elements){
        if(window.getComputedStyle(element).display != "none"){
            return document.getElementById(element).value;
        }
    }
    return null;
}

//Function to swap the current units
function swapUnits(){
    let units = getUnits();
    let unit1 = units[1];
    let unit2 = units[0];
    
    let elements = document.getElementsByClassName("unit-choice")
    for(let element of elements){
        if(window.getComputedStyle(element).display != "none"){
            if(element = elements[0]){
                element.value = unit1;
            }else{
                element.value = unit2;
            }
        }
    }
}

//Function for unit convertion
function convert(){
    let value = getValue();
    let currentUnits = getUnits();

    let unit1 = currentUnits[0];
    let unit2 = currentUnits[1];

    let rate1 = units[unit1];
    let rate2 = units[unit2];
    return (value * rate1) / rate2;
}

//Function for temperature conversion
function tempConvert(){
    let result;

    let value = getValue();
    let currentUnits = getUnits();

    let input = currentUnits[0];
    let output = currentUnits[1];

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
