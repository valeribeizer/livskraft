import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import "./style.css";

const ContactForm = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_4t3454j", "template_ni0imaa", form.current, {
        publicKey: "g3lRXYQqlKOkmc1vN",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="overlay" onClick={onClose}>
      <div
        className="modal-container"
        style={{
          backgroundImage:
            window.innerWidth > 560
              ? "url('/tsInfo-bg.png')"
              : "url('/tsInfo-bg-mb.png')",
        }}
        onClick={(e) => e.stopPropagation()}
      >
        <h2>FÅ STÖD</h2>
        <form className="needs-validation" ref={form} onSubmit={sendEmail}>
          <label for="validation-1" className="form-label">
            Namn och efternamn
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="validation-1"
            required
          />
          <label for="validation-2" className="form-label">
            Email
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="validation-2"
            required
          />
          <label for="validation-3" className="form-label">
            Telefonnummer
          </label>
          <input
            type="phone"
            name="phone"
            className="form-control"
            id="validation-3"
            required
          />
          <label for="validation-4" className="form-label">
            När vill du bli kontaktad?
          </label>
          <input
            type="text"
            name="time"
            className="form-control"
            id="validation-4"
            required
          />
          <label for="validation-5" className="form-label">
            Hur föredrar du att bli kontaktad?
          </label>
          <select
            className="form-select"
            id="validation-5"
            name="metod"
            required
          >
            <option selected disabled value="" style={{ fontSize: "12px" }}>
              Välje...
            </option>
            <option>SMS</option>
            <option>Email</option>
            <option>Call</option>
          </select>
          <label for="validation-6" className="form-label">
            Vad kan jag hjälpa dig med?
          </label>
          <textarea
            className="form-control"
            id="validation-6"
            name="msg"
            style={{ height: "90px" }}
            placeholder="Beskriv kort vad du behöver hjälp med eller vad du vill veta mer om. Ju mer jag vet, desto bättre kan jag förbereda mig för att hjälpa dig."
            required
          ></textarea>
          <div className="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="invalidCheck"
              required
            />
            <label class="form-check-label" for="invalidCheck">
              Jag samtycker till att mina uppgifter används för att ge
              personligt anpassat stöd.
            </label>
          </div>
          <button className="btn_main" type="submit" onClick={onSubmit}>
            SKICKA
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
