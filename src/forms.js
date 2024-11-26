export const generateForm = () => {
  // Create the "rigid" elements
  const main = document.querySelector("main");
  const form = document.createElement("form");
  form.setAttribute("novalidate", "");
  const fieldset = document.createElement("fieldset");
  const legend = document.createElement("legend");
  legend.textContent = "My JS-Validated Form";
  fieldset.appendChild(legend);

  // START CREATION OF EACH FORM-FIELD CONTAINERS, LABELS, AND INPUT FIELDS

  // Email field
  const emailContainer = document.createElement("div");
  emailContainer.classList.add("form-field", "field-email");
  const emailInput = document.createElement("input");
  emailInput.type = "email";
  emailInput.name = "email";
  emailInput.id = "email";
  const emailLabel = document.createElement("label");
  emailLabel.setAttribute("for", emailInput.id);
  emailLabel.textContent = "Email:";
  emailContainer.appendChild(emailLabel);
  emailContainer.appendChild(emailInput);
  fieldset.appendChild(emailContainer);

  // Password field
  const passwordContainer = document.createElement("div");
  passwordContainer.classList.add("form-field", "field-password");
  const passwordInput = document.createElement("input");
  passwordInput.type = "password";
  passwordInput.name = "password";
  passwordInput.id = "password";
  const passwordLabel = document.createElement("label");
  passwordLabel.setAttribute("for", passwordInput.id);
  passwordLabel.textContent = "Password:";
  passwordContainer.appendChild(passwordLabel);
  passwordContainer.appendChild(passwordInput);
  fieldset.appendChild(passwordContainer);

  // Confirm password field
  const confirmPasswordContainer = document.createElement("div");
  confirmPasswordContainer.classList.add(
    "form-field",
    "field-confirm-password"
  );
  const confirmPasswordInput = document.createElement("input");
  confirmPasswordInput.type = "password";
  confirmPasswordInput.name = "confirm-password";
  confirmPasswordInput.id = "confirm-password";
  const confirmPasswordLabel = document.createElement("label");
  confirmPasswordLabel.setAttribute("for", confirmPasswordInput.id);
  confirmPasswordLabel.textContent = "Confirm Password:";
  confirmPasswordContainer.appendChild(confirmPasswordLabel);
  confirmPasswordContainer.appendChild(confirmPasswordInput);
  fieldset.appendChild(confirmPasswordContainer);

  // Append "rigid" elements to the main body

  form.appendChild(fieldset);
  main.appendChild(form);
};
