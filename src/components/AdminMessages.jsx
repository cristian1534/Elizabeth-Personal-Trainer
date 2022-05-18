import React, { useState, useEffect } from "react";
import { db } from "../database/firebase";
import Loader from "../components/Loader";

const AdminMessages = () => {
  const [data, setData] = useState([]);
  const [isFetching, setIsfetching] = useState(false);

  useEffect(() => {
    setIsfetching(true);
    const clientsMessages = db.collection("Comment").onSnapshot((snap) => {
      const data = snap.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
      setData(data);
      setIsfetching(false);
    });
    return () => clientsMessages();
  }, []);

  const handleDeleteMessage = (id) => {
    setIsfetching(true);
    db.collection("Comment")
      .doc(id)
      .delete()
      .then(() => window.location.reload());
    setIsfetching(false);
  };

  return (
    <div>
      {isFetching ? (<Loader/>) : (
        <section class="section" id="contact-us">
        <div class="container-fluid">
          <div class="row">
            <div class="col-lg-12 w-100 p-0">
              <div class="note"></div>
              <div class="contact-form fields">
                <h2 class="text-center text-white mb-5">ADMINISTRADOR</h2>
                <h4 class="text-center text-white mb-5">COMENTARIOS</h4>
                <div className="section">
                  <table class="table">
                    <thead class="thead-dark">
                      <tr>
                        <th scope="col" class="bg-warning">
                          Nombre
                        </th>
                        <th scope="col" class="bg-warning">
                          Email
                        </th>
                        <th scope="col" class="bg-warning">
                          Comentarios
                        </th>
                        <th scope="col" class="bg-warning">
                          Eliminar
                        </th>
                      </tr>
                    </thead>
                    <tbody className="admin">
                      {data.map((comment) => (
                        <tr key={comment.id}>
                          <td>{comment.name}</td>
                          <td>{comment.email}</td>
                          <td>{comment.message}</td>
                          <td>
                            <button
                              onClick={() => handleDeleteMessage(comment.id)}
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
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      )}
    </div>
  );
};

export default AdminMessages;
