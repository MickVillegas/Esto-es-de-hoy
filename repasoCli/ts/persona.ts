export class Persona{
    id:number;
    Nombre:string;
    Apellidos:string;
    Edad:number;

    constructor(id:number, nom:string, ap:string, ed:number){
        this.id = id;
        this.Nombre = nom;
        this.Apellidos = ap
        this.Edad = ed;
    }

    get getid():number{
        return this.id;
    }
    
    set setid(x:number){
        this.id = x;
    }

    get getNombre():string{
        return this.Nombre;
    }
     
    set setNombre(x:string){
        this.Nombre = x;
    }

    get getApellido():string{
        return this.Apellidos;
    }

    set setApelliddo(x:string){
        this.Apellidos = x;
    }

    get getEdad():number{
        return this.Edad;
    }

    set setEdad(x:number){
        this.Edad = x;
    }
}

let per = new Persona(12, "Mick", "Vikernes", 23);

console.log(per.getNombre)
per.setNombre = "Miguel"
console.log(per.getNombre)

