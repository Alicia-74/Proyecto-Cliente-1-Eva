

/*INICIO DE SESIÓN*/

// Selecciona el elemento del DOM con el ID 'loginForm' y añade un evento 'submit' que se activará cuando se envíe el formulario.
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();//evita que la página se recargue cuando se envía el formulario
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    
    // Verifica si se proporciona un nombre de usuario y una contraseña (ambos incluidos)
    
     if (!username || !password) {
        alert('Por favor, ingresa un nombre de usuario y una contraseña.');
        return; // Detiene la ejecución si falta información
    }

    //  Si ambos campos están completos, procede a loguear al usuario y accede a la pagina de la API

    fetch('https://fakestoreapi.com/auth/login', {// Realiza una solicitud POST a la API de inicio de sesión
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Indica que los datos se enviarán en formato JSON
        },
        body: JSON.stringify({ username, password }) // Convierte los datos en formato JSON y los envía al servidor
    })
    .then(response => response.json()) // Convierte la respuesta del servidor a formato JSON
    .then(data => {
        if (data.isLoggedIn) { // Verifica si el inicio de sesión fue exitoso según la respuesta de la API
            sessionStorage.setItem('username', username);// Guarda el nombre de usuario en sessionStorage
            sessionStorage.setItem('password', password);// Guarda la contraseña de usuario en sessionStorage
            window.location.href = 'https://fakestoreapi.com/product'; // Redirige a la página de productos
        } else {
            alert('Credenciales incorrectas');
        }
    });
});






/*REGISTRO*/

// Selecciona el elemento del DOM con el ID 'registerForm' y añade un evento 'submit' que se activará cuando se envíe el formulario.
document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault();//evita que la página se recargue cuando se envía el formulario
    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    
    // Verifica si se proporciona un nombre de usuario y una contraseña (ambos incluidos)
    
    if (!newUsername || !newPassword) {
        alert('Por favor, ingresa un nombre de usuario y una contraseña.');
        return; // Detiene la ejecución si falta información
    }

    //  Si ambos campos están completos, procede a registrar al usuario y accede a la pagina de la API

    fetch('https://fakestoreapi.com/auth/register', {// Realiza una solicitud POST a la API de registro
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Indica que los datos se enviarán en formato JSON
        },
        body: JSON.stringify({ newUsername, newPassword }) // Convierte los datos en formato JSON y los envía al servidor
    })
    .then(response => response.json()) // Convierte la respuesta del servidor a formato JSON
    .then(data => {
        if (data.isRegistered) { // Verifica si el registro fue exitoso según la respuesta de la API
            localStorage.setItem('username', newUsername); // Guarda el nombre de usuario en localStorage
            localStorage.setItem('newPassword', newPassword); // Guarda la contraseña de usuario en localStorage
            window.location.href = 'https://fakestoreapi.com/product'; // Redirige a la página de productos
        } else {
            alert('Error al registrar usuario');
        }
    });
});

// Para obtener el nombre de usuario almacenado en localStorage:
const newUsernameLocal = localStorage.getItem('newUsername');
// Para obtener la contraseña de usuario almacenado en localStorage:
const newPasswordLocal = localStorage.getItem('newPassword');




/* */

