// destructuración de objectos

const nerd = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    getNombre() {
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}

// const nombre = nerd.nombre;
// const apellido = nerd.apellido;
// const poder = nerd.poder;
//console.log(nerd.getNombre());

// estas 3 líneas de código o estas línea

// const { nombre, apellido, poder, edad = 50 } = nerd
// console.log(nombre, apellido, poder, edad);

// function imprime(heroe){

//     const { nombre, apellido, poder, edad = 50 } = heroe
//     console.log(nombre, apellido, poder, edad);

// }
// eliminamos una línea
function imprime({ nombre, apellido, poder, edad = 50 }) {

    nombre = 'jose'
    console.log(nombre, apellido, poder, edad);

}

// imprime(nerd)

const heroes = ['spiderman', 'batman', 'superman']

// const h1 = heroes[0]
// const h2 = heroes[1]
// const h3 = heroes[2]

const [, , h3] = heroes
console.log(h3)