
          function onlyNumberKey(evt) {

// Only ASCII character in that range allowed
var ASCIICode = (evt.which) ? evt.which : evt.keyCode
if (ASCIICode > 31 && (ASCIICode < 48 || ASCIICode > 57))
return false;
return true;
}
        document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('userForm');

  form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const formData = {
      firstName: form.firstName.value,
      mobilenumber: form.mobilenumber.value,
      email: form.email.value,
      state:form.state.value,
      gender: form.querySelector('input[name="gender"]:checked') ? form.querySelector('input[name="gender"]:checked').value:'',
      country:form.country.value,
      education:form.education.value,
      maritalstatus:form.maritalstatus.value,
      city:form.city.value,
      agree: form.agree.checked
    };

    // Validate the form
    if (validateForm(formData)) {
      // Store data in local storage
      localStorage.setItem('userData', JSON.stringify(formData));
      alert('Form submitted successfully!');
      form.reset();
    } else {
      alert('Please fill out all fields.');
    }
  });

  // Function to validate form fields
  function validateForm(data) {
    return data.firstName.trim() !== ' ' &&
           data.mobilenumber.trim() !== ' ' &&
           data.city.trim() !==' ' &&
           data.state.trim() !== ' ' &&
           data.country.trim() !== ' '&&
           data.education.trim() !== ' '&&
           data.maritalstatus.trim() !==' '&&
           data.email.trim() !== ' ' &&
           data.gender !== ' ' &&
            data.agree;
  }
});

 