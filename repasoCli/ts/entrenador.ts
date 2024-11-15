import { Persona } from "./persona.js";

class Entrenador extends Persona{

    idFederacion:number;

    constructor(id:number, nom:string, ap:string, ed:number, idFe:number){
        super(id, nom, ap, ed);
        this.idFederacion = idFe
    }

    getIdFederacion():number{
        return this.idFederacion;
    }

    setIdFederacion(x:number){
        this.idFederacion = x;
    }

    dirigirPartido(){
        console.log(this.getNombre + " " + this.getApellido + " de " + this.getEdad + " años y con la id " + this.getid + " con id de federacion " + this.getIdFederacion() + " esta dirigiendo un partido");
    }

    dirigirEntrenamiento(){
        console.log(this.getNombre + " " + this.getApellido + " de " + this.getEdad + " años y con la id " + this.getid + " con id de federacion " + this.getIdFederacion() + " esta dirigiendo un entrenamiento");
    }
}