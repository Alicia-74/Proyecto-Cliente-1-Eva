// Obtener los parámetros de la URL
const params = new URLSearchParams(window.location.search); // Obtiene los parámetros de la URL
const productId = params.get('id'); // Obtiene el ID del producto de los parámetros de la URL

// Elemento contenedor para los detalles del producto
const productDetailsContainer = document.getElementById('product-details'); // Encuentra el contenedor HTML donde se mostrarán los detalles del producto

// Realizar una solicitud GET para obtener los detalles del producto por su ID
fetch(`https://fakestoreapi.com/products/${productId}`) // Realiza una solicitud GET a la URL del producto
    .then(response => response.json()) // Parsea la respuesta a formato JSON
    .then(product => {
        // Crear elementos HTML para mostrar los detalles del producto

// Continuación del código anterior...

fetch(`https://fakestoreapi.com/products/${productId}`)
    .then(response => response.json())
    .then(product => {
        // Crear elementos HTML para mostrar los detalles del producto

        // Crear y configurar la imagen del producto
        const productImageElement = document.createElement('img');
        productImageElement.src = product.image;
        productImageElement.alt = product.title;
        productImageElement.style.width = '200px'; // Ajusta el ancho según tu diseño
        productImageElement.style.border = '1px solid #ccc'; // Puedes ajustar el grosor y el color del borde

        // Crear y configurar el contenedor de la información del producto
        const productInfoContainer = document.createElement('div');
        productInfoContainer.style.marginLeft = '20px'; // Ajusta el margen según tu diseño

        // Crear y configurar los demás elementos de información del producto
        const productNameElement = document.createElement('h2');
        productNameElement.textContent = product.title;

        const productPriceElement = document.createElement('p');
        productPriceElement.textContent = `Price: $${product.price}`;

        const productDescriptionElement = document.createElement('p');
        productDescriptionElement.textContent = `Description: ${product.description}`;

        const productRatingElement = document.createElement('p');
        const ratingStars = '★'.repeat(Math.floor(product.rating.rate));
        productRatingElement.textContent = `${product.rating.rate} ${ratingStars}`;

        const productVotesElement = document.createElement('p');
        const heartSymbol = '🖤';
        productVotesElement.textContent = `${product.rating.count} ${heartSymbol} (votos)`;

        const addToCartButton = document.createElement('button');
        addToCartButton.textContent = 'Añadir al carrito';
        addToCartButton.addEventListener('click', () => {
            // Lógica para añadir al carrito
        });

        // Agregar elementos al contenedor de información del producto
        productInfoContainer.appendChild(productNameElement);
        productInfoContainer.appendChild(productRatingElement);
        productInfoContainer.appendChild(productVotesElement);
        productInfoContainer.appendChild(productDescriptionElement);
        productInfoContainer.appendChild(productPriceElement);
        productInfoContainer.appendChild(addToCartButton);

        // Agregar elementos al contenedor principal
        productDetailsContainer.appendChild(productImageElement);
        productDetailsContainer.appendChild(productInfoContainer);
    })
    .catch(error => {
        console.error('Error fetching product details:', error);
    });


    
    // Escucha el evento de envío del formulario
    document.getElementById('botonActualizar').addEventListener('click', function(event) {
        // Previene el comportamiento predeterminado del formulario (evita la recarga de la página)
        event.preventDefault();
        //Redirigir a la página del formulario actualizar productos de la api
        window.location.href = `../actualizar/actualizar.html`;

    });
});


