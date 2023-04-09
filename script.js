
      function checkPassword() {

      const Password = document.getElementById("Password").value;
    

      document.getElementById("length").classList.toggle("green", Password.length >= 8);
      document.getElementById("uppercase").classList.toggle("green", /[A-Z]/.test(Password));
      document.getElementById("lowercase").classList.toggle("green", /[a-z]/.test(Password));
      document.getElementById("number").classList.toggle("green", /\d/.test(Password));

  
      };




const hint =document.querySelectorAll("hint");
const fname = document.getElementById('FirstName');
const lname = document.getElementById('LastName');
const email = document.getElementById('Email');
const phone_number = document.getElementById('PhoneNumber');
const password = document.getElementById('Password');
const confirm_password = document.getElementById('ConfirmPassword');


fname.addEventListener('input', function() {
    if (fname.validity.patternMismatch) {
        fname.setCustomValidity("Please enter only letters.");
        fname.classList.remove("valid");
        fname.classList.add("invalid");
        fname.nextElementSibling.nextElementSibling.style.display = 'block';
        
      }else{        
        fname.setCustomValidity("");
        fname.classList.remove("invalid");
        fname.classList.add("valid");
        fname.nextElementSibling.nextElementSibling.style.display = 'none';


      
      }});

lname.addEventListener('input', function() {
    if (lname.validity.patternMismatch) {
        lname.setCustomValidity("Please enter only letters.");
        lname.classList.add("invalid");
        lname.classList.remove("valid");

        lname.nextElementSibling.nextElementSibling.style.display = 'block';

      } else {
        lname.setCustomValidity("");
        lname.classList.remove("invalid");
        lname.classList.add("valid");
        lname.nextElementSibling.nextElementSibling.style.display = 'none';


    }
});


email.addEventListener('input', function() {
  if (email.validity.typeMismatch) {
      email.setCustomValidity("Please enter a valid email address.");
      email.classList.add("invalid");
      email.classList.remove("valid");

      email.nextElementSibling.nextElementSibling.style.display = 'block';

      } else {
      email.setCustomValidity("");
      email.classList.remove("invalid");
      email.classList.add("valid");
      email.nextElementSibling.nextElementSibling.style.display = 'none';

}});



phone_number.addEventListener('input', function() {
    if (phone_number.validity.patternMismatch) {
        phone_number.setCustomValidity("Please enter a valid phone number.");
        confirm_password.classList.add("invalid");
        confirm_password.classList.remove("valid");
        phone_number.nextElementSibling.nextElementSibling.style.display = 'block';


      } else {
        phone_number.setCustomValidity("");
        confirm_password.classList.remove("invalid");
        phone_number.classList.add("valid");
        phone_number.nextElementSibling.nextElementSibling.style.display = 'none';

    }
});

password.addEventListener('input', function() {
  if (password.validity.patternMismatch) {
      password.setCustomValidity("Please enter a valid password");
      password.classList.add("invalid");
      password.classList.remove("valid");


    } else {
      password.setCustomValidity("");
      password.classList.remove("invalid");
      password.classList.add("valid");

  }
});
    
        

confirm_password.addEventListener('input', function() {
  if (confirm_password.value !== password.value) {
      confirm_password.setCustomValidity("Passwords do not match.");
      confirm_password.classList.add("invalid");
      confirm_password.classList.remove("valid");
      confirm_password.nextElementSibling.nextElementSibling.style.display = 'block';


    } else {
      confirm_password.setCustomValidity("");
      confirm_password.classList.remove("invalid");
      confirm_password.classList.add("valid");
      confirm_password.nextElementSibling.nextElementSibling.style.display = 'none';

    }
});


      



     
 
    
