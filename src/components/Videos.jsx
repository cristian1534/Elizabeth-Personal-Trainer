import React, { useState, useEffect, useContext } from "react";
import { db } from "../database/firebase";
import { AuthContext } from "../auth/auth";
import NotVideos from "./NotVideos";
import Loader from "./Loader";

const Videos = () => {
  const [data, setData] = useState([]);
  const [isFetching, setIsfetching] = useState(false);
  const [check, setCheck] = useState({});
  const [videoClasses, setVideoClasses] = useState([]);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    setIsfetching(true);
    const clientsMessages = db.collection("Suscription").onSnapshot((snap) => {
      const data = snap.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setData(data);

      const checkPayment = data.find((op) => op.uid === currentUser.uid);
      setCheck(checkPayment);
      setIsfetching(false);
    });
    return () => clientsMessages();
  }, [currentUser]);

  useEffect(() => {
    setIsfetching(true);
    const videos = db.collection("Videos").onSnapshot((snap) => {
      const data = snap.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setVideoClasses(data);
      console.log(data);
      setIsfetching(false);
    });
    return () => videos();
  }, []);

  const handleDeleteLink = (id) => {
    setIsfetching(true);
    db.collection("Videos")
      .doc(id)
      .delete()
      .then(() => window.location.reload());
    setIsfetching(false);
  };

  return (
    <div>
      {isFetching ? (
        <Loader />
      ) : check.payment ? (
        <section class="section mb-5" id="trainers">
          <div class="container">
            <div class="row">
              <div class="col-lg-6 offset-lg-3">
                <div class="section-heading">
                  <h2>
                    Clases <em>a Distancia!</em>
                  </h2>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Eum iure quasi consequatur doloremque natus iusto labore
                    laborum laboriosam odit veritatis alias fugit possimus
                    voluptatem maxime, suscipit tempora? Tempore, hic.
                    Molestiae!
                  </p>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-lg-4">
                <div class="trainer-item">
                  <div class="image-thumb">
                    <img
                      src="https://powerexplosive.com/wp-content/uploads/2020/06/pecho-e1592945805762.jpg"
                      alt="trainers"
                    />
                  </div>
                  <div class="down-content">
                    <span>Entrenamieto SUPERIOR</span>
                    <h4>LINKS DE VIDEOS</h4>
                    <div class="dropdown">
                      <button
                        class="btn btn-secondary dropdown-toggle btn-sm"
                        type="button"
                        id="dropdownMenu2"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Ver
                      </button>
                      <div
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenu2"
                      >
                        {videoClasses.map((video) => {
                          !video.length && <span>No hay videos</span>
                          return (
                            video.category === "Superior" && (
                              <ul>
                                <li>
                                  {currentUser.email === "admin@gmail.com" && (
                                    <button
                                      onClick={() => handleDeleteLink(video.id)}
                                      style={{
                                        backgroundColor: "red",
                                        borderRadius: 5,
                                        margin: 2,
                                      }}
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-trash"
                                        viewBox="0 0 16 16"
                                      >
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                        <path
                                          fill-rule="evenodd"
                                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                        />
                                      </svg>
                                    </button>
                                  )}
                                  <a href={video.link} class="dropdown-item">
                                    <span>{video.title}</span>
                                  </a>
                                </li>
                              </ul>
                            )
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="trainer-item">
                  <div class="image-thumb">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSPqmtxEXWJJ6k4OswvlTNqskM5XNc9QUX-5A&usqp=CAU"
                      alt="trainers"
                    />
                  </div>
                  <div class="down-content">
                    <span>Entrenamiento de INFERIOR</span>
                    <h4>LINKS DE VIDEOS</h4>
                    <div class="dropdown">
                      <button
                        class="btn btn-secondary dropdown-toggle btn-sm"
                        type="button"
                        id="dropdownMenu2"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Ver
                      </button>
                      <div
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenu2"
                      >
                        {videoClasses.map((video) => {
                          return (
                            video.category === "Inferior" && (
                              <ul>
                                <li>
                                  {currentUser.email === "admin@gmail.com" && (
                                    <button
                                      onClick={() => handleDeleteLink(video.id)}
                                      style={{
                                        backgroundColor: "red",
                                        borderRadius: 5,
                                        margin: 2,
                                      }}
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-trash"
                                        viewBox="0 0 16 16"
                                      >
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                        <path
                                          fill-rule="evenodd"
                                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                        />
                                      </svg>
                                    </button>
                                  )}
                                  <a href={video.link} class="dropdown-item">
                                    <span>{video.title}</span>
                                  </a>
                                </li>
                              </ul>
                            )
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="trainer-item">
                  <div class="image-thumb">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQA5mVgSJpjMqCrSbs-DOUpgC_iVY6Uc1kzbg&usqp=CAU"
                      alt="trainers"
                    />
                  </div>
                  <div class="down-content">
                    <span>Entrenamiento de NUCLEO</span>
                    <h4>LINKS DE VIDEOS</h4>
                    <div class="dropdown">
                      <button
                        class="btn btn-secondary btn-sm dropdown-toggle"
                        type="button"
                        id="dropdownMenu2"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Ver
                      </button>
                      <div
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenu2"
                      >
                        {videoClasses.map((video) => {
                          return (
                            video.category === "Nucleo" && (
                              <ul>
                                <li>
                                  {currentUser.email === "admin@gmail.com" && (
                                    <button
                                      onClick={() => handleDeleteLink(video.id)}
                                      style={{
                                        backgroundColor: "red",
                                        borderRadius: 5,
                                        margin: 2,
                                      }}
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-trash"
                                        viewBox="0 0 16 16"
                                      >
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                        <path
                                          fill-rule="evenodd"
                                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                        />
                                      </svg>
                                    </button>
                                  )}
                                  <a href={video.link} class="dropdown-item">
                                    <span>{video.title}</span>
                                  </a>
                                </li>
                              </ul>
                            )
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="row mt-3">
              <div class="col-lg-4">
                <div class="trainer-item">
                  <div class="image-thumb">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStc-qWF9OeTGg-MdoGwJ_CaXb-z3py_XeBVQ&usqp=CAU"
                      alt="trainers"
                    />
                  </div>
                  <div class="down-content">
                    <span>Entrenamieto de CARDIO</span>
                    <h4>LINKS DE VIDEOS</h4>
                    <div class="dropdown">
                      <button
                        class="btn btn-secondary dropdown-toggle btn-sm"
                        type="button"
                        id="dropdownMenu2"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Ver
                      </button>
                      <div
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenu2"
                      >
                        {videoClasses.map((video) => {
                          return (
                            video.category === "Cardio" && (
                              <ul>
                                <li>
                                  {currentUser.email === "admin@gmail.com" && (
                                    <button
                                      onClick={() => handleDeleteLink(video.id)}
                                      style={{
                                        backgroundColor: "red",
                                        borderRadius: 5,
                                        margin: 2,
                                      }}
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-trash"
                                        viewBox="0 0 16 16"
                                      >
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                        <path
                                          fill-rule="evenodd"
                                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                        />
                                      </svg>
                                    </button>
                                  )}
                                  <a href={video.link} class="dropdown-item">
                                    <span>{video.title}</span>
                                  </a>
                                </li>
                              </ul>
                            )
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="trainer-item">
                  <div class="image-thumb">
                    <img
                      src="data:image/jpeg;base64,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"
                      alt="trainers"
                    />
                  </div>
                  <div class="down-content">
                    <span>Entrenamiento de ELONGACION</span>
                    <h4>LINKS DE VIDEOS</h4>
                    <div class="dropdown">
                      <button
                        class="btn btn-secondary dropdown-toggle btn-sm"
                        type="button"
                        id="dropdownMenu2"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Ver
                      </button>
                      <div
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenu2"
                      >
                        {videoClasses.map((video) => {
                          return (
                            video.category === "Elongacion" && (
                              <ul>
                                <li>
                                  {currentUser.email === "admin@gmail.com" && (
                                    <button
                                      onClick={() => handleDeleteLink(video.id)}
                                      style={{
                                        backgroundColor: "red",
                                        borderRadius: 5,
                                        margin: 2,
                                      }}
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-trash"
                                        viewBox="0 0 16 16"
                                      >
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                        <path
                                          fill-rule="evenodd"
                                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                        />
                                      </svg>
                                    </button>
                                  )}
                                  <a href={video.link} class="dropdown-item">
                                    <span>{video.title}</span>
                                  </a>
                                </li>
                              </ul>
                            )
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-lg-4">
                <div class="trainer-item">
                  <div class="image-thumb">
                    <img
                      src="data:image/jpeg;base64,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"
                      alt="trainers"
                    />
                  </div>
                  <div class="down-content">
                    <span>Entrenamiento de MOVILIDAD</span>
                    <h4>LINKS DE VIDEOS</h4>
                    <div class="dropdown">
                      <button
                        class="btn btn-secondary btn-sm dropdown-toggle"
                        type="button"
                        id="dropdownMenu2"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        Ver
                      </button>
                      <div
                        class="dropdown-menu"
                        aria-labelledby="dropdownMenu2"
                      >
                        {videoClasses.map((video) => {
                          return (
                            video.category === "Movilidad" && (
                              <ul>
                                <li>
                                  {currentUser.email === "admin@gmail.com" && (
                                    <button
                                      onClick={() => handleDeleteLink(video.id)}
                                      style={{
                                        backgroundColor: "red",
                                        borderRadius: 5,
                                        margin: 2,
                                      }}
                                    >
                                      <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="16"
                                        height="16"
                                        fill="currentColor"
                                        class="bi bi-trash"
                                        viewBox="0 0 16 16"
                                      >
                                        <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                                        <path
                                          fill-rule="evenodd"
                                          d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                                        />
                                      </svg>
                                    </button>
                                  )}
                                  <a href={video.link} class="dropdown-item">
                                    <span>{video.title}</span>
                                  </a>
                                </li>
                              </ul>
                            )
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ) : (
        <NotVideos />
      )}
    </div>
  );
};

export default Videos;
