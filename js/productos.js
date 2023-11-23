// Crear un array vacío llamado "carrito" para almacenar los productos seleccionados
let carrito = [];
// Variable para almacenar el total
let totalCarrito = 0;
// Variable global para almacenar los productos
let productos = [];

// Espera a que todo el contenido del DOM esté cargado
document.addEventListener("DOMContentLoaded", function () {
    // Realiza una solicitud GET a la API Fake Store para obtener la lista de productos
    fetch("https://fakestoreapi.com/products")
        // Convierte la respuesta en formato JSON
        .then(respuesta => respuesta.json())
        // Llama a la función mostrarProductos con los datos de los productos
        .then(datos => {
            // Muestra los productos en la página y asigna eventos
            productos = datos; // Almacena los productos globalmente
            mostrarProductos(productos);

            // Asigna un evento de clic al contenedor de productos
            const contenedorProductos = document.getElementById("products");
            contenedorProductos.addEventListener('click', function (event) {
                // Verifica si el clic fue en un botón de "Añadir al carrito"
                if (event.target.classList.contains('btn-agregar-carrito')) {
                    // Obtiene el índice del producto en el array de productos
                    const index = event.target.dataset.index;
                    // Llama a la función agregarAlCarrito con el producto correspondiente
                    agregarAlCarrito(productos[index]);
                }
            });

           // Asigna un evento de clic a cada producto para redirigir al hacer clic en la imagen
            productos.forEach((producto, index) => {
                const productoDiv = document.querySelectorAll(".producto")[index];
                const imagenProducto = productoDiv.querySelector("img");

                imagenProducto.addEventListener('click', function () {
                    mostrarPaginaProducto(producto);
                });
            });

        });
});

// Función para mostrar la página del producto seleccionado
function mostrarPaginaProducto(producto) {
    // Redirigir a la página de productos de la api individual
    window.location.href = `../producto_individual/prod_individual.html?id=${producto.id}`;
}

// Función para mostrar los productos en la página
function mostrarProductos(productos) {
    const contenedorProductos = document.getElementById("products");

    productos.forEach((producto, index) => {
        const productoDiv = document.createElement("div");
        productoDiv.classList.add("producto");

        const imagen = document.createElement("img");
        imagen.src = producto.image;
        imagen.alt = producto.title;

        const detalles = document.createElement("div");
        detalles.innerHTML = `<h3 class="truncated" data-full-text="false" onclick="toggleText(this)">${producto.title} <span class="read-more">Leer más</span></h3><p class="full-text" style="display: none;">${producto.description}</p><p><strong>Precio:</strong> $${producto.price}</p>`;
        const botonAgregarCarrito = document.createElement("button");
        botonAgregarCarrito.textContent = "Añadir al carrito";
        botonAgregarCarrito.classList.add("btn-agregar-carrito");
        botonAgregarCarrito.dataset.index = index;

        productoDiv.appendChild(imagen);
        productoDiv.appendChild(detalles);
        productoDiv.appendChild(botonAgregarCarrito);

        contenedorProductos.appendChild(productoDiv);
    });
}


// Función para alternar entre mostrar texto completo y truncado
function toggleText(element) {
    // Obtiene el elemento que contiene el texto completo
    const fullText = element.nextElementSibling;
    // Busca el elemento 'Leer más' dentro del elemento h3
    const readMore = element.querySelector('.read-more');

    // Verifica si se está mostrando el texto completo o truncado
    if (element.dataset.fullText === 'true') {
        // Si el texto está completo, lo trunca a dos líneas
        element.style.webkitLineClamp = '3';
        // Actualiza el estado para indicar texto truncado
        element.dataset.fullText = 'false';
        // Oculta el texto completo
        fullText.style.display = 'none';
        // Cambia el texto del botón a 'Leer más'
        readMore.textContent = 'Leer más';
    } else {
        // Si el texto está truncado, muestra el texto completo
        element.style.webkitLineClamp = 'initial';
        // Actualiza el estado para indicar texto completo
        element.dataset.fullText = 'true';
        // Muestra el texto completo
        fullText.style.display = 'block';
        // Cambia el texto del botón a 'Leer menos'
        readMore.textContent = 'Leer menos';
    }
}





// Función para agregar un producto al carrito
function agregarAlCarrito(producto) {
    // Verifica si el producto ya está en el carrito
    const productoEnCarrito = carrito.find(item => item.id === producto.id);

    if (productoEnCarrito) {
        // Si el producto ya está en el carrito, incrementa la cantidad
        productoEnCarrito.cantidad++;
    } else {
        // Si el producto no está en el carrito, agrégalo con cantidad 1
        carrito.push({
            id: producto.id,
            titulo: producto.title,
            precio: producto.price,
            cantidad: 1,
            imagen: producto.image, // Agregamos la propiedad imagen
        });
    }

    // Actualiza el total del carrito
    totalCarrito += producto.price;

    // Muestra el contenido actualizado del carrito
    mostrarCarrito();
}

// Función para mostrar el contenido del carrito y el total
function mostrarCarrito() {
    // Seleccionar el cuerpo de la tabla en el elemento con ID "lista-carrito"
    const tbody = document.querySelector('#carrito tbody');
    // Limpiar el contenido actual de la tabla
    tbody.innerHTML = '';

    // Iterar sobre cada producto en el carrito
    carrito.forEach(producto => {
        // Crear una nueva fila en la tabla
        const fila = document.createElement('tr');
        // Asignar HTML a la fila con información del producto
        fila.innerHTML = `
            <td><img src="${producto.imagen}" alt="${producto.titulo}" width="50"></td>
            <td>${producto.titulo}</td>
            <td>$${producto.precio}</td>
            <td>${producto.cantidad}</td>
            <td><button class="borrar-curso" data-id="${producto.id}">X</button></td>
        `;

        // Agregar la fila a la tabla
        tbody.appendChild(fila);
    });

    // Mostrar el total de la compra
    const totalElement = document.querySelector('#total-compra');
    totalElement.textContent = `Total: $${totalCarrito.toFixed(2)}`;
}

// Selección del botón "Comprar"
const botonComprar = document.getElementById('confirmar-compra');

// Event listener para el botón "Comprar"
botonComprar.addEventListener('click', function() {
    // Guardar productos en localStorage
    localStorage.setItem('productosCarrito', JSON.stringify(carrito));
    alert('¡Productos guardados en el carrito!');
});





// Función para actualizar el total del carrito y mostrarlo en el DOM
function actualizarTotal() {
    // Reinicia el total del carrito a cero
    totalCarrito = 0;

    // Calcula el nuevo total sumando el precio de cada producto en el carrito
    carrito.forEach(producto => {
        totalCarrito += producto.precio * producto.cantidad;
    });

    // Actualiza el elemento en el DOM que muestra el total
    const totalElement = document.querySelector('#total-compra');
    totalElement.textContent = `Total: $${totalCarrito.toFixed(2)}`;
}

// Event listener para borrar productos del carrito:
document.querySelector('#carrito').addEventListener('click', function (event) {
    // Verifica si el elemento clickeado tiene la clase 'borrar-curso'.
    if (event.target.classList.contains('borrar-curso')) {
        // Obtiene el valor del atributo 'data-id' del elemento clickeado, que es el ID del producto a borrar.
        const id = event.target.dataset.id;
        console.log('id: ' + id);
        // Utiliza 'findIndex' para encontrar el índice del producto en el array 'carrito' que tiene el mismo ID.
        const indice = carrito.findIndex(producto => producto.id == id);
       
       if(carrito[indice].cantidad > 1){
            carrito[indice].cantidad--;
       }else{
            // Utiliza 'splice' para eliminar el elemento del array 'carrito' en el índice encontrado.
            carrito.splice(indice, 1);
       }
        
        
        // Llama a la función para actualizar el total del carrito
        actualizarTotal();
        // Llama a la función 'mostrarCarrito' para actualizar la visualización del carrito.
        mostrarCarrito();
    }
});



   



// Event listener para vaciar completamente el carrito:
document.querySelector('#vaciar-carrito').addEventListener('click', function (event) {
    // Limpiar completamente el array "carrito"
    carrito = [];
    // Reiniciar el total del carrito a cero
    totalCarrito = 0;
    // Llama a la función 'mostrarCarrito' para actualizar la visualización del carrito.
    mostrarCarrito();
});

// Asignar un evento de clic a cada producto para agregarlo al carrito
document.addEventListener('DOMContentLoaded', function () {
    productos.forEach(producto => {
        producto.addEventListener('click', function () {
            agregarAlCarrito(producto);
        });
    });
});
