const users = require('fs').readFileSync('./data/users.txt', 'utf8')

const kpi = ['age', 'eme', 'fll', 'loc', 'psw', 'usr']
const result = []

users.replaceAll('\r', '').split('\n\n').forEach(elemento => {
    const filtrado = elemento.replaceAll('\n', ' ').split(' ').map(ele => {
    return ele.slice(0, ele.indexOf(':'))
    })
    if (kpi.every(elemento => filtrado.includes(elemento))) {
        result.push(elemento.replaceAll('\n', ' ').split(' '))
    }
})

const user = result[result.length - 1].filter(a => a.includes('usr'))

console.log(`${result.length}${user[0].substring(user[0].indexOf('@'), user[0].length)}`)