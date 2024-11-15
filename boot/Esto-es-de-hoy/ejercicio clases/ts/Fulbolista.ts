class Futbolista{
    id:number;
    Nombre:string;
    Apellidos:string;
    Edad:number;
    Dorsal:number;
    Demarcacion:string;

    constructor(id:number, nom:string, ap:string, ed:number, dor:number, demar:string){
        this.id = id;
        this.Nombre = nom;
        this.Apellidos = ap
        this.Edad = ed;
        this.Dorsal = dor;
        this.Demarcacion = demar;
    }

    getid():number{
        return this.id;
    }
    
    setid(x:number){
        this.id = x;
    }

    getNombre():string|any{
        return this.Nombre;
    }

    setNombre(x:string|any){
        this.Nombre = x;
    }

    getApellido():string|any{
        return this.Apellidos;
    }

    setApelliddo(x:string|any){
        this.Apellidos = x;
    }

    getEdad():number{
        return this.Edad;
    }

    setEdad(x:number){
        this.Edad = x;
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
        console.log(this.getNombre() + " " + this.getApellido() + " de " + this.getEdad() + " años y con la id " + this.getid() + " con id de federacion " + this.getIdFederacion() + " esta dirigiendo un partido");
    }

    dirigirEntrenamiento(){
        console.log(this.getNombre() + " " + this.getApellido() + " de " + this.getEdad() + " años y con la id " + this.getid() + " con id de federacion " + this.getIdFederacion() + " esta dirigiendo un entrenamiento");
    }
}

class Masajista extends Futbolista{

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
        console.log(this.getNombre() + " " + this.getApellido() + " de " + this.getEdad() + " años y con la id " + this.getid() + " con id de titulacion " + this.getTitulacion() + " y con " + this.getAniosExperiencia() + " años de experiencia esta dando un masaje");
    }
}