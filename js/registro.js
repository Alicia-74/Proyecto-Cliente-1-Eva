
//evento que ocurre cuando el documento se carga al completo
document.addEventListener('DOMContentLoaded', () =>{

/*REGISTRO*/

const registro = document.getElementById('registerForm');

// Selecciona el elemento del DOM con el ID 'registerForm' y añade un evento 'submit' que se activará cuando se envíe el formulario.

    registro.addEventListener('submit', (e) => {
        e.preventDefault();
        // Obtener los valores ingresados en el formulario
        const name = document.getElementById('name').value;
        const lastName = document.getElementById('lastName').value;
        const city = document.getElementById('city').value;
        const street = document.getElementById('street').value;
        const number = document.getElementById('number').value;
        const zipcode = document.getElementById('zipcode').value;
        const newEmail = document.getElementById('newEmail').value;
        const phone = document.getElementById('phone').value;
        const newUsername = document.getElementById('newUsername').value;
        const newPassword = document.getElementById('newPassword').value;

        // Almacenar nuevos datos de usuario en localStorage
        localStorage.setItem('registeredUsername', newUsername);
        localStorage.setItem('registeredEmail', newEmail);
        localStorage.setItem('registeredPassword', newPassword);
        localStorage.setItem('registeredName', name);
        localStorage.setItem('registeredLastName', lastName);
        localStorage.setItem('registeredCity', city);
        localStorage.setItem('registeredStreet', street);
        localStorage.setItem('registeredNumber', number);
        localStorage.setItem('registeredZipcode', zipcode);
        localStorage.setItem('registeredPhone', phone);
        
        alert('Usuario registrado correctamente');

    });
});






