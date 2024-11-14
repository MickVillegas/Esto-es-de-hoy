
class Futbolista{
    id;
    Nombre;
    Apellidos
    Edad
    Dorsal
    Demarcacion

    constructor(id, nom, ap, ed, dor, demar){
        this.id = id;
        this.Nombre = nom;
        this.Apellidos = ap
        this.Edad = ed;
        this.Dorsal = dor;
        this.Demarcacion = demar;
    }

    getid(){
        return this.id;
    }
    
    setid(x){
        this.id = x;
    }

    getNombre(){
        return this.Nombre;
    }

    setNombre(x){
        this.Nombre = x;
    }

    getApellido(){
        return this.Apellidos;
    }

    setApelliddo(x){
        this.Apellidos = x;
    }

    getEdad(){
        return this.Edad;
    }

    setEdad(x){
        this.Edad = x;
    }

    getDorsal(){
        return this.Dorsal;
    }

    setDorsal(x){
        this.Dorsal = x;
    }

    getDemarcacion(){
        return this.Demarcacion;
    }

    setDemarcacion(x){
        this.Demarcacion = x;
    }

    Concentrarse(){
        console.log(this.getNombre() + " " + this.getApellido() + " de " + this.getEdad() + " años y con la id " + this.getid() + " esta concentrandose");
    }

    viajar(){
        console.log(this.getNombre() + " " + this.getApellido() + " de " + this.getEdad() + " años y con la id " + this.getid() + " esta viajando");
    }

    jugarPartido(){
        console.log(this.getNombre() + " " + this.getApellido() + " de dorsal " + this.getDorsal() + " y de demarcacion " + this.getDemarcacion()
         + " esta jugando un partido");

    }

    entrenar(){
        console.log(this.getNombre() + " " + this.getApellido() + " de dorsal " + this.getDorsal() + " y de demarcacion " + this.getDemarcacion()
        + " esta entrenando");
    }
}

class Entrenador extends Futbolista{
    idFederacion;

    constructor(id, nom, ap, ed, idFe){
        super(id, nom, ap, ed);
        this.idFederacion = idFe
    }

    getIdFederacion(){
        return this.idFederacion;
    }

    setIdFederacion(x){
        this.idFederacion = x;
    }

    dirigirPartido(){
        console.log(this.getNombre() + " " + this.getApellido() + " de " + this.getEdad() + " años y con la id " + this.getid() + " con id de federacion " + this.getIdFederacion() + " esta dirigiendo un partido");
    }

    dirigirEntrenamiento(){
        console.log(this.getNombre() + " " + this.getApellido() + " de " + this.getEdad() + " años y con la id " + this.getid() + " con id de federacion " + this.getIdFederacion() + " esta dirigiendo un entrenamiento");
    }
}

class Masajista extends Futbolista{
    Titulacion
    AniosExperiencia

    constructor(id, nom, ap, ed, titu, anex){
        super(id, nom, ap, ed);
        this.Titulacion = titu;
        this.AniosExperiencia = anex;
    }

    getTitulacion(){
        return this.Titulacion;
    }

    setTitulacion(x){
        this.Titulacion = x;
    }

    getAniosExperiencia(){
        return this.AniosExperiencia;
    }

    setAniosExperiencia(x){
        this.AniosExperiencia = x;
    }

    darMasaje(){
        console.log(this.getNombre() + " " + this.getApellido() + " de " + this.getEdad() + " años y con la id " + this.getid() + " con id de titulacion " + this.getTitulacion() + " y con " + this.getAniosExperiencia() + " años de experiencia esta dando un masaje");
    }
}

let jugador1  = new Futbolista(22, "Mick", "Vikernes", 23, 12, "Portero"); 
let Entre1 = new Entrenador(12, "Dross", "Angel", 40, 90)
let mas = new Masajista(1, "Raul", "Flores", 20, "informatica", 0)
jugador1.jugarPartido();
Entre1.dirigirPartido();
mas.darMasaje();
