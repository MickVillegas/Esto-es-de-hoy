var Persona = /** @class */ (function () {
    function Persona(id, nombre) {
        this.id = id;
        this.nombre = nombre;
    }
    Object.defineProperty(Persona.prototype, "getId", {
        get: function () {
            return this.id;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "setId", {
        set: function (x) {
            this.id = x;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "getNombre", {
        get: function () {
            return this.nombre;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Persona.prototype, "setNombre", {
        set: function (x) {
            this.nombre = x;
        },
        enumerable: false,
        configurable: true
    });
    return Persona;
}());
var per = new Persona(23, "Mick");
console.log(per.getNombre);
per.setNombre("Miguel");
console.log(per.getNombre);
