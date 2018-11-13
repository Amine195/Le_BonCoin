class Pidie {
    constructor() {}

        // Strong Password
        passwordValidation() {

            const passValidate = document.querySelector(".password-validation");
            passValidate.setAttribute("pattern", "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{12,}");
            passValidate.setAttribute("title", "* Doit contenir au moins un chiffre, une lettre majuscule et minuscule et au moins 12 caractères.");
            const passMessage = document.querySelector(".password-message");

            if (passMessage) {
            passMessage.innerHTML = passValidate.getAttribute("title");
            }

            // passValidate.addEventListener("blur", () => {
            // passMessage.innerHTML = passValidate.getAttribute("title");
            // });

            passValidate.addEventListener("keyup", () => {

                let passInfo = "";
                passInfo += "<h3>Le mot de passe doit contenir les éléments suivants:</h3>";
                passInfo += "<p id=\"password-letter\" class=\"password-invalid\">Une ou plusieurs <b> lettres </ b> minuscules</p>";
                passInfo += "<p id=\"password-capital\" class=\"password-invalid\">Une ou plusieurs lettres <b> majuscules </ b></p>";
                passInfo += "<p id=\"password-number\" class=\"password-invalid\">Un ou plusieurs <b> numéros </ b> seulement</p>";
                passInfo += "<p id=\"password-length\" class=\"password-invalid\">Lettre ou chiffre <b> 12 caractères </ b> minimum</p>";
                passMessage.innerHTML = passInfo;
                
                const lowerCaseLetters = /[a-z]/g;
                const letter = document.getElementById("password-letter");
                if (passValidate.value.match(lowerCaseLetters)) {
                    letter.classList.remove("password-invalid");
                    letter.classList.add("password-valid");
                } else {
                    letter.classList.remove("password-valid");
                    letter.classList.add("password-invalid");
                }

                const upperCaseLetters = /[A-Z]/g;
                const capital = document.getElementById("password-capital");
                if (passValidate.value.match(upperCaseLetters)) {
                    capital.classList.remove("password-invalid");
                    capital.classList.add("password-valid");
                } else {
                    capital.classList.remove("password-valid");
                    capital.classList.add("password-invalid");
                }

                const numbers = /[0-9]/g;
                const number = document.getElementById("password-number");
                if (passValidate.value.match(numbers)) {
                    number.classList.remove("password-invalid");
                    number.classList.add("password-valid");
                } else {
                    number.classList.remove("password-valid");
                    number.classList.add("password-invalid");
                }

                const length = document.getElementById("password-length");
                if (passValidate.value.length >= 12) {
                    length.classList.remove("password-invalid");
                    length.classList.add("password-valid");
                } else {
                    length.classList.remove("password-valid");
                    length.classList.add("password-invalid");
                }

            });
        }

        // Show password
        togglePassword(id) {
            var passwordField = document.querySelector(id);
            var passwordInput = passwordField.querySelector('.input');
            var passwordToggle = passwordField.querySelector('.button');
            passwordToggle.addEventListener('click', function(){
                if(passwordInput.type === 'password'){
                    passwordInput.type = 'text';
                    passwordToggle.innerHTML = '<i class="fa fa-eye-slash fa-lg" aria-hidden="true"></i> Invisible';
                } else{
                    passwordInput.type = 'password';
                    passwordToggle.innerHTML = '<i class="fa fa-eye fa-lg" aria-hidden="true"></i> Visible';
                }
            });
        }

}