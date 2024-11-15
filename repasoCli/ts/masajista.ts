import { Persona } from "./persona.js";

class Masajista extends Persona{

    Titulacion:string;
    AniosExperiencia:number;

    constructor(id:number, nom:string, ap:string, ed:number, titu:string, anex:number){
        super(id, nom, ap, ed);
        this.Titulacion = titu;
        this.AniosExperiencia = anex;
    }

    getTitulacion():string|any{
        return this.Titulacion;
    }

    setTitulacion(x:string|any){
        this.Titulacion = x;
    }

    getAniosExperiencia():number{
        return this.AniosExperiencia;
    }

    setAniosExperiencia(x:number){
        this.AniosExperiencia = x;
    }

    darMasaje(){
        console.log(this.getNombre + " " + this.getApellido + " de " + this.getEdad + " años y con la id " + this.getid + " con id de titulacion " + this.getTitulacion() + " y con " + this.getAniosExperiencia() + " años de experiencia esta dando un masaje");
    }
}