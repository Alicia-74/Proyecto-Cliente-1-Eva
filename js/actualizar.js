// // Este evento se dispara cuando todo el contenido del DOM ha sido cargado
// document.addEventListener('DOMContentLoaded', () => {
    
//     // Escucha el evento de envío del formulario
//     document.getElementById('updateForm').addEventListener('submit', function(event) {
//         // Previene el comportamiento predeterminado del formulario (evita la recarga de la página)
//         event.preventDefault();
//         // Obtener el parámetro 'id' de la URL actual
//         const params = new URLSearchParams();
//         const productId = params.get('id');

//         // Verificar si se obtuvo el ID y mostrarlo en la consola
//         if (productId !== null) {
//             console.log('El ID del producto es:', productId);
//         } else {
//             console.log('No se encontró ningún ID en la URL.');
//         }

//         // Captura los valores ingresados en el formulario y crea un objeto con la información actualizada
//         const updatedProduct = {
//             title: document.getElementById('productName').value,
//             price: parseFloat(document.getElementById('productPrice').value),
//             description: document.getElementById('productDescription').value,
//             rating: document.getElementById('productRating').value,
//             votos: document.getElementById('productVotes').value
//         };
//         console.log(updatedProduct);
//         // Realiza una solicitud PUT a la API con los datos actualizados del producto
//         fetch(`https://fakestoreapi.com/products/${productId}`, {
//             method: "PUT",
//             body: JSON.stringify(updatedProduct), // Convierte el objeto a formato JSON
//             headers: {
//                 "Content-type": "application/json; charset=UTF-8",
//             },
//         })
//         .then(response => response.json()) // Parsea la respuesta a formato JSON
//         .then(updatedData => {
//             console.log("Producto actualizado:", updatedData);
//             productoActualizado = true; // Marca el producto como actualizado
//         })
//         .catch(error => {
//             console.error('Error al actualizar el producto:', error);
//             // Manejo de errores si la solicitud falla
//         });
//     });
// });    



