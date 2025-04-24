
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

    
    reduzirVida(percentual) {
        const reducao = this.#vida * (percentual / 100);
        this.#vida -= reducao;
        console.log(`Vida reduzida em ${reducao}. Vida atual: ${this.#vida}`);
    }

    atacar(oponente) {
        console.log("Personagem ataca!");
    }
}


class Guerreiro extends Personagem {
    constructor(vida, forca) {
        super(vida, forca, 0); 
    }

    atacar(oponente) {
        console.log("Guerreiro ataca com força:", this.forca);
        oponente.reduzirVida(10); 
    }

    defender() {
        console.log("Guerreiro se defende!");
    }
}


class Mago extends Personagem {
    constructor(vida, mana) {
        super(vida, 5, mana); 
    }

    atacar(oponente) {
        console.log("Mago lança um feitiço com força mágica!");
        oponente.reduzirVida(10); 
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


class Arqueiro extends Personagem {
    constructor(vida, forca, mana) {
        super(vida, forca, mana);
    }

    atacar(oponente) {
        console.log("Arqueiro atira uma flecha com força:", this.forca);
        oponente.reduzirVida(10); 
    }

    defender() {
        console.log("Arqueiro se defende!");
    }
}


var guerreiro = new Guerreiro(150, 30);
var mago = new Mago(100, 80);
var arqueiro = new Arqueiro(120, 25, 40);


var personagens = [guerreiro, mago, arqueiro];


function atacarTodos(oponente) {
    console.log("Iniciando ataques:");
    for (let personagem of personagens) {
        personagem.atacar(oponente);
    }
}


atacarTodos(mago);
console.log("Vida do Mago após ataques:", mago.vida);

atacarTodos(arqueiro);
console.log("Vida do Arqueiro após ataques:", arqueiro.vida);

atacarTodos(guerreiro);
console.log("Vida do Guerreiro após ataques:", guerreiro.vida);
