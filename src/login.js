
const passwordInput = document.getElementById('password');
const confirmPasswordInput = document.getElementById('confirm-password');
const passwordMatchMessage = document.getElementById('password-match-message');


function checkPasswordMatch() {
  const password = passwordInput.value;
  const confirmPassword = confirmPasswordInput.value;

  if (password === confirmPassword) {
    passwordMatchMessage.textContent = 'Password matches';
    passwordMatchMessage.style.color = 'green';
  } else {
    passwordMatchMessage.textContent = 'Password does not match';
    passwordMatchMessage.style.color = 'red';
  }
}

passwordInput.addEventListener('input', checkPasswordMatch);
confirmPasswordInput.addEventListener('input', checkPasswordMatch);


var loginBtn = document.querySelector("#btt");
loginBtn.addEventListener("click", function(event) {
  event.preventDefault(); 

  const emailInput = document.getElementById('email').value;
  const passwordInputValue = passwordInput.value;
  const confirmPasswordInputValue = confirmPasswordInput.value;

  
  if (emailInput.trim() === '' || passwordInputValue.trim() === '' || confirmPasswordInputValue.trim() === '') {
    alert('Please fill in all the details before proceeding.');
  } else {
    
    window.location.href = "./redirect.html";
  }
});