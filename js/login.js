//evento que ocurre cuando el documento se carga al completo
document.addEventListener('DOMContentLoaded', () => {

    /*INICIO DE SESIÓN*/
    const login = document.getElementById('loginForm');

    // Agrega un evento 'submit' al formulario de inicio de sesión
    login.addEventListener('submit', (e) => {
        e.preventDefault(); // Evita el comportamiento predeterminado de enviar el formulario

        // Obtiene los valores de nombre de usuario y contraseña ingresados por el usuario
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Verificación de inicio de sesión
        const storedUsername = localStorage.getItem('registeredUsername'); // Obtiene el nombre de usuario registrado
        const storedPassword = localStorage.getItem('registeredPassword'); // Obtiene la contraseña registrada
        
        // Compara los valores ingresados con los almacenados para ver si coinciden
        if (username === storedUsername && password === storedPassword) {
            // Almacenar nombre de usuario en sessionStorage tras iniciar sesión
            sessionStorage.setItem('username', username); // Guarda el nombre de usuario en sessionStorage

            // Redirige a la página de productos de la API si las credenciales son correctas
            window.location.href = '../productos/productos.html';
        } else {
            alert('Credenciales incorrectas'); // Muestra una alerta si las credenciales son incorrectas
        }
    });
});
