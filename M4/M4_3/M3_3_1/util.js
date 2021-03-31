var vocales     = [65, 69, 73, 79, 85]
var consonantes = [66, 67, 68, 70, 71, 72, 74, 75, 76, 77, 78, 80, 81, 82 ,83 ,84, 86, 87, 88, 89, 90]

class Cliente {
    constructor(nombre, rut, sueldo) {
        this.nombre = nombre
        this.rut    = rut
        this.sueldo = sueldo
    }
}

var util = {
    generar_desicion:      () => { return (Math.floor(Math.random() * 10) > 5) },
    generar_entero: (tope=10) => { return Math.floor(Math.random() * tope) },
    obtener_hora_completa: () => { return new Date().toLocaleTimeString() },
    obtener_hora:          () => { return new Date().getHours() },
    obtener_minutos:       () => { return new Date().getMinutes() },
    obtener_segundos:      () => { return new Date().getSeconds() },
    obtener_milisegundos:  () => { return new Date().getMilliseconds() },
    obtener_fecha_completa:() => { return new Date().toLocaleDateString() },
    generar_vocal:         () => { return String.fromCharCode(vocales[Math.floor(Math.random() * vocales.length)]) },
    generar_consonante:    () => { return String.fromCharCode(consonantes[Math.floor(Math.random() * consonantes.length)]) },
    clientes: [
        new Cliente('Pedro',   '14144144-4', 400000),
        new Cliente('Pepito',  '13133133-3', 300000),
        new Cliente('María',   '12122122-2', 200000),
        new Cliente('Ignacho', '15155155',   500000),
        new Cliente('Hector',  '16166166-6', 600000),
        new Cliente('Patricio','17177177-7', 700000),
        new Cliente('Juanita', '18188188-8', 800000),
        new Cliente('Polin',   '19199199-9', 900000)
    ]
}
export default util
