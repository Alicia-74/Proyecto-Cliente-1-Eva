// Este evento se dispara cuando todo el contenido del DOM ha sido cargado
document.addEventListener('DOMContentLoaded', () => {


    function borrarSeleccion() {
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
            // Eliminar el producto del localStorage
            localStorage.removeItem('Selecc_prod');
            alert('Producto encontrado en el localStorage, si deseas borrarlo dale a "Aceptar"');
        }else {
            alert('Producto no encontrado en el localStorage para eliminar.');
        }
    }

    // Obtener el botón de borrar por su ID
    const botonBorrar = document.getElementById("deleteButton");

    // Agregar un evento de escucha al hacer clic en el botón de borrar
    botonBorrar.addEventListener("click", function () {
      
            //Llamamos a la función
            borrarSeleccion();

    });   
});