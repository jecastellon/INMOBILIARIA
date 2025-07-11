import propiedadesVenta from "./data/venta.js"
import pintarHtml from "./utils/pintarhtml.js"

const sectionVenta = document.querySelector("#venta > .row")

pintarHtml(sectionVenta, propiedadesVenta)
