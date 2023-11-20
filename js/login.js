
//evento que ocurre cuando el documento se carga al completo
document.addEventListener('DOMContentLoaded', () =>{

/*INICIO DE SESIÓN*/

const login = document.getElementById('loginForm');

// Selecciona el elemento del DOM con el ID 'loginForm' y añade un evento 'submit' que se activará cuando se envíe el formulario.
            login.addEventListener('submit', (e) => {
                e.preventDefault();
                const username = document.getElementById('username').value;
                const password = document.getElementById('password').value;

                // Verificación de inicio de sesión
                const storedUsername = localStorage.getItem('registeredUsername');
                const storedPassword = localStorage.getItem('registeredPassword');

                if (username === storedUsername && password === storedPassword) {
                    // Almacenar nombre de usuario en sessionStorage tras iniciar sesión
                    sessionStorage.setItem('username', username);
                    // Redirigir a la página de productos de la api
                    window.location.href = 'https://fakestoreapi.com/products';
                } else {
                    alert('Credenciales incorrectas');
                }
            });

});






