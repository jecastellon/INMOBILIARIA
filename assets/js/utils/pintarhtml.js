const pintarHtml = (sectionHtml, propiedades = [], cantItems = propiedades.length) => {
    let html = ``

for (let i = 0; i < cantItems; i++) {

    const propiedad = propiedades[i]

    const fumarTexto = propiedad.smoking
        ? `<p class="text-success"><i class="fas fa-smoking"></i> Sí se permite fumar</p>`
        : `<p class="text-danger"><i class="fas fa-smoking-ban"></i> No se permite fumar</p>`

    const mascotasTexto = propiedad.pets
        ? `<p class="text-success"><i class="fas fa-paw"></i> Mascotas permitidas</p>`
        : `<p class="text-danger"><i class="fas fa-ban"></i> No se permiten mascotas</p>`

        html += `
    <div class="col-md-4 mb-4">
        <div class="card">
            <img src="${propiedad.src}" class="card-img-top" alt="Imagen de la propiedad"/>
            <div class="card-body">
            <h5 class="card-title">${propiedad.title}</h5>
            <p class="card-text">${propiedad.description}</p>
            <p>
                <i class="fas fa-map-marker-alt"></i> ${propiedad.address}
            </p>
            <p>
                <i class="fas fa-bed"></i> ${propiedad.bedrooms} Habitaciones | <i class="fas fa-bath"></i> ${propiedades[i].bathrooms} Baños
            </p>
            <p>
            <i class="fas fa-dollar-sign"></i> ${propiedad.price}
            </p>
            ${fumarTexto}
            ${mascotasTexto}
            </div>
        </div>
    </div>
        `
    }

    sectionHtml.innerHTML = html
}

export default pintarHtml