class Movimentacao {
    constructor(banco = ' padrao ', nome = '', saldo = 0){
        this.banco = banco,
        this.nome = nome,
        this.saldo = saldo
    }
}

class Registro {
    constructor(dia, mes, ano){
        this.dia = dia,
        this.mes = mes,
        this.ano = ano,
        this.movimentacoes = []
    }

    novaMovimentacao(... movimentacoes){
        movimentacoes.forEach(
            lancamento => this.movimentacoes.push(lancamento)
        )
    }

    resumo(){
        let valorAtualizado = 0
        let tipo = ''
        const regex = new RegExp('x', 'gi')
        this.movimentacoes.forEach(lancamento => {
            lancamento.banco = lancamento.banco.replace(regex, 'Y')
            if(!lancamento.banco.match(regex)){  
                valorAtualizado += lancamento.saldo
                tipo += lancamento.nome + ' | '
            }
        })
        return tipo + valorAtualizado
    }
}

const m01 = new Movimentacao('Bank X', 'salario', 2000)
const m02 = new Movimentacao('Bank X', 'comissao', 200)
const m03 = new Movimentacao('Bank Y', 'imposto', -300)
const m05 = new Movimentacao('Bank Y', 'imposto', -50)
const m04 = new Movimentacao('Bank Z', 'contas', -1000)

const resgistro01 = new Registro(12,08,2022)
resgistro01.novaMovimentacao(m01, m02, m03, m04, m05)
console.log('O saldo dos registros foi de: ' + resgistro01.resumo())

const movimentacoesGerais = [m01, m02, m03, m04, m05]

movimentacoesGerais.map( elemento =>
    console.log(elemento.banco.length)
)