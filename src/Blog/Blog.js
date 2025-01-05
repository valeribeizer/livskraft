import React from "react";
import NavBar from "../NavBar/NavBar";
import "./style.css";
import Footer from "../Footer/Footer";

const Blog = () => {
  const blog =
    "Har du någonsin undrat vad vi apotekare egentligen gör bakom disken? För många känns det kanske som att vi bara hämtar din medicin och lämnar ut den. Men sanningen är att det händer mycket mer än så – och det vi gör är ofta livsviktigt för din hälsa.\n\nVi är läkemedelsexperter som har utbildat oss i 5 år för att förstå både medicinernas kraft och deras risker. Vårt jobb är att granska ditt recept, säkerställa att du får rätt medicin, och att guida dig så att du kan använda den på ett tryggt och effektivt sätt.\n\nDet här tar tid – och det syns inte alltid utåt. Men varje gång vi försvinner bakom väggen, jobbar vi för din säkerhet.\n\nDet här är första delen i en serie där jag lyfter fram apotekarens roll och vad vi faktiskt gör för att hjälpa dig.\n\nSå vad gör vi apotekare bakom kulisserna?\n\n1️⃣ Vi granskar ditt recept noggrant Innan du får din medicin kontrollerar vi allt: Är dosen rätt? Finns det risk för att mediciner krockar? Vi följer alltid strikta regler för din säkerhet – det här tar tid, men det är livsviktigt.\n\n2️⃣ Vi hjälper dig använda läkemedlet rätt Hur och när ska du ta medicinen? Vad ska du tänka på för att undvika biverkningar? Vi finns här för att guida dig, och inga frågor är för små!\n\n3️⃣ Vi löser problem bakom disken Om medicinen är slut, receptet är otydligt eller det behövs alternativ – då kontaktar vi läkare eller hittar en snabb lösning.\n\n4️⃣ Vi är en del av vårdkedjan Från vaccinationer till livsstilsråd – vi är mycket mer än “de som står i kassan”.\n\nApoteket är inte en mataffär\n\nVi hanterar läkemedel som kan rädda liv, men fel hantering kan vara farlig. Därför är vår utbildning 5 år lång – och det är också därför vi tar tid att göra allt rätt.\n\nNästa gång pratar vi om varför tidsbrist och press ibland påverkarservicen.\n\n💬 Vad vill du veta mer om? Kommentera och följ mig på instagram @livskraft.eu för att vara först att veta när nästa del kommer!";

  return (
    <div>
      <NavBar />
      <div className="blog-container">
        <h1>BLOGG</h1>
        {window.innerWidth > 1024 ? (
          <div className="row" style={{ alignItems: "center" }}>
            <div className="col-6" style={{ textAlign: "start" }}>
              <h3>
                Apotekarens roll <br />
                Del 1
              </h3>
              <p className="p-blog">{blog}</p>
            </div>

            <div className="col-3">
              <img
                className="img-blog"
                src="blog-img-1.png"
                alt="blog-img-1"
                loading="lazy"
              />
              <img
                className="img-blog second"
                src="blog-img-2.png"
                alt="blog-img-2"
                loading="lazy"
              />
            </div>
            <div className="col-3">
              <img
                className="img-blog"
                src="blog-img-3.png"
                alt="blog-img-3"
                loading="lazy"
              />
            </div>
          </div>
        ) : (
          <>
            <div className="row">
              <h3>
                Apotekarens roll <br />
                Del 1
              </h3>
              <p className="p-blog">{blog}</p>
            </div>
            <div className="row" style={{ alignItems: "center" }}>
              <div className="col-6" style={{ textAlign: "end" }}>
                <img
                  className="img-blog"
                  src="blog-img-1.png"
                  alt="blog-img-1"
                  loading="lazy"
                />
                <img
                  className="img-blog second"
                  src="blog-img-2.png"
                  alt="blog-img-2"
                  loading="lazy"
                />
              </div>
              <div className="col-6" style={{ textAlign: "start" }}>
                <img
                  className="img-blog"
                  src="blog-img-3.png"
                  alt="blog-img-3"
                  loading="lazy"
                />
              </div>
            </div>
          </>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Blog;
