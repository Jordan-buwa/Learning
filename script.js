document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // You can use a service like EmailJS, FormSpree, or your own backend
            // This example uses FormSpree which is simple to set up
            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('message', message);
            
            // Replace 'your-formspree-endpoint' with your actual FormSpree endpoint
            fetch('https://formspree.io/f/mdkeqwwv', {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => response.json())
            .then(data => {
                formStatus.textContent = 'Message sent successfully!';
                formStatus.style.color = 'green';
                contactForm.reset();
            })
            .catch(error => {
                formStatus.textContent = 'There was an error sending your message. Please try again.';
                formStatus.style.color = 'red';
                console.error(error);
            });
        });
    }
});