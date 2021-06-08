const empleados = [
    {
        id: 1,
        nombre: "Fernando"
    },
    {
        id: 2,
        nombre: "Jose"
    },
    {
        id: 3,
        nombre: "Paula"
    },
]

const salarios = [
    {
        id: 1,
        salario: 1000
    },
    {
        id: 1,
        salario: 1600
    },
]

const getEmpleado = ( id, callback ) => {
    const empleado = empleados.find( e => e.id === id )?.nombre;

    if ( empleado ) {
        callback( null, empleado )
    } else {
        callback( `Empleado con id ${ id } no existe` )
    }

}

const getSalario = ( id, callback ) => {
    const salario = salarios.find( e => e.id === id)?.salario

    if (salario) {
        callback (null, salario)
    } else {
        callback (`No existe salario para el id ${ id } `)
    }
}

const id = 3;

//console.log(getEmpleado( 3 ));
getEmpleado( id, ( err, empleado ) => {
    if ( err ) {
        console.log("ERROR");
        return console.log(err);
    } else {
        console.log("Empleado existe!");
        console.log(empleado);
    }

})

getSalario (id, (err, salario) => {
    if ( err ) {
        console.log("ERROR!");
        return console.log(err)
    } else {
        console.log(salario)
    }
})