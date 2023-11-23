// Variable para controlar si se ha actualizado el producto
let productoActualizado = false;

// Botón de borrado
 document.getElementById('deleteButton').addEventListener('click', function() {

    // Verificar si se ha actualizado el producto antes de borrarlo
    if (productoActualizado) {
        // Realizar la solicitud DELETE a la API con el ID del producto
        fetch(`https://fakestoreapi.com/products/${productId}`, {
            method: "DELETE"
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Error al borrar el producto');
        })
        .then(data => {
            console.log('Producto borrado:', data);
            // Lógica para manejar la confirmación del borrado
            // Por ejemplo, redireccionar a otra página o actualizar la información en la interfaz
        })
        .catch(error => {
            console.error('Error al borrar el producto:', error);
            // Manejo de errores si la solicitud falla
        });
    }
});
