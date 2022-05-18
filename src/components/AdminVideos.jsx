import React, { useState } from "react";
import { db } from "../database/firebase";

const AdminVideos = () => {
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("Videos").add({
      category,
      title,
      link,
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
                <h2 class="text-center text-white mb-5">AGREGAR VIDEO </h2>
                <form
                  class="contact ajax-contact-form"
                  id="form"
                  onSubmit={handleSubmit}
                >
                  <div class="row">
                    <div class="col-md-6 col-sm-12">
                      <input
                        name="title"
                        type="text"
                        id="title"
                        placeholder="Título del Video"
                        onChange={(e) => setTitle(e.target.value)}
                        required
                      />
                    </div>
                    <div class="col-md-6 col-sm-12">
                      <input
                        name="link"
                        type="text"
                        id="link"
                        placeholder="Link del Video"
                        onChange={(e) => setLink(e.target.value)}
                        required
                      />
                    </div>
                    <p>Categoría del Video</p>
                    <div class="col-md-6 col-sm-12" style={{ color: "grey" }}>
                      <select
                        name="category"
                        type="text"
                        id="category"
                        onClick={(e) => setCategory(e.target.value)}
                        style={{ color: "grey" }}
                        required
                      >
                        <option>Superior</option>

                        <option>Inferior</option>

                        <option>Nucleo</option>

                        <option>Cardio</option>

                        <option>Elongacion</option>

                        <option>Movilidad</option>
                      </select>
                    </div>
                    <div class="col-lg-12">
                      <button
                        type="submit"
                        name="submit"
                        class="main-button dis-btn mt-4"
                        disabled={category && title && link ? false : true}
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

export default AdminVideos;
