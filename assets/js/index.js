import propiedadesAlquiler from "./data/alquiler.js"
import propiedadesVenta from "./data/venta.js"
import pintarHtml from "./utils/pintarhtml.js"

const sectionVenta = document.querySelector("#venta > .row")
const sectionAlquiler = document.querySelector("#alquiler > .row")

pintarHtml(sectionVenta, propiedadesVenta, 3)
pintarHtml(sectionAlquiler, propiedadesAlquiler, 3)
