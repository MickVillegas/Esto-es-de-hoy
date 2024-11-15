import { Persona } from "./persona.js";
class Masajista extends Persona {
    constructor(id, nom, ap, ed, titu, anex) {
        super(id, nom, ap, ed);
        this.Titulacion = titu;
        this.AniosExperiencia = anex;
    }
    getTitulacion() {
        return this.Titulacion;
    }
    setTitulacion(x) {
        this.Titulacion = x;
    }
    getAniosExperiencia() {
        return this.AniosExperiencia;
    }
    setAniosExperiencia(x) {
        this.AniosExperiencia = x;
    }
    darMasaje() {
        console.log(this.getNombre + " " + this.getApellido + " de " + this.getEdad + " años y con la id " + this.getid + " con id de titulacion " + this.getTitulacion() + " y con " + this.getAniosExperiencia() + " años de experiencia esta dando un masaje");
    }
}
