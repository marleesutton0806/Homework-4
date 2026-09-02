const bioButton = document.querySelector("#bio-button");
const extraBio = document.querySelector("#extra-bio");

const contactForm = document.querySelector("#contact-form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const messageError = document.querySelector("#message-error");
const formStatus = document.querySelector("#form-status");

bioButton.addEventListener("click", function () {
    const isHidden = extraBio.hasAttribute("hidden");

    extraBio.toggleAttribute("hidden");
    bioButton.setAttribute("aria-expanded", isHidden);
    bioButton.textContent = isHidden ? "Show Less" : "Show More";
});

function showError(input, errorElement, message) {
    errorElement.textContent = message;
    input.setAttribute("aria-invalid", "true");
}

function clearError(input, errorElement) {
    errorElement.textContent = "";
    input.removeAttribute("aria-invalid");
}
contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    let formIsValid = true;
    formStatus.textContent = "";

    if (nameInput.value.trim() === "") {
        showError(nameInput, nameError, "Please enter your name.");
        formIsValid = false;
    } else {
        clearError(nameInput, nameError);
    }

    if (emailInput.value.trim() === "") {
        showError(emailInput, emailError, "Please enter your email.");
        formIsValid = false;
    } else if (!emailInput.validity.valid) {
        showError(emailInput, emailError, "Please enter a valid email address.");
        formIsValid = false;
    } else {
        clearError(emailInput, emailError);
    }

    if (messageInput.value.trim() === "") {
        showError(messageInput, messageError, "Please enter a message.");
        formIsValid = false;
    } else {
        clearError(messageInput, messageError);
    }

    if (formIsValid) {
        formStatus.textContent = "Your form was completed successfully!";
        contactForm.reset();
    }
});

nameInput.addEventListener("input", function () {
    if (nameInput.value.trim() !== "") {
        clearError(nameInput, nameError);
    }
});

emailInput.addEventListener("input", function () {
    if (emailInput.value.trim() !== "" && emailInput.validity.valid) {
        clearError(emailInput, emailError);
    }
});

messageInput.addEventListener("input", function () {
    if (messageInput.value.trim() !== "") {
        clearError(messageInput, messageError);
    }
});