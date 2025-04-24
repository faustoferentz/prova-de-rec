
class Personagem {
    constructor(vida, forca, mana) {
        this.vida = vida;
        this.forca = forca;
        this.mana = mana;
    }
}


var personagem1 = new Personagem(100, 20, 50);


console.log("Vida:", personagem1.vida);
console.log("Força:", personagem1.forca);
console.log("Mana:", personagem1.mana);