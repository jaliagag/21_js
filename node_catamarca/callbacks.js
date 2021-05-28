// funcion que se ejecutará más adelante

// setTimeout( ()=>{
//     console.log('hola mundo')
// }, 1000);

// setTimeout ejecuta un callback, una función que se ejecuta en cierto momento
// una función que se manda como argumento a otra función

const getUsuarios = (id, callback) => {
    const usuario = {
        //id: id <-- redundante
        id,
        nombre: 'Joe'
    }

    setTimeout(()=>{
        callback(usuario);
    }, 1500)
}

getUsuarios(10, ( usuario ) => {
    //console.log( usuario )
    console.log( usuario.id );
    console.log(usuario.nombre.toUpperCase());
});