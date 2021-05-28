//Queremos que la función isEmpty devuelva true si el string está vacío, y false si no lo está

function isEmpty(str) { 
    return (str.toString().length == 0 ? 'true':'false')
}

console.log(isEmpty(""))

module.exports = isEmpty;
