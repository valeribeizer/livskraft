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
