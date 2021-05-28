//Vamos a recibir un array, tenemos que eliminar todos los múltiplos de 13 y devolver el array

let num = [13, 5, 26, 16, 157, 176, 39, 5, 26, 5, 52]

function removeThirteen(arr) {
    let empty = [] 
    for (i of arr){
        if (i % 13 != 0) {
            empty.push(i)
        }
    }
    return empty
}

function removeThirteen2(arr) {
    let empty = []
    for (i = 0; i < arr.length;i++) {
        if (arr[i] % 13 != 0){
            empty.push(arr[i])
        }
    }
    return empty
}


console.log(removeThirteen(num));
//console.log(removeThirteen1(num));
// console.log(removeThirteen2(num));

// module.exports = removeThirteen; 