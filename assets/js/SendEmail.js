document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Sending form data to the backend to handle email sending
    fetch('/sendForm', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            name: name,
            email: email,
            message: message
        }),
    })
    .then(response => response.json())
    .then(data => {
        alert("Message sent successfully!");
    })
    .catch(error => {
        console.error('Error:', error);
        alert("There was an error sending your message.");
    });
});

