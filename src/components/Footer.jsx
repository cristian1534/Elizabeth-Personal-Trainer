import React from "react";

const Footer = () => {
  return (
    <footer>
      <div class="container">
        <div class="row">
          <div class="col-lg-4 col-md-6">
            <h3 class="footer-logo">E-E</h3>
            <ul class="list-unstyled socila-list">
              <li className="mr-4">
                <a href="#">
                  <img src="assets/images/social/facebook.png" alt="facebook" />
                </a>
              </li>
              <li className="mr-4">
                <a href="#">
                  <img src="assets/images/social/youtube.png" alt="youtube" />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    src="assets/images/social/instagram.png"
                    alt="instagram"
                  />
                </a>
              </li>
            </ul>
          </div>
          <div class="col-lg-4 col-md-6">
            <h3></h3>

            <div class="media">
              <a href="#" class="pull-left">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="50"
                  height="50"
                  fill="currentColor"
                  class="bi bi-arrow-up-square-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M2 16a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2zm6.5-4.5V5.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 5.707V11.5a.5.5 0 0 0 1 0z" />
                </svg>
              </a>
              <div class="media-body">
                <h4 class="media-heading">Consulta Directa:</h4>
                <h5>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    fill="currentColor"
                    class="bi bi-whatsapp"
                    viewBox="0 0 16 16"
                  >
                    <path d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                  </svg>{" "}
                  11-3245-9921{" "}
                </h5>
                <br />
                <span>
                  SITIO CREADO POR{" "}
                  <a
                    href="https://it-devs.ga/"
                    target="_blank"
                    style={{ color: "white" }}
                  >
                    IT-Devs.ga
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div class="col-lg-4 mt-4">
            <img
              class="img-thumbnail"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu_MBx5qSahRzsilObFJy3lbsf9Q-1Bl75vA&usqp=CAU"
              alt="partners"
            />

            <img
              class="img-thumbnail"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHwz2LSHzYbuYFxh9FWgm3HtgrHJ0EA_Yg7-D1E6mmOqTa-iv4eSeXXGFWXYgkikkmkMo&usqp=CAU"
              alt="partners"
            />
            <img
              class="img-thumbnail"
              src="data:image/jpeg;base64,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"
              alt="partners"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
