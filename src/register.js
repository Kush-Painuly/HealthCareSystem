var userselect = document.getElementById('user_type');
var doctorsfields = document.getElementById('doctor_fields');
var registerButton = document.getElementById('btt');

userselect.addEventListener("change", function () {
  if (userselect.value === 'doctor') {
    doctorsfields.style.display = 'block';
    registerButton.disabled = false; 
  } else {
    doctorsfields.style.display = 'none';
    registerButton.disabled = false; 
  }

  if (userselect.value === 'admin') {
    window.location.href = "../public/login.html";
  } else if (userselect.value === 'guest') {
   
    window.location.href = "../index.html";
  }
});

registerButton.addEventListener("click", function (event) {
  var userType = userselect.value;

  const firstname = document.getElementById('fname').value;
  const lname = document.getElementById('lname').value;
  const email = document.getElementById('email').value;
  const pswrd = document.getElementById('password').value;
  const dob = document.getElementById('birth').value;
  const bbg = document.getElementById('bg').value;

  
  if (firstname.trim() === '' || lname.trim() === '' || email.trim() === '' || pswrd.trim() === '' || dob.trim() === '' || bbg.trim() === '') {
    alert('Please fill in all the details before proceeding.');
  } else {
    
    window.location.href = "../public/redirect.html";
  }

  if (userType === 'patient' || userType === 'doctor') {
   
    window.location.href = "../public/redirect.html";
  }

 
  event.preventDefault();
});


document.addEventListener('DOMContentLoaded', function () {
  const passwordInput = document.getElementById('password');
  const passwordStrength = document.getElementById('password-strength');

  function checkPasswordStrength(password) {
    const strongRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const mediumRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[A-Za-z\d]{8,}$/;

    if (strongRegex.test(password)) {
      return 'Strong';
    } else if (mediumRegex.test(password)) {
      return 'Good';
    } else {
      return 'Weak';
    }
  }

  
  function updatePasswordStrength() {
    const password = passwordInput.value;
    const strength = checkPasswordStrength(password);
    passwordStrength.textContent = `Password Strength: ${strength}`;
  }

  
  passwordInput.addEventListener('input', updatePasswordStrength);
});


