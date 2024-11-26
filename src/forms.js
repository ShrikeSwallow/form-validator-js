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

  // Append "rigid" elements to the main body

  form.appendChild(fieldset);
  main.appendChild(form);
};
