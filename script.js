// script.js
document.addEventListener('DOMContentLoaded', function() {
    const autoList = document.getElementById('autoList');
    const autoDetails = document.getElementById('autoDetails');

    // Datos de ejemplo de autos
    const autos = [
        { marca: 'Toyota', modelo: 'Corolla', año: 2020 },
        { marca: 'Honda', modelo: 'Civic', año: 2019 },
        { marca: 'Ford', modelo: 'Mustang', año: 2021 },
    ];

    // Generar la lista de autos
    autos.forEach(auto => {
        const li = document.createElement('li');
        li.textContent = `${auto.marca} ${auto.modelo} (${auto.año})`;
        li.addEventListener('click', function() {
            mostrarDetallesAuto(auto);
        });
        autoList.appendChild(li);
    });

    // Función para mostrar los detalles del auto seleccionado
    function mostrarDetallesAuto(auto) {
        autoDetails.style.display = 'block';
        autoDetails.innerHTML = `
            <p>Marca: ${auto.marca}</p>
            <p>Modelo: ${auto.modelo}</p>
            <p>Año: ${auto.año}</p>
        `;
    }
});
