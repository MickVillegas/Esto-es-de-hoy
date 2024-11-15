export class Persona {
    constructor(id, nom, ap, ed) {
        this.id = id;
        this.Nombre = nom;
        this.Apellidos = ap;
        this.Edad = ed;
    }
    get getid() {
        return this.id;
    }
    set setid(x) {
        this.id = x;
    }
    get getNombre() {
        return this.Nombre;
    }
    set setNombre(x) {
        this.Nombre = x;
    }
    get getApellido() {
        return this.Apellidos;
    }
    set setApelliddo(x) {
        this.Apellidos = x;
    }
    get getEdad() {
        return this.Edad;
    }
    set setEdad(x) {
        this.Edad = x;
    }
}
let per = new Persona(12, "Mick", "Vikernes", 23);
console.log(per.getNombre);
per.setNombre = "Miguel";
console.log(per.getNombre);
