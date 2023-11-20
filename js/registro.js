
//evento que ocurre cuando el documento se carga al completo
document.addEventListener('DOMContentLoaded', () =>{

/*REGISTRO*/

const registro = document.getElementById('registerForm');

// Selecciona el elemento del DOM con el ID 'registerForm' y añade un evento 'submit' que se activará cuando se envíe el formulario.

    registro.addEventListener('submit', (e) => {
        e.preventDefault();
        const newUsername = document.getElementById('newUsername').value;
        const newEmail = document.getElementById('newEmail').value;
        const newPassword = document.getElementById('newPassword').value;

        // Almacenar nuevos datos de usuario en localStorage
        localStorage.setItem('registeredUsername', newUsername);
        localStorage.setItem('registeredEmail', newEmail);
        localStorage.setItem('registeredPassword', newPassword);
        alert('Usuario registrado correctamente');
    });

});






