
    // Escucha el evento de envío del formulario
    document.getElementById('updateForm').addEventListener('submit', function(event) {
        // Previene el comportamiento predeterminado del formulario (evita la recarga de la página)
        event.preventDefault();
        const productId = new URLSearchParams(window.location.search).get('id'); // Obtener el ID del producto de la URL
        // Captura los valores ingresados en el formulario y crea un objeto con la información actualizada
        const updatedProduct = {
            title: document.getElementById('productName').value,
            price: parseFloat(document.getElementById('productPrice').value),
            description: document.getElementById('productDescription').value,
            rating: document.getElementById('productRating').value,
            votos: document.getElementById('productVotes').value
        };

        // Realiza una solicitud PUT a la API con los datos actualizados del producto
        fetch(`https://fakestoreapi.com/products/${productId}`, {
            method: "PUT",
            body: JSON.stringify(updatedProduct), // Convierte el objeto a formato JSON
            headers: {
                "Content-type": "application/json; charset=UTF-8",
            },
        })
        .then(response => response.json()) // Parsea la respuesta a formato JSON
        .then(updatedData => {
            console.log("Producto actualizado:", updatedData);
            productoActualizado = true; // Marca el producto como actualizado
        })
        .catch(error => {
            console.error('Error al actualizar el producto:', error);
            // Manejo de errores si la solicitud falla
        });
    });



