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


        // Agregar elementos al contenedor de información del producto
        productInfoContainer.appendChild(productNameElement);
        productInfoContainer.appendChild(productRatingElement);
        productInfoContainer.appendChild(productVotesElement);
        productInfoContainer.appendChild(productDescriptionElement);
        productInfoContainer.appendChild(productPriceElement);

        // Agregar elementos al contenedor principal
        productDetailsContainer.appendChild(productImageElement);
        productDetailsContainer.appendChild(productInfoContainer);


        // Obtener el ID del producto que se desea actualizar desde la URL
        const url = window.location.href;
        const urlParams = new URLSearchParams(new URL(url).search);
        const pId = urlParams.get('id');


         // Guardar los detalles del producto en el localStorage
         let storedProducts = JSON.parse(localStorage.getItem('Selecc_prod')) || [];

         // Verificar si el producto ya existe en el almacenamiento local
         const existingProductIndex = storedProducts.findIndex(p => pId == productId);

         if (existingProductIndex !== -1) {
             // Actualizar el producto existente si se encuentra en el localStorage
             storedProducts[existingProductIndex] = product;
         } else {
             // Agregar el nuevo producto al almacenamiento local
             storedProducts.push(product);
         }
 
         localStorage.setItem('Selecc_prod', JSON.stringify(storedProducts));
    
    })     

    .catch(error => {
        console.error('Error fetching product details:', error);
    });

    


      
    




