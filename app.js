class Usuario {
    constructor(name, lastName) {
        this.nombre = name
        this.apellido = lastName
        this.libros = []
        this.mascotas = []
    }
   
    getFullName() {
        return (this.nombre + " " + this.apellido)
    }
    
    addMascota(namePet) {
        this.mascotas.push(namePet);
    }
    
    countMascotas() {
        return this.mascotas.length
    }
   
    addBook(nameBook, author) {
        const dataBook = { name: nameBook, author: author }
        this.libros.push(dataBook)
    }
    
    getBookNames() {
        return this.libros.map(libro => libro.name)
    }
}

const usuario = new Usuario("Jana", "Sayago")

console.log(usuario.getFullName())

usuario.addMascota("Mia")
usuario.addMascota("Hako")

console.log(usuario.countMascotas())

usuario.addBook("Harry Potter y la piedra filosofal", "J. K. Rowling")
usuario.addBook("Harry Potter y la cámara secreta", "J. K. Rowling")

console.log(usuario.getBookNames())