document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('leadForm');
    const successMessage = document.getElementById('successMessage');
    
   
    document.querySelectorAll('input[type="radio"]').forEach(radio => {
        radio.addEventListener('change', function() {
            const errorMessage = this.closest('.form-group').querySelector('.validation-message');
            if (errorMessage) {
                errorMessage.style.display = 'none';
            }
        });
    });

   
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        
        document.querySelectorAll('.validation-message').forEach(msg => {
            msg.style.display = 'none';
        });

       
        let isValid = true;

       
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

   
        if (isValid) {
            successMessage.style.display = 'block';
            form.reset();  
        }
    });
});
