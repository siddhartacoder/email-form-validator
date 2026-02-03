/**
 * Email Form Validator
 * Real-time validation with email format checking and simulated sending
 */

document.addEventListener("DOMContentLoaded", function () {
  // ============================================
  // STATE & ELEMENTS
  // ============================================

  // Form data state - tracks input values for validation
  const email = {
    email: "",
    asunto: "",
    mensaje: "",
  };

  // Form inputs
  const inputMail = document.querySelector("#email");
  const inputMensaje = document.querySelector("#mensaje");
  const inputAsunto = document.querySelector("#asunto");

  // Form controls
  const formulario = document.querySelector("#formulario");
  const btnSubmit = document.querySelector('#formulario button[type="submit"]');
  const btnReset = document.querySelector('#formulario button[type="reset"]');
  const spinner = document.querySelector("#spinner");

  // ============================================
  // EVENT LISTENERS
  // ============================================

  // Validate inputs on every keystroke
  inputMail.addEventListener("input", validar);
  inputAsunto.addEventListener("input", validar);
  inputMensaje.addEventListener("input", validar);

  // Handle form submission
  formulario.addEventListener("submit", enviarEmail);

  // Handle reset button
  btnReset.addEventListener("click", function (e) {
    e.preventDefault();
    resetFormulario();
  });

  // ============================================
  // FUNCTIONS
  // ============================================

  /**
   * Simulates sending email with loading animation
   * Shows spinner for 3s, then displays success message
   */
  function enviarEmail(e) {
    e.preventDefault();

    // Displays loading indicator for 3 seconds
    spinner.classList.add("flex");
    spinner.classList.remove("hidden");

    // Simulate API delay
    setTimeout(() => {
      // Hide spinner
      spinner.classList.remove("flex");
      spinner.classList.add("hidden");

      // Show success message
      const validado = document.createElement("P");
      validado.textContent = "Mensaje enviado correctamente";
      validado.classList.add(
        "text-white",
        "bg-green-500",
        "p-2",
        "text-center",
        "rounded-lg",
        "uppercase",
        "text-sm",
        "font-bold",
        "mt-10",
      );
      formulario.appendChild(validado);

      resetFormulario();

      // Remove success message after 3s
      setTimeout(() => {
        validado.remove();
      }, 3000);
    }, 3000);
  }

  /**
   * Validates input fields in real-time
   * Checks for empty fields and valid email format
   */
  function validar(e) {
    // Check if field is empty
    if (e.target.value.trim() === "") {
      mostrarAlerta(
        `El campo ${e.target.id} es obligatorio`,
        e.target.parentElement,
      );
      email[e.target.name] = "";
      comprobarEmail();
      return;
    }

    // Clear any existing error
    limpiarAlerta(e.target.parentElement);

    // Validate email format if it's the email field
    if (e.target.id === "email" && !validarEmail(e.target.value)) {
      mostrarAlerta("El email ingresado no es valido", e.target.parentElement);
      email[e.target.name] = "";
      comprobarEmail();
      return;
    }

    // Save input value (trimmed and lowercase)
    email[e.target.name] = e.target.value.trim().toLowerCase();

    // Check if submit button should be enabled
    comprobarEmail();
  }

  /**
   * Shows error message below the field
   * Removes any existing error first to prevent duplicates
   */
  function mostrarAlerta(mensaje, referencia) {
    limpiarAlerta(referencia);

    // Create and insert error message
    const error = document.createElement("P");
    error.textContent = mensaje;
    error.classList.add("bg-red-600", "text-white", "p-2", "text-center");
    referencia.appendChild(error);
  }

  /**
   * Removes error message from field
   */
  function limpiarAlerta(referencia) {
    const alerta = referencia.querySelector(".bg-red-600");
    if (alerta) {
      alerta.remove();
    }
  }

  /**
   * Validates email format using regex
   * Returns true if format is valid
   */
  function validarEmail(email) {
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const resultado = regex.test(email);
    return resultado;
  }

  /**
   * Enables/disables submit button based on form completion
   * Button is only enabled when all fields are filled
   */
  function comprobarEmail() {
    if (Object.values(email).includes("")) {
      btnSubmit.classList.add("opacity-50");
      btnSubmit.disabled = true;
      return;
    }

    btnSubmit.classList.remove("opacity-50");
    btnSubmit.disabled = false;
  }

  /**
   * Resets form to initial empty state
   */
  function resetFormulario() {
    email.email = "";
    email.asunto = "";
    email.mensaje = "";

    formulario.reset();
    comprobarEmail();
  }
});
