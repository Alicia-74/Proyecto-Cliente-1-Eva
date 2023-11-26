// Este evento se dispara cuando todo el contenido del DOM ha sido cargado
document.addEventListener('DOMContentLoaded', () => {

    /* botón "Editar"*/

    // Obtener referencia al botón "Editar" y al formulario de actualización
    const botonActualizar = document.getElementById("botonActualizar");
    const updateForm = document.getElementById("updateForm");

    // Manejar clic en el botón "Editar"
    botonActualizar.addEventListener("click", function () {
        // Alternar la clase 'hidden' para mostrar u ocultar el formulario
        updateForm.classList.toggle("hidden");
    });



    /* botón "Guardar"*/

//Función Actualizar Producto
    function actualizarProducto() {
        // Obtener el ID del producto que se desea actualizar desde la URL
        const url = window.location.href;
        const urlParams = new URLSearchParams(new URL(url).search);
        const productIdToUpdate = urlParams.get('id');
    
        // Obtener la lista de productos almacenados en el localStorage o un objeto vacío si no hay ninguno
        let storedProducts = JSON.parse(localStorage.getItem('Selecc_prod')) || {};
        console.log('Productos almacenados:', storedProducts);


        // Verificar si storedProducts es un objeto y convertirlo a un array
        if (typeof storedProducts === 'object' && !Array.isArray(storedProducts)) {
            storedProducts = [storedProducts];
        }
        // Verificar si storedProducts es un array, si es un objeto lo convertimos a un array
        if (!Array.isArray(storedProducts)) {
            storedProducts = Object.values(storedProducts);
        }
    
        // Buscar el índice del producto
        const productIndex = storedProducts.findIndex(product => product.id == productIdToUpdate);
    
        if (productIndex !== -1) {
            // Obtener los datos del formulario
            const productName = document.getElementById("productName").value;
            const productPrice = document.getElementById("productPrice").value;
            const productDescription = document.getElementById("productDescription").value;
            const productRating = document.getElementById("productRating").value;
            const productVotes = document.getElementById("productVotes").value;
    
            // Actualizar los detalles del producto
            storedProducts[productIndex].title = productName;
            storedProducts[productIndex].price = productPrice;
            storedProducts[productIndex].description = productDescription;
            storedProducts[productIndex].rating.rate = productRating;
            storedProducts[productIndex].rating.count = productVotes;
    
            // Guardar los productos actualizados en localStorage
            localStorage.setItem('Selecc_prod', JSON.stringify(storedProducts));
            alert('Producto encontrado en el localStorage. Para actualizar debes dar a "Aceptar"');
            alert('Producto actualizado correctamente en el localStorage.');
        } else {
            alert('Producto no encontrado en el localStorage para actualizar.');
        }
    }
    
    // Obtener referencia al botón "Guardar"
    const botonGuardar = document.getElementById("guardar");

    // Manejar clic en el botón "Guardar"
    botonGuardar.addEventListener("click", function (event) {
        // Prevenir la acción por defecto del formulario (enviar datos)
        event.preventDefault();
        console.log('El botón de guardar ha sido clickeado');
        
            // llamar a la función actualizar producto
            actualizarProducto();
           
     });  
    
        
});



