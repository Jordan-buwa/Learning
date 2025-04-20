document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formStatus = document.getElementById('formStatus');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            
            // Using FormSpree for form handling
            fetch('https://formspree.io/f/mdkeqwwv', {
                method: 'POST',
                body: JSON.stringify({
                    name: name,
                    email: email,
                    message: message
                }),
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
                throw new Error('Network response was not ok.');
            })
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