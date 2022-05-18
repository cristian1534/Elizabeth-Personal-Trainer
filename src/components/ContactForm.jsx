import React, { useState } from "react";
import { db } from "../database/firebase";
import Swal from "sweetalert2";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("Comment")
      .add({
        name,
        email,
        message,
      })
      .then(() => {
        const form = document.querySelector("#form");
        form.reset();

        Swal.fire({
          icon: "success",
          title: "Mensaje Enviado",
          showConfirmButton: false,
          timer: 2500,
        });
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Verifica los Datos de tu Mensaje",
        });
      });
  };

  return (
    <div>
      <section class="section" id="contact-us">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12 w-100 p-0">
              <div class="note"></div>
              <div class="contact-form fields">
                <h2 class="text-center text-white mb-5">ENVIAR CONSULTA</h2>
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
                        name="email"
                        type="text"
                        id="email"
                        pattern="[^ @]*@[^ @]*"
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>
                    <div class="col-lg-12 w-100">
                      <textarea
                        name="message"
                        rows="6"
                        id="message"
                        placeholder="Consulta"
                        onChange={(e) => setMessage(e.target.value)}
                        required
                      ></textarea>
                    </div>
                    <div class="col-lg-12">
                      <button
                        type="submit"
                        name="submit"
                        class="main-button dis-btn"
                        disabled={name && email && message ? false : true}
                      >
                        Enviar
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

export default ContactForm;
