// Escucha el evento de envío del formulario
    document.getElementById('guardar').addEventListener('click', function(event) {
        // Previene el comportamiento predeterminado del formulario (evita la recarga de la página)
        event.preventDefault();
        //Redirigir a la página del formulario actualizar productos de la api
        window.location.href = `../prod_individual/prod_individual.html`;

    });