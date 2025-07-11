import propiedadesAlquiler from "./data/alquiler.js"
import pintarHtml from "./utils/pintarhtml.js"

const sectionAlquiler = document.querySelector("#alquiler > .row")

pintarHtml(sectionAlquiler, propiedadesAlquiler)
