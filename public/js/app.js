// Mdb Validation
(function () {
    window.addEventListener("load", () => {
        // Fetch all the forms we want to apply custom Bootstrap validation styles to
        const forms = document.getElementsByClassName("needs-validation");
        // Loop over them and prevent submission
        const validation = Array.prototype.filter.call(forms, (form) => {
        form.addEventListener("submit", (event) => {
            if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
            }
            form.classList.add("was-validated");
        }, false);
        });
    }, false);
}());

// Material Select Initialization
$(document).ready(function() {
    $('.mdb-select').materialSelect();
});

// Tooltips Initialization
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

// MDB Lightbox Init
$(function () {
    $("#mdb-lightbox-ui").load("../mdb-addons/mdb-lightbox-ui.html");
});

// PARALAX
// object-fit polyfill run
objectFitImages();

/* init Jarallax */
jarallax(document.querySelectorAll('.jarallax'));

jarallax(document.querySelectorAll('.jarallax-keep-img'), {
    keepImg: true,
});