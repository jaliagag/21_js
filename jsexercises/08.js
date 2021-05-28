// Queremos que la función morseCode retorne la traducción del texto que nos llega por parámetro en código morse

function morseCode(str) { 

    const morseCode = {
        "A": ".-",
        "B": "-...",
        "C": "-.-.",
        "D": "-..",
        "E": ".",
        "F": "..-.",
        "G": "--.",
        "H": "....",
        "I": "..",
        "J": ".---",
        "K": "-.-",
        "L": ".-..",
        "M": "--",
        "N": "-.",
        "O": "---",
        "P": ".--.",
        "Q": "--.-",
        "R": ".-.",
        "S": "...",
        "T": "-",
        "U": "..-",
        "W": ".--",
        "X": "-..-",
        "Y": "-.--",
        "Z": "--.."
    }
    
    return str.toUpperCase().split("").map(el => {
        return morseCode[el] ? morseCode[el] : el;
    }).join("");


}

console.log(morseCode("CourseIt"))

module.exports = morseCode;
