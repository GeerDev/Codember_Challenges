let datos = "11610497110107115 102111114 11210897121105110103 9911110010110998101114 11210810197115101 11510497114101"
let espacios = []
let filtrado = []

let numeros = [97, 98, 99]
let letras = [123, 124, 125]
let signos = ["{", "|", "}"]
let letrasFinales = ["a", "b", "c"]

numeros.forEach((value, index) => {
    datos = datos.replaceAll(value, letras[index])
})

for (i = 0; i < datos.length; i++) {
  if (datos[i] === " ") {
    espacios = [...espacios, i]
  }
}

datos = datos.replaceAll(" ", "")

for (i = 0; i < datos.length; i++) {
  if ( i % 3 === 0) {
  let value = String.fromCharCode(datos.substring(i, i + 3))
  filtrado.push(value)
  }
}

let datosFiltrado = filtrado.join("")

signos.forEach((value, index) => {
    datosFiltrado = datosFiltrado.replaceAll(value, letrasFinales[index])
})

let result = datosFiltrado.split("")

const espaciosFiltrado = espacios.map(a => a/3)

for(i=0; i < espaciosFiltrado.length; i++){
    if(espaciosFiltrado[i] - Math.trunc(espaciosFiltrado[i]) > 0.5) {
      for (d = 1; d < ((espaciosFiltrado.length) - i); d++) {
        espaciosFiltrado[i + d] -= 1
      }
    }
}

espaciosFiltrado.forEach((element, index) => {
  let division = Math.trunc(element + index)
  result.splice(division, 0, ' ');
})

const theend = result.join("")
console.log(theend)
