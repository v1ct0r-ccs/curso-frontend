class Animal {

    constructor(especie){
        this.especie = especie
    }

    falar(){
        console.log(this.especie + ' au au au ')
    }

    comer(){
        console.log(this.especie + ' come ração ')
    }

    dormir(){
        console.log(this.especie + ' dorme quase o dia todo ')
    }
}

class Cachorro extends Animal{
    falar(){
        console.log(this.especie + ' au au au ')
    }
}

const cachorro = new Animal('cachorro')
cachorro.falar()
cachorro.comer()
cachorro.dormir()

