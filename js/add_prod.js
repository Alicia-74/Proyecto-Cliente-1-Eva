function guardarYEnviar() {
    // Obtener datos del formulario
    const formData = {
        title: document.getElementById('title').value,
        price: parseFloat(document.getElementById('price').value),
        description: document.getElementById('description').value,
        image: document.getElementById('image').value,
        category: document.getElementById('category').value
    };

    // Guardar datos en el localStorage
    guardarEnLocalStorage('nuevoProducto', formData);

    // Enviar datos a la API
    enviarDatosALaAPI(formData);
}





function guardarEnLocalStorage(key, data) {
    // Convertir a JSON y guardar en el localStorage
    localStorage.setItem(key, JSON.stringify(data));
}





function enviarDatosALaAPI(data) {
    // Realizar la solicitud POST a la API
    fetch('https://fakestoreapi.com/products', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(apiData => console.log('Datos enviados a la API:', apiData))
    .catch(error => console.error('Error al enviar datos a la API:', error));
}
