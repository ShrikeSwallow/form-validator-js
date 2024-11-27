import "./styles.css";
import { generateForm } from "./forms";

generateForm();

const email = document.querySelector("#email");
const password = document.querySelector("#password");

email.addEventListener("input", (event) => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an email address!");
  } else {
    email.setCustomValidity("");
  }
});

password.addEventListener("input", (event) => {});
