// Este evento se dispara cuando todo el contenido del DOM ha sido cargado
document.addEventListener('DOMContentLoaded', () => {
    // ID del producto a actualizar (reemplaza con la lógica adecuada para obtener el ID)
    const productId = obtenerProductIdDesdeURL(); // Implementa tu lógica para obtener el ID

    // Escucha el evento de envío del formulario
    document.getElementById('guardar').addEventListener('click', function(event) {

        // Obtener los valores del formulario
        const updatedProduct = {
            title: document.getElementById('productName').value,
            price: parseFloat(document.getElementById('productPrice').value),
            description: document.getElementById('productDescription').value,
            rating: document.getElementById('productRating').value,
            votos: document.getElementById('productVotes').value
        };

        // Actualizar en el localStorage
        actualizarEnLocalStorage(productId, updatedProduct);

        // Actualizar en la API con un método PUT
        actualizarEnAPI(productId, updatedProduct);
    });
});

// Función para actualizar en el localStorage
function actualizarEnLocalStorage(productId, updatedProduct) {
    let productosEnLocalStorage = JSON.parse(localStorage.getItem('productos'));

    productosEnLocalStorage = productosEnLocalStorage.map(producto => {
        if (producto.id === productId) {
            return {
                ...producto,
                ...updatedProduct
            };
        }
        return producto;
    });

    localStorage.setItem('productos', JSON.stringify(productosEnLocalStorage));
    console.log('Producto actualizado en el localStorage:', updatedProduct);
}

// Función para actualizar en la API con un método PUT
function actualizarEnAPI(productId, updatedProduct) {
    fetch(`https://fakestoreapi.com/products/${productId}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(updatedProduct)
    })
    .then(response => response.json())
    .then(data => {
        console.log('Producto actualizado en la API:', data);
        // Realiza cualquier acción adicional necesaria
    })
    .catch(error => {
        console.error('Error al actualizar en la API:', error);
        // Manejo de errores
    });
}

// Función para obtener el ID del producto desde la URL (debes implementar esta lógica)
function obtenerProductIdDesdeURL() {
    const url = window.location.search;
    const urlParams = new URLSearchParams(url);
    return urlParams.get('id');
}
