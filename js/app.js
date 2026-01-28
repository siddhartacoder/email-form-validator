document.addEventListener("DOMContentLoaded", function () {
  
  //Creamos el objeto email:
  const email = {
  email: "",
  asunto: "",
  mensaje: "",
  };


  //Seleccionamos los elementos:
  const inputMail = document.querySelector("#email");
  const inputMensaje = document.querySelector("#mensaje");
  const inputAsunto = document.querySelector("#asunto");
  const btnSubmit = document.querySelector('#formulario button[type="submit"]');
  // const formulario = document.querySelector("#formulario");


  //Agregamos los eventListener:
  inputMail.addEventListener("input", validar);
  inputAsunto.addEventListener("input", validar);
  inputMensaje.addEventListener("input", validar);



  //Funcion validadora:
  function validar(e) {
    if (e.target.value.trim() === "") {
      mostrarAlerta(
        `El campo ${e.target.id} es obligatorio`, e.target.parentElement);
      return;
    } else {
      limpiarAlerta(e.target.parentElement);
    }
    
    if(e.target.id === "email" && !validarEmail(e.target.value)) {
    mostrarAlerta("El email ingresado no es valido", e.target.parentElement);
    return;
    }

  //Asignamos los valores al objeto email:
    email[e.target.name] = e.target.value.trim().toLowerCase();
    
  //Comprobamos el objeto Email:
    comprobarEmail();
  }



  function mostrarAlerta(mensaje, referencia) {
    // Llamamos a la funcion limpiar Alerta:
    limpiarAlerta(referencia);

    //generamos alerta en HTML:
    const error = document.createElement("P");
    error.textContent = mensaje;
    error.classList.add("bg-red-600", "text-white", "p-2", "text-center");

    //agregamos el formulario
    referencia.appendChild(error);
  }



  function limpiarAlerta(referencia) {
    const alerta = referencia.querySelector(".bg-red-600");
    if (alerta) {
      alerta.remove();
    }
  }



  function validarEmail(email) {
    const regex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const resultado = regex.test(email);
    return resultado;
  }

  function comprobarEmail() {
   if (Object.values(email).includes('')) {
    btnSubmit.classList.add('opacity-50');
    btnSubmit.disabled = true;
    return;
   } else {
    btnSubmit.classList.remove("opacity-50");
    btnSubmit.disabled = false;
   }
  }
});

