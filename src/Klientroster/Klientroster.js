import React from "react";
import Slider from "react-slick";
import "./style.css";

const Klientroster = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const feedbacks = [
    {
      text: '“Jäklar så kompetent du är! Du gör precis som man ska göra. Om vårdpersonalen hade tid att göra det du gör, skulle alla patienter må så mycket bättre – även de svårt sjuka. För allt handlar om trygghet. Och trygghet har en avgörande betydelse för läkning. Tack för att du gör detta!"',
      name: "Ayşegül",
      key: 0,
    },
    {
      text: "“Det har varit väldigt givande. Jag hade inte haft ork eller tid att ta reda på allt det jag fick från dig – det var ovärderligt.”",
      name: "Ayşegül",
      key: 1,
    },
    {
      text: '"Jag trodde inte ens att det var möjligt att bli helt utan min medicin… men det gick. Det var fantastiskt!"',
      name: "Ayşegül",
      key: 2,
    },
    {
      text: '"Eunice är oerhört kunnig och ger en information om ens läkemedel som är svår att få ur vanliga apotekare och läkare. Jag fick råd och många väl användbara tips kring hur jag kunde tänka på bland annat min kost för att jag skulle må så bra som möjligt under den långa antibiotikabehandling jag genomgick. Hon var även ett stort stöd i min kontakt med vården och hjälpte mig med vad jag kunde göra för att få så mycket kontroll som möjligt över min behandling. Eunice tar sig tid att ordentligt sätta sig in i ens situation, och bemöter en med en enorm värme och ett engagemang. När den medicinska vården brister är Eunice ett avgörande bollplank och rådgivare. Jag rekommenderar starkt!"',
      name: "Fiona",
      key: 3,
    },
    {
      text: '"Livskraft har med sin genuina nyfikenhet inspirerat mig i min egen utveckling och med sin värme och kunskap stöttat mig i motgång med den medicinska vården. Den kompetens som Livskraft besitter är idag unik och särskilt viktig där det finns behov av någon med ett holistiskt synsätt. Jag kan inte nog rekommendera Livskraft för dig som vill få mer av det!"',
      name: "Maria",
      key: 4,
    },
    {
      text: '"Eunice tog sig verkligen tid för att kartlägga och förstå mina behov, och var sedan väldigt mån om att följa upp och komma med ytterligare tips för att stötta min hälsoresa. Jag har fått en ökad förståelse för det jag sökte hjälp för och det märks att Eunice brinner för det hon håller på med. Kan varmt rekommendera Livskraft!"',
      name: "Alok",
      key: 5,
    },
    {
      text: '"Livskraft har vid flera tillfällen gett mig värdefull information om läkemedel och rådgivning vid vägval där mina läkare visat sig vara relativt okunniga, exempelvis när en läkare kraftfullt rådde mig att börja ta en astmamedicin jag klarat mig utan i flera år, sökte och fick råd av livskraft och valde att lita på det, vilket jag är väldigt glad för idag. Även fått hjälp att hitta rätt sko till mina fötter, lite random men det har hjälpt mig otroligt mycket i vardagen!"',
      name: "Ben",
      key: 6,
    },
  ];

  return (
    <div className="klientroster-container">
      <h1>KLIENTRÖSTER</h1>
      <Slider {...settings}>
        {feedbacks.map(({ text, name, key }, index) => (
          <div key={index}>
            <p className="p-klientroster">{text}</p>
            <h2 className="h2-klientroster">{name}</h2>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Klientroster;
