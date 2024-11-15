import { Persona } from "./persona.js";

class Futbolista extends Persona{

    Dorsal:number;
    Demarcacion:string;

    constructor(id:number, nom:string, ap:string, ed:number, dor:number, demar:string){
        super(id, nom, ap, ed);
        this.Dorsal = dor;
        this.Demarcacion = demar;
    }

    getDorsal():number{
        return this.Dorsal;
    }

    setDorsal(x:number){
        this.Dorsal = x;
    }

    getDemarcacion():string|any{
        return this.Demarcacion;
    }

    setDemarcacion(x:string|any){
        this.Demarcacion = x;
    }

    Concentrarse(){
       console.log(this.getNombre + " " + this.getApellido + " de " + this.getEdad + " años y con la id " + this.getid + " esta concentrandose");
    }

    viajar(){
    console.log(this.getNombre + " " + this.getApellido + " de " + this.getEdad + " años y con la id " + this.getid + " esta viajando");
    }

    jugarPartido(){
        console.log(this.getNombre + " " + this.getApellido + " de dorsal " + this.getDorsal() + " y de demarcacion " + this.getDemarcacion()
         + " esta jugando un partido");
    }

    entrenar(){
        console.log(this.getNombre + " " + this.getApellido + " de dorsal " + this.getDorsal() + " y de demarcacion " + this.getDemarcacion()
        + " esta entrenando");
    }
}

let fut = new Futbolista(1, "paco", "fer", 4, 4, "Hola")

console.log(fut.getNombre)
fut.entrenar()

