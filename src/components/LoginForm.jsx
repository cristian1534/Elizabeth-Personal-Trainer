import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useFirebaseApp } from "reactfire";
import Swal from "sweetalert2";
import "firebase/auth";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const firebase = useFirebaseApp();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        const form = document.querySelector("#form");
        form.reset();

        Swal.fire({
          icon: "success",
          title: "Ingreso Existoso!",
          showConfirmButton: false,
          timer: 2500,
        });
        history.push("/")
      }).catch(() => {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Verificar Datos Ingresados',
          footer: '<a href="/register">Click para Registrarte</a>'
        })
      })
  };

  return (
    <div>
      <section class="section" id="contact-us">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12 w-100 p-0">
              <div class="note"></div>
              <div class="contact-form fields">
                <h2 class="text-center text-white mb-5">INGRESAR</h2>
                <form class="contact ajax-contact-form" id="form" onSubmit={handleSubmit}>
                  <div class="row">
                    <div class="col-md-6 col-sm-12">
                      <input
                        name="email"
                        type="email"
                        id="email"
                        pattern="[^ @]*@[^ @]*"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div class="col-md-6 col-sm-12">
                      <input
                        name="password"
                        type="password"
                        id="password"
                        placeholder="Contraseña"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>

                    <div class="col-lg-12">
                      <button type="submit" name="submit" class="main-button dis-btn" disabled={email && password ? false : true}>
                        Confirmar
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LoginForm;
