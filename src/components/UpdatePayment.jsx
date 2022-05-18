import React, { useState } from "react";
import { db } from "../database/firebase";
import {useHistory} from "react-router-dom";
import Swal from "sweetalert2";

const UpadatePayment = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [cuponNumber, setCuponNumber] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    let  updatePaymentDate = new Date();
    let  options = { year: 'numeric', month: 'long', day: 'numeric' };

    db.collection("PaymentUpdated")
      .add({
        name,
        email,
        cuponNumber,
        paymentDate: updatePaymentDate.toLocaleDateString("es-ES", options)
      })
      .then((docRef) => {
        const idPayment = docRef.id;
        const form = document.querySelector("#form");
        form.reset();
        Swal.fire({
          icon: "success",
          title: "PAGO ACTUALIZADO ",
          text:  `Tu órden de Pago es: ${idPayment}`,
        });
        history.push("/")
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Verifica los Datos Ingresados",
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
                <h2 class="text-center text-white mb-5">ACTUALIZAR PAGO</h2>
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
                        disabled={name && email && cuponNumber ? false : true}
                      >
                        Enviar
                      </button>
                      <span style={{ float: "right", color: "grey" }}>
                        <b>TU CUENTA SE REACTIVARA EN 24 HORAS</b>
                        </span>
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

export default UpadatePayment;