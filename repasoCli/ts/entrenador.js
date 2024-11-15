import { Persona } from "./persona.js";
class Entrenador extends Persona {
    constructor(id, nom, ap, ed, idFe) {
        super(id, nom, ap, ed);
        this.idFederacion = idFe;
    }
    getIdFederacion() {
        return this.idFederacion;
    }
    setIdFederacion(x) {
        this.idFederacion = x;
    }
    dirigirPartido() {
        console.log(this.getNombre + " " + this.getApellido + " de " + this.getEdad + " años y con la id " + this.getid + " con id de federacion " + this.getIdFederacion() + " esta dirigiendo un partido");
    }
    dirigirEntrenamiento() {
        console.log(this.getNombre + " " + this.getApellido + " de " + this.getEdad + " años y con la id " + this.getid + " con id de federacion " + this.getIdFederacion() + " esta dirigiendo un entrenamiento");
    }
}
