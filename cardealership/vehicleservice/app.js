document.getElementById('service-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the form from reloading the page

    // Get values from the form
    const regPlate = document.getElementById('reg-plate').value;
    const carMake = document.getElementById('car-make').value;
    const carModel = document.getElementById('car-model').value;
    const carColor = document.getElementById('car-color').value;

    // Show confirmation message
    const confirmationMessage = document.getElementById('confirmation-message');
    confirmationMessage.style.display = 'block';

    // Optionally, send form data to a server or process it further here
    console.log('Registration Plate:', regPlate);
    console.log('Car Make:', carMake);
    console.log('Car Model:', carModel);
    console.log('Car Color:', carColor);

    // Clear the form
    document.getElementById('service-form').reset();
});
