import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../auth/auth";
import { useFirebaseApp } from "reactfire";
import Swal from "sweetalert2";
import "firebase/auth";

const Header = () => {
  const { currentUser } = useContext(AuthContext);
  const firebase = useFirebaseApp();
  const history = useHistory();

  const handleLogOut = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        history.push("/");
        Swal.fire({
          icon: "success",
          title: "Has cerrado Sesión",
          showConfirmButton: false,
          timer: 2500,
        });
      });
  };

  return (
    <header class="header-area header-sticky">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <nav class="main-nav">
              <a href="/" class="logo">
                <em>E-E</em>
              </a>
              <ul class="nav">
                <li class="scroll-to-section">
                  <a href="/">Principal</a>
                </li>
                <li class="scroll-to-section">
                  <a href="/schedule">Horarios</a>
                </li>
                <li class="scroll-to-section">
                  <a href="/prices">Precios</a>
                </li>
                {currentUser && (
                  <li class="scroll-to-section">
                    <a href="/courses">Videos</a>
                  </li>
                )}
                <li class="scroll-to-section">
                  <a href="/contact">Contacto</a>
                </li>
                {!currentUser && (
                  <li class="scroll-to-section main-button">
                    <a href="/login">Ingresar</a>
                  </li>
                )}
                {currentUser && currentUser.email === "admin@gmail.com" && (
                  <li class="scroll-to-section">
                    <a href="/admin" style={{ color: "orange" }}>
                      Admin
                    </a>
                  </li>
                )}
                {currentUser && (
                  <li class="scroll-to-section main-button">
                    <a
                      onClick={() => {
                        handleLogOut();
                      }}
                    >
                      Salir
                    </a>
                  </li>
                )}
              </ul>
              <a class="menu-trigger">
                <span>Menu</span>
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
