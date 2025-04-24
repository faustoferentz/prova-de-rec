

class Personagem {
    constructor(vida, forca, mana) {
        this.vida = vida;
        this.forca = forca;
        this.mana = mana;
    }
}


class Guerreiro extends Personagem {
    constructor(vida, forca) {
        super(vida, forca, 0); 
    }
}

class Mago extends Personagem {
    constructor(vida, mana) {
        super(vida, 5, mana); 
    }
}

class Arqueiro extends Personagem {
    constructor(vida, forca, mana) {
        super(vida, forca, mana);
    }
}


var guerreiro = new Guerreiro(150, 30);
var mago = new Mago(100, 80);
var arqueiro = new Arqueiro(120, 25, 40);


console.log("Guerreiro - Vida:", guerreiro.vida, "Força:", guerreiro.forca, "Mana:", guerreiro.mana);
console.log("Mago - Vida:", mago.vida, "Força:", mago.forca, "Mana:", mago.mana);
console.log("Arqueiro - Vida:", arqueiro.vida, "Força:", arqueiro.forca, "Mana:", arqueiro.mana);