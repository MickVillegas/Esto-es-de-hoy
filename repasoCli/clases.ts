class Persona{
    id:number;
    nombre:string;

    constructor(id:number, nombre:string){
        this.id = id;
        this.nombre = nombre;
    }

    get getId():number{
        return this.id
    }

    set setId(x:number){
        this.id = x
    }

    get getNombre():string{
        return this.nombre
    }

    set setNombre(x:string|any){
        this.nombre = x
    }
}

let per = new Persona(23, "Mick");

console.log(per.getNombre)
per.setNombre("Miguel")
console.log(per.getNombre)