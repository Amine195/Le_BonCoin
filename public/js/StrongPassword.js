// Strong Password

class Pidie {
    constructor() {}

        passwordValidation() {

            const passValidate = document.querySelector(".pd-password-validation");
            passValidate.setAttribute("pattern", "(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}");
            // passValidate.setAttribute("title", "Doit contenir au moins un chiffre, une lettre majuscule et minuscule et au moins 8 caractères.");
            const passMessage = document.querySelector(".pd-password-message");

            if (passMessage) {
            passMessage.innerHTML = passValidate.getAttribute("title");
            }

            // passValidate.addEventListener("blur", () => {
            // passMessage.innerHTML = passValidate.getAttribute("title");
            // });

            passValidate.addEventListener("keyup", () => {

                let passInfo = "";
                passInfo += "<h3>Le mot de passe doit contenir les éléments suivants:</h3>";
                passInfo += "<p id=\"pd-password-letter\" class=\"pd-password-invalid\">Une ou plusieurs <b> lettres </ b> minuscules</p>";
                passInfo += "<p id=\"pd-password-capital\" class=\"pd-password-invalid\">Une ou plusieurs lettres <b> majuscules </ b></p>";
                passInfo += "<p id=\"pd-password-number\" class=\"pd-password-invalid\">Un ou plusieurs <b> numéros </ b> seulement</p>";
                passInfo += "<p id=\"pd-password-length\" class=\"pd-password-invalid\">Lettre ou chiffre <b> 8 caractères </ b> minimum</p>";
                passMessage.innerHTML = passInfo;
                
                const lowerCaseLetters = /[a-z]/g;
                const letter = document.getElementById("pd-password-letter");
                if (passValidate.value.match(lowerCaseLetters)) {
                    letter.classList.remove("pd-password-invalid");
                    letter.classList.add("pd-password-valid");
                } else {
                    letter.classList.remove("pd-password-valid");
                    letter.classList.add("pd-password-invalid");
                }

                const upperCaseLetters = /[A-Z]/g;
                const capital = document.getElementById("pd-password-capital");
                if (passValidate.value.match(upperCaseLetters)) {
                    capital.classList.remove("pd-password-invalid");
                    capital.classList.add("pd-password-valid");
                } else {
                    capital.classList.remove("pd-password-valid");
                    capital.classList.add("pd-password-invalid");
                }

                const numbers = /[0-9]/g;
                const number = document.getElementById("pd-password-number");
                if (passValidate.value.match(numbers)) {
                    number.classList.remove("pd-password-invalid");
                    number.classList.add("pd-password-valid");
                } else {
                    number.classList.remove("pd-password-valid");
                    number.classList.add("pd-password-invalid");
                }

                const length = document.getElementById("pd-password-length");
                if (passValidate.value.length >= 8) {
                    length.classList.remove("pd-password-invalid");
                    length.classList.add("pd-password-valid");
                } else {
                    length.classList.remove("pd-password-valid");
                    length.classList.add("pd-password-invalid");
                }

            });
        }

}
