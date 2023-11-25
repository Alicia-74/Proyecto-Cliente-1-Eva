// Este evento se dispara cuando todo el contenido del DOM ha sido cargado
document.addEventListener('DOMContentLoaded', () => {
    // Obtener la información del usuario del localStorage
    const storedUsername = localStorage.getItem('registeredUsername'); // Obtén el nombre de usuario del localStorage
    const storedEmail = localStorage.getItem('registeredEmail'); // Obtén el email del localStorage
    const storedName = localStorage.getItem('registeredName'); // Obtén el nombre del localStorage
    const storedLastName = localStorage.getItem('registeredLastName'); // Obtén el apellido del localStorage
    const storedCity = localStorage.getItem('registeredCity'); // Obtén la ciudad del localStorage
    const storedStreet = localStorage.getItem('registeredStreet'); // Obtén la calle del localStorage
    const storedNumber = localStorage.getItem('registeredNumber'); // Obtén el número del localStorage
    const storedZipcode = localStorage.getItem('registeredZipcode'); // Obtén el código postal del localStorage
    const storedPhone = localStorage.getItem('registeredPhone'); // Obtén el teléfono del localStorage

    // Mostrar la información del usuario en la página de perfil si existe en el localStorage
    if (storedUsername && storedEmail && storedName && storedLastName && storedCity &&
        storedStreet && storedNumber && storedZipcode && storedPhone) {
        const informacionPersonal = document.querySelector('.informacion-personal'); // Selecciona el contenedor donde se mostrará la información

        informacionPersonal.innerHTML = `
            <h2>Información Personal</h2>
            <p><strong>Nombre de usuario:</strong> ${storedUsername}</p>
            <p><strong>Email:</strong> ${storedEmail}</p>
            <p><strong>Nombre:</strong> ${storedName}</p>
            <p><strong>Apellido:</strong> ${storedLastName}</p>
            <p><strong>Ciudad:</strong> ${storedCity}</p>
            <p><strong>Calle:</strong> ${storedStreet}</p>
            <p><strong>Número:</strong> ${storedNumber}</p>
            <p><strong>Código Postal:</strong> ${storedZipcode}</p>
            <p><strong>Teléfono:</strong> ${storedPhone}</p>
        `;
    } else {
        console.error('Información del usuario no encontrada en el localStorage'); // Muestra un mensaje en la consola si falta información
    }

    // Obtener el historial de carrito del localStorage
    let historialCarrito = localStorage.getItem('productosCarrito'); // Obtiene el historial de compras del localStorage
     // Convierte el historial a un array o crea uno vacío si no hay datos
     historialCarrito = historialCarrito ? JSON.parse(historialCarrito) : [];
     

    // Verificar si hay un historial de carrito en el localStorage
    if (Array.isArray(historialCarrito) && historialCarrito.length > 0) {
        const historialCarritosElement = document.querySelector('.historial-carritos'); // Selecciona el contenedor del historial

        const historialHTML = document.createElement('div'); // Crea un elemento HTML para mostrar el historial
        historialHTML.classList.add('historial-carrito-container'); // Añade clases al elemento

        historialCarrito.forEach(carrito => { // Itera sobre cada carrito en el historial
            const carritoHTML = document.createElement('div'); // Crea un elemento para representar cada carrito
            carritoHTML.classList.add('carrito-historial'); // Añade clases al elemento

            carritoHTML.innerHTML = `
                <h3>Carrito ${carrito.id}</h3>
                <ul>
                    ${carrito.productos ? carrito.productos.map(producto => `<li>${producto.nombre} - ${producto.precio}</li>`).join('') : ''}
                </ul>
                <button class="ver-detalle-carrito" data-id="${carrito.id}">Ver Detalle</button>
            `;

            historialHTML.appendChild(carritoHTML); // Agrega el carrito al historial
        });

        historialCarritosElement.appendChild(historialHTML); // Agrega el historial al contenedor en el DOM

        // Agregar evento clic para mostrar detalles del carrito seleccionado
        console.log( historialCarritosElement);
        historialCarritosElement.addEventListener('click', event => {
            if (event.target.classList.contains('ver-detalle-carrito')) { // Verifica si se hizo clic en el botón "Ver Detalle"
                event.preventDefault(); // Previene el comportamiento predeterminado del evento

                const idCarrito = event.target.dataset.id; // Obtiene el ID del carrito desde el botón
                const carritoSeleccionado = historialCarrito.find(carrito => carrito.id == idCarrito); // Encuentra el carrito seleccionado
                
                if (carritoSeleccionado) {
                    const detalleCarritoInfo = document.querySelector('.detalle-carrito-info'); // Selecciona el contenedor para mostrar detalles
                    detalleCarritoInfo.innerHTML = ''; // Limpia el contenido previo

                    const carritoHTML = document.createElement('div'); // Crea un elemento para representar el carrito seleccionado
                    carritoHTML.classList.add('carrito-detalle'); // Añade clases al elemento
                    console.log( carritoSeleccionado);
                    
                    carritoSeleccionado.productos.forEach(producto => { // Itera sobre los productos del carrito
                        const productoHTML = document.createElement('div'); // Crea un elemento para representar cada producto
                        productoHTML.classList.add('producto-carrito'); // Añade clases al elemento

                        productoHTML.innerHTML = `
                            <img src="${producto.imagen}" alt="${producto.nombre}">
                            <p>${producto.nombre} - ${producto.precio}</p>
                        `;

                        carritoHTML.appendChild(productoHTML); // Agrega el producto al carrito
                    });

                    detalleCarritoInfo.appendChild(carritoHTML); // Agrega el carrito con sus productos al contenedor de detalles
                }
            }
        });
    } else {
        console.log('No hay historial de carrito en el localStorage'); // Muestra un mensaje si no hay historial de compras
    }
});
