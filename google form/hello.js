document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('leadForm');
    const successMessage = document.getElementById('successMessage');
    
    // Hide validation messages when radio buttons are clicked
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', function() {
            const errorMessage = this.closest('.form-group').querySelector('.validation-message');
            if (errorMessage) {
                errorMessage.style.display = 'none';
            }
        });
    });

    // Form submission handler
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Reset validation messages
        document.querySelectorAll('.validation-message').forEach(msg => {
            msg.style.display = 'none';
        });

        // Validate form
        let isValid = true;

        // Check required fields
        if (!form.querySelector('input[name="companySize"]:checked')) {
            document.getElementById('companySizeError').style.display = 'block';
            isValid = false;
        }
        if (!form.querySelector('input[name="budget"]:checked')) {
            document.getElementById('budgetError').style.display = 'block';
            isValid = false;
        }
        if (!form.querySelector('input[name="industry"]:checked')) {
            document.getElementById('industryError').style.display = 'block';
            isValid = false;
        }
        if (!form.querySelector('input[name="urgency"]:checked')) {
            document.getElementById('urgencyError').style.display = 'block';
            isValid = false;
        }

        // If form is valid, display success message
        if (isValid) {
            successMessage.style.display = 'block';
            form.reset();  // Reset form fields
        }
    });
});
