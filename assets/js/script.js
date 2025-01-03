document.addEventListener("DOMContentLoaded", function () {
    // Initialize flatpickr
    flatpickr("#jsPickr", {
        allowInput: true,
        monthSelectorType: "static",
    });
    // Fetch all the forms we want to apply custom validation styles to
    const forms = document.querySelectorAll(".needs-validation");

    // Loop over them and prevent submission if invalid

    Array.from(forms).forEach((form) => {
        form.addEventListener(
            "submit",
            (event) => {
                if (!form.checkValidity()) {
                    event.preventDefault();
                    event.stopPropagation();
                    // Find the first invalid input field and set focus to it
                    const firstInvalidElement = form.querySelector(":invalid");
                    if (firstInvalidElement) {
                        firstInvalidElement.focus();
                    }
                }
                form.classList.add("validate");
            },
            false
        );
    });
});
