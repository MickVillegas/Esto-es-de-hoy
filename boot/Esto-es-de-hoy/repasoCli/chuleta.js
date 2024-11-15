//Metodos Math
console.log(Math.random)            //devielve un numero al azar
let numero = 0.5
console.log(Math.round(numero))     //redondea
console.log(Math.ceil(numero))      //redondea hacia arriba
console.log(Math.floor(numero))     //redondea hacia abajo
console.log(Math.PI)                //da el valor de pi
console.log(Math.pow(numero))       //da el valor de la potencia
console.log(Math.sqrt(numero))      //da la raiz cuadrada
console.log(Math.abs(numero))       //devuelve el valor absoluto

//Metodos string
let nig = "Nigga Nigga Nigga"
let enArray = nig.split(" ")        //convierte el string en array segun el caracter por parametros
console.log(enArray)
console.log(nig.charAt(4))          //devuelve el caracter de una posicion
console.log(nig.trim())             //devuelve el caracter sin espacios
console.log(nig.toUpperCase())      //comvierte el string en mayusculas
console.log(nig.toLowerCase())      //convierte el string en minuscula
console.log(nig.slice(0,7))         //devuelve los caracteres entre posiciones indicadas
console.log(nig.startsWith("N"))    //devuelve true o false si empieza o no por un caracter(lo comprueba)
console.log(nig.endsWith("s"))      //devuelve true o false si termina o no por un caracter(lo comprueba)
console.log(nig.indexOf("i"))       //devuelve la posicion del caracter, sino lo encuentra da -1
console.log(nig.lastIndexOf("a"))   //busca donde es la ultima vez dende se encuentra el caracter

//metodos para expresiones regulares
let ex = /2/
console.log(ex.test("2"))               //devuelve true o false si se cumple el patron
let texto = "este es un texto largo sobre algo escrito en texto de texto"
let arr2 = texto.match(/ext/)           //devuelve un array con la primera ocurrencia del patron
console.log(arr2)
arr2 = texto.match(/ext/g)              //con g devuelve todas las coincidencias en un array
console.log(arr2)
console.log(texto.search(/te/))         //devuelve el lugar de la primera coincidencia
console.log(texto.replace(/to/g, "x"))  //busca la coincidencia (con g todas) y las sustituye por un caracter
                                        //para separar cadenas seria con split(/expresion/)

//metodos date
let fecha = new Date()                              //vacio te dala fecha actual
console.log(fecha)
console.log(fecha.getDay())                         //devuelve el dia de la semana (0 domingo 6 sabado)
console.log(fecha.getDate())                        //te devuelve el dia del mes
console.log(fecha.getFullYear())                    //devuelve el año
console.log(fecha.getMonth())                       //getSeconds... getMinutes... getMIliseconds...
const date1 = new Date('July 10, 2018 07:22:13')
const date2 = new Date('July 22, 2018 07:22:13')
const diff = date2.getTime() - date1.getTime()      //devuelve los milisegundos que han pasado
let ahora = Date.now()                              //devuelve la fecha de ahora
//calcular el numaro de años desde 1970/01/01:
const minute = 1000 * 60;
const hour = minute * 60;
const day = hour * 24;
const year = day * 365;
let years = Math.round(Date.now() / year); 

//ejemplo funcion arrow
let Hola = () =>{return "Hola mundo"} 
console.log(Hola())

//map reduce filter
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
let num = arr.map((item) => {return item})                              //recorre el array
let sumaTotal = arr.reduce((acum, item)=>{return acum + item}, 0)       //acumula indice por indice
let mayorCinco = arr.filter((item)=>{return item > 5})                  //filtra con una condicion

console.log(num)
console.log(sumaTotal)
console.log(mayorCinco)
