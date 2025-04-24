
class Personagem {
    #vida;
    #forca;
    #mana;

    constructor(vida, forca, mana) {
        this.#vida = vida;
        this.#forca = forca;
        this.#mana = mana;
    }

    
    get vida() {
        return this.#vida;
    }

    get forca() {
        return this.#forca;
    }

    get mana() {
        return this.#mana;
    }

    
    set vida(novaVida) {
        this.#vida = novaVida;
    }

    set forca(novaForca) {
        this.#forca = novaForca;
    }

    set mana(novaMana) {
        this.#mana = novaMana;
    }

    atacar() {
        console.log("Personagem ataca!");
    }
}


class Guerreiro extends Personagem {
    constructor(vida, forca) {
        super(vida, forca, 0); 
    }

    atacar() {
        console.log("Guerreiro ataca com força:", this.forca);
    }

    defender() {
        console.log("Guerreiro se defende!");
    }
}

// Classe Mago
class Mago extends Personagem {
    constructor(vida, mana) {
        super(vida, 5, mana); 
    }

    atacar() {
        console.log("Mago lança um feitiço com força mágica!");
    }

    usarMagia() {
        if (this.mana > 0) {
            console.log("Mago usa magia!");
            this.mana -= 10;
        } else {
            console.log("Mana insuficiente!");
        }
    }

    defender() {
        console.log("Mago se defende!");
    }
}