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





    

    // Función para mostrar todos los carritos almacenados en localStorage
    function mostrarTodosLosCarritos() {
        const carritos = Object.keys(localStorage).filter(key => key.startsWith('carrito-'));
        const detallesCarritos = document.getElementById('detalle-carrito-info');
        
        detallesCarritos.innerHTML = '';

        carritos.forEach((key, index) => {
            const carro = JSON.parse(localStorage.getItem(key));
            
            const carroElemento = document.createElement('div');
            carroElemento.classList.add('carro-elemento');
            
            const tituloCarro = document.createElement('h3');
            tituloCarro.textContent = `Carrito ${index + 1}`;
            
            const botonVerDetalles = document.createElement('button');
            botonVerDetalles.textContent = 'Ver Detalles';
            botonVerDetalles.addEventListener('click', function() {
                mostrarDetalleCarrito(carro);
            });

            carroElemento.appendChild(tituloCarro);
            carroElemento.appendChild(botonVerDetalles);
            
            detallesCarritos.appendChild(carroElemento);
        });
    }

    // Función para mostrar los detalles de un carrito (puede ser expandida para mostrarlos en algún otro contenedor)
    function mostrarDetalleCarrito(carro) {
        const detalleCarritoInfo = document.getElementById('detalle-carrito-info');
        detalleCarritoInfo.innerHTML = '';

        carro.forEach(producto => {
            const fila = document.createElement('div');
            fila.classList.add('detalle-carrito-fila');

            fila.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.titulo}" width="50">
                <p>${producto.titulo}</p>
                <p>$${producto.precio}</p>
                <p>${producto.cantidad}</p>
            `;
            

            detalleCarritoInfo.appendChild(fila);

          
        });

        detalleCarritoInfo.classList.remove('hidden');
        
    }

    
    


         // Obtener referencia al botón "Ver Historial" y al contenedor del detalle del carrito
        const botonVerHistorial = document.getElementById("botonVerDetalles");
        const detalles = document.getElementById("detalle-carrito-info");

    // Manejar clic en el botón "Ver Detalles"
    botonVerHistorial.addEventListener("click", function () {
       // Alternar la clase 'hidden' para mostrar u ocultar el formulario
       detalles.classList.toggle("hidden");
       mostrarTodosLosCarritos();
    });
   

});
