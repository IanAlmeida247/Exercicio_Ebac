class Animal {
    constructor() {
        if (this.constructor === Animal) {
            throw new Error("Não é possível instanciar a classe abstrata 'Animal'");
        }
    }

    emitirSom() {
        throw new Error("Método 'emitirSom' deve ser implementado");
    }

    mover() {
        throw new Error("Método 'mover' deve ser implementado");
    }
}

class Cachorro extends Animal {
    emitirSom() {
        return "Au au!";
    }

    mover() {
        return "O cachorro corre.";
    }
}

class Gato extends Animal {
    emitirSom() {
        return "Miau!";
    }

    mover() {
        return "O gato anda silenciosamente.";
    }
}

const cachorro = new Cachorro();
const gato = new Gato();

class Passaro extends Animal {
    emitirSom() {
        return "Piu piu!";
    }

    mover() {
        return "O pássaro voa.";
    }
}

const passaro = new Passaro();


console.log(cachorro.emitirSom());  
console.log(cachorro.mover());  
console.log(gato.emitirSom());  
console.log(gato.mover()); 
console.log(passaro.emitirSom()); 
console.log(passaro.mover());  
