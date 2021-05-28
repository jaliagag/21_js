//Encontrar la letra en el abecedario(sin ñ) según el número, si no se encuentra devolver el string 'invalid'


function positionInAlphabet(num) { 
    let abcedario = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']
    // let isString = typeof num
    let result = 0;
    // if (isString != 'number' ) {
    //     return result = "inalid";
    // }
    for (i=0;i<abcedario.length;i++) {
        if (num-1 == i) {
            result = abcedario[i];
        }
    }
    if (result == 0 ) {
        result = "invalid";
    }

    return result;
}

console.log(positionInAlphabet('test'));
