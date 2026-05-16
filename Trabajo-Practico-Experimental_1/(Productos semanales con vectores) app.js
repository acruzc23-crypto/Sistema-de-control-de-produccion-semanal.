const selectDiasProduccion = document.getElementById('id-select-dias')
const btnCargarProduccion = document.getElementById('id-btn-cargar-produccion')
const btnPresentarProduccion = document.getElementById('id-btn-presentar-produccion')
const btnGenerar = document.getElementById('id-Generar')

const txtPresentarProduccion = document.getElementById('id-listado-produccion')
const txtRespuesta = document.getElementById('id-Respuesta')

const diasTexto = [
    "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"]
let vectorProduccion = []



btnCargarProduccion.addEventListener('click', function () {
    const dimension = Number(selectDiasProduccion.value)
    cargarProduccion(dimension)
})



btnPresentarProduccion.addEventListener('click', function () {
    let texto = ""
    for (let i = 0; i < vectorProduccion.length; i++) {
        texto += "Día " + (i + 1) +
                " (" + diasTexto[i] + "): " +
                vectorProduccion[i] + "\n"
    }
    txtPresentarProduccion.value = texto
})



btnGenerar.addEventListener('click', function () {
    let resultados = ""
    let total = 0
    for (let i = 0; i < vectorProduccion.length; i++) {
        total += vectorProduccion[i]
    }


    resultados += "Producción total: " + total + "\n"
    let mayor = vectorProduccion[0]
    let diaMayor = diasTexto[0]
    for (let i = 1; i < vectorProduccion.length; i++) {
        if (vectorProduccion[i] > mayor) {
            mayor = vectorProduccion[i]
            diaMayor = diasTexto[i]
        }
    }


    resultados += "Mayor producción: " + mayor + " (" + diaMayor + ")\n"
    let menor = vectorProduccion[0]
    let diaMenor = diasTexto[0]
    for (let i = 1; i < vectorProduccion.length; i++) {
        if (vectorProduccion[i] < menor) {
            menor = vectorProduccion[i]
            diaMenor = diasTexto[i]
        }
    }


    resultados += "Menor producción: " + menor + " (" + diaMenor + ")\n"
    let promedio = total / vectorProduccion.length
    resultados += "Promedio semanal: " + promedio.toFixed(2) + "\n"
    let contador = 0
    for (let i = 0; i < vectorProduccion.length; i++) {
        if (vectorProduccion[i] > promedio) {
            contador++
        }
    }


    resultados += "Días sobre el promedio: " + contador + "\n"
    let criticos = 0
    for (let i = 0; i < vectorProduccion.length; i++) {
        if (vectorProduccion[i] < 100) {
            criticos++
        }
    }


    resultados += "Días críticos: " + criticos + "\n"
    let repetido = false
    for (let i = 0; i < vectorProduccion.length; i++) {
        for (let j = i + 1; j < vectorProduccion.length; j++) {
            if (vectorProduccion[i] == vectorProduccion[j]) {
                repetido = true
            }
        }
    }
    if (repetido) {
        resultados += "Existen valores repetidos\n"
    } else {
        resultados += "No existen valores repetidos\n"
    }
    txtRespuesta.value = resultados
})



function cargarProduccion(dimension) {
    vectorProduccion = []
    for (let i = 0; i < dimension; i++) {
        const numAleatorio = Math.floor(Math.random() * 200) + 50
        vectorProduccion[i] = numAleatorio
    }
}
