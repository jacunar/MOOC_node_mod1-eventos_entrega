const EventEmitter = require('events');

// Importar modulo Later.js:
const later = require('later');

// Clase Programador
class Programador extends EventEmitter {
    constructor(configuracion) {
        super();

        this.configuracion = configuracion;        
    }

    iniciar() {
        console.log('Programador iniciado');
        // Usar zona horaria local
        later.date.localTime();
        // for (let step = 0; step < this.configuracion.length; step++) {
        //     later.setInterval(this.emit('ideal', this.configuracion[step].temperatura), later.parse.text(this.configuracion[step].hora));
        //     console.log(`Intervalo establecido ${this.configuracion[step].hora}`);
        // }
        later.setInterval(this.emit('ideal', 20), later.parse.text("04:23"));
    }

    ideal(temperatura) {                
        console.log(`Temperatura ideal ${temperatura}ºC`);
    }
}

exports = module.exports = Programador;
