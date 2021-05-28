//Vamos a recibir un array, y debemos invertirlo

let fruits = ['manzana', 'pera', 'ciruela', 'uva', 'melon', 'sandia'];

function reverseArray(arr) {
    let empty = []
    for (i = 0; i < arr.length; i++) {
        empty.unshift(arr[i]);
    }
    return empty;
}

console.log(reverseArray(fruits));