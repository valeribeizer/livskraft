import React, { useRef, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import emailjs from "@emailjs/browser";
import "./style.css";
import NavBar from "../NavBar/NavBar";
import Footer from "../Footer/Footer";
// import { Link } from "react-router";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { sv } from "date-fns/locale";

const ContactForm = () => {
  const form = useRef();
  const location = useLocation();
  const navigate = useNavigate();
  const source = location.state?.source;
  const [selectedDate, setSelectedDate] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();

    // Debug
    console.log("Sending time:", selectedDate?.toISOString());
    console.log("Form time input value:", form.current["time"].value);

    emailjs
      .sendForm(
        "service_4t3454j",
        "template_ni0imaa",
        form.current,
        "g3lRXYQqlKOkmc1vN"
      )
      .then(
        () => {
          console.log("SUCCESS!");
          navigate("/skickad");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <NavBar />
      <div className="cf-container">
        {source === "bokningsforfragan" ? (
          <h1>SKICKA BOKNINGSFÖRFRÅGAN</h1>
        ) : (
          <h1>PRIVAT RÅDGIVNING</h1>
        )}
        <p className="p-form">
          Jag tar endast emot ett begränsat antal klienter varje månad för att
          säkerställa högsta kvalitet och personlig vägledning. Fyll i
          formuläret nedan för att skicka in din förfrågan, så återkommer jag
          personligen.
        </p>
        <form className="needs-validation" ref={form} onSubmit={sendEmail}>
          <label htmlFor="validation-1" className="form-label">
            Namn och efternamn
          </label>
          <input
            type="text"
            name="name"
            className="form-control"
            id="validation-1"
            required
          />
          <label htmlFor="validation-2" className="form-label">
            E-post
          </label>
          <input
            type="email"
            name="email"
            className="form-control"
            id="validation-2"
            required
          />
          <label htmlFor="validation-3" className="form-label">
            Telefonnummer
          </label>
          <input
            type="phone"
            name="phone"
            className="form-control"
            id="validation-3"
            required
          />
          <label htmlFor="validation-4" className="form-label">
            När vill du bli kontaktad?
          </label>
          <DatePicker
            id="validation-4"
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            className="form-control"
            showTimeSelect
            dateFormat="Pp"
            locale={sv}
            minDate={new Date()}
            // minTime={
            //   selectedDate &&
            //   selectedDate.toDateString() === new Date().toDateString()
            //     ? new Date()
            //     : new Date().setHours(0, 0, 0, 0)
            // }
            // maxTime={new Date().setHours(23, 59, 0, 0)}
            required
          />
          <input
            type="hidden"
            name="time"
            value={
              selectedDate
                ? selectedDate.toLocaleString("sv-SE", {
                    timeZone: "Europe/Stockholm",
                  })
                : ""
            }
          />
          <label htmlFor="validation-5" className="form-label">
            Hur föredrar du att bli kontaktad?
          </label>
          <select
            className="form-select"
            id="validation-5"
            name="metod"
            required
          >
            <option value="" disabled selected>
              Välj...
            </option>
            <option>SMS</option>
            <option>E-post</option>
            <option>Samtal</option>
          </select>
          <label htmlFor="validation-6" className="form-label">
            Vad kan jag hjälpa dig med?
          </label>
          <textarea
            className="form-control"
            id="validation-6"
            name="msg"
            style={{ height: "90px" }}
            placeholder="Beskriv kort vad du behöver hjälp med eller vad du vill veta mer om..."
            required
          ></textarea>
          <div className="form-check">
            <input
              className="form-check-input"
              type="checkbox"
              value=""
              id="invalidCheck"
              required
            />
            <label className="form-check-label" htmlFor="invalidCheck">
              Jag samtycker till att mina uppgifter används för att ge
              personligt anpassat stöd.
            </label>
          </div>
          <button className="btn_main btn_link" type="submit">
            SKICKA
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default ContactForm;