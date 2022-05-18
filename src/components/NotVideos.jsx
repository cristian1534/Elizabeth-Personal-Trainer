import React from "react";
import { Link } from "react-router-dom";

const NotVideos = () => {
  return (
    <div className="section mt-3">
      <img
        src="https://acasesores.co/es/wp-content/uploads/2019/10/ac-asesores-saldos-corrientes-ahorros.jpg"
        className="img-fluid mt-5"
        alt="Saldo-Agotado"
      ></img>

      <div class="section-heading">
        <h2>
          Renova tu{" "}
          <Link to="/prices">
            <em>Pago</em>
          </Link>{" "}
          para acceder a los Videos
        </h2>
        <p>
          No olvides guardar el N* de Cupón de Pago para ingresarlo y reactivar
          tu Cuenta en este <Link to="/update-payment" ><b>LINK</b></Link>
        </p>
      </div>
    </div>
  );
};

export default NotVideos;
