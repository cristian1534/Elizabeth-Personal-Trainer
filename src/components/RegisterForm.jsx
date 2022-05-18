import React, { useState } from "react";
import { db } from "../database/firebase";
import { useFirebaseApp } from "reactfire";
import { useHistory, Link } from "react-router-dom";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import "firebase/auth";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [telephone, setTelephone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cuponNumber, setCuponNumber] = useState("");
  const payment = cuponNumber.length > 1 ? true : false;
  const firebase = useFirebaseApp();
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm("service_s3xpvdl","template_5tmpt7j",e.target,"zAs7VsTTA_VkaBwGF");
    let suscriptionDate = new Date();
    let options = { year: "numeric", month: "long", day: "numeric" };
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((credential) => {
        firebase.auth();
        db.collection("Suscription").add({
          uid: credential.user.uid,
          name,
          telephone,
          email,
          cuponNumber,
          payment,
          paymentDate: suscriptionDate.toLocaleDateString("es-ES", options),
        });

        Swal.fire({
          icon: "success",
          title: "Registro existoso!",
          showConfirmButton: false,
          timer: 2500,
        });
        history.push("/login");
      });

    const form = document.querySelector("#form");
    form.reset();
  };

  return (
    <div>
      <section class="section" id="contact-us">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12 w-100 p-0">
              <div class="note"></div>
              <div class="contact-form fields">
                <h2 class="text-center text-white mb-5">REGISTRATE</h2>

                <form
                  class="contact ajax-contact-form"
                  id="form"
                  onSubmit={handleSubmit}
                >
                  <div class="row">
                    <div class="col-md-6 col-sm-12">
                      <input
                        name="name"
                        type="text"
                        id="name"
                        placeholder="Nombre"
                        onChange={(e) => setName(e.target.value)}
                        required
                      />
                    </div>
                    <div class="col-md-6 col-sm-12">
                      <input
                        name="telephone"
                        type="text"
                        id="telephone"
                        placeholder="Telefono"
                        onChange={(e) => setTelephone(e.target.value)}
                        required
                      />
                    </div>
                    <div class="col-md-6 col-sm-12">
                      <input
                        name="email"
                        type="text"
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
                        placeholder="Contraseña min 6 dígitos"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>

                    <div class="col-md-6 col-sm-12">
                      <input
                        name="cuponNumber"
                        type="text"
                        id="cuponNumber"
                        placeholder="N* Cupon de Pago"
                        onChange={(e) => setCuponNumber(e.target.value)}
                        pattern="^[\s\S]{10,11}$"
                        title="Número de Cupón Inválido."
                        required
                      />
                    </div>
                    <div class="col-lg-12">
                      <button
                        type="submit"
                        name="submit"
                        class="main-button dis-btn"
                        disabled={
                          name && telephone && email && password ? false : true
                        }
                      >
                        Confirmar
                      </button>
                      <Link to="/login">
                        <span style={{ float: "right", color: "grey" }}>
                          Ya estás registrado? Ingresar
                        </span>
                      </Link>
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

export default RegisterForm;
