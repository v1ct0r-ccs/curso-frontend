/* function Pessoa () {

        const pessoa = this
            this.idade = 0
        

        setInterval(function(){
        console.log (pessoa.idade++) 
        }, 2000);
        
    }

    const p1 = new Pessoa()
*/

function Pessoa() {

        this.idade = 0
    
    setInterval(() => {
       console.log(this.idade++) 
    }, 2000);

}

const p1 = new Pessoa()

/* Arrow Functions
 * (p1, p2, ...Pessoa, pX) => { expressao }
 * (p1, p2) => expressao
 * p1 => { expressao}
 */