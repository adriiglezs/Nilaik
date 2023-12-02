import style from "./Agenda.module.css";
import Agendab from "../../components/Agenda/Agendab.jsx";
import Axel from "../../assets/axel-min.jpeg";
import Jose from "../../assets/Jose.jpg";
import Alfredo from "../../assets/Alfredo.jpg";
import Wen from "../../assets/Wen.jpg";
import Diana from "../../assets/Diana.jpg";
import Hector from "../../assets/Hector.jpg";
import Mich from "../../assets/Mich.jpg";
import Monserrat from "../../assets/Contact.png";
import Valentin from "../../assets/Contact.png";
import Aurora from "../../assets/Aurora.jpg";


import React, { useState } from 'react';

function Agenda() {
  const [expandedCard, setExpandedCard] = useState(null);
  return (
    <>
      <div className={style.central}>
        <Agendab
          iconoContac={Axel}
          name="Name: Axel"
          expandedCard={expandedCard}
          setExpandedCard={setExpandedCard}
          phoneNumber="Phone number: 5521282553"
          marcame="5521282553"
          occupation="Occupation: inspector"
          email="Email: axelrosecooper@gmail.com "
          nationality="Nationality: Mexican"
          country="Country:  Mexico"
          address="Address: Pto Coatzacoalcos, Casas Aleman, CDMX"
        />
        <Agendab
          iconoContac={Alfredo}
          name="Name: Alfredo"
          expandedCard={expandedCard}
          setExpandedCard={setExpandedCard}
          phoneNumber="Phone number: 5537749704 "
          marcame="5537749704"
          occupation="Occupation: nuclear engineer"
          email="Email:  bluder400@gmail.com"
          nationality="Nationality: Mexican"
          country="Country: Mexico"
          address="Address: acueducto de Guadalupe, México city"
        />
        <Agendab
          iconoContac={Jose}
          name="Name:  José"
          expandedCard={expandedCard}
          setExpandedCard={setExpandedCard}
          phoneNumber="Phone number: 9381524460"
          marcame="9381524460"
          occupation="Occupation: Currently working at a company"
          email="Email: private"
          nationality="Nationality: British"
          country="Country: United Kingdom"
          address="Address: private"
        />
        <Agendab
          iconoContac={Wen}
          name="Name: Wendy"
          expandedCard={expandedCard}
          setExpandedCard={setExpandedCard}
          phoneNumber="Phone number: 7765388156"
          marcame="7765388156"
          occupation="Occupation: employee in a packaging factory and in a banquet"
          email="Email: gjueblu67@gmail.con "
          nationality="Nationality: Mexican"
          country="Country: Mexico"
          address="Address: Avenida de las palmas N. 25, San Juan Estado de México"
        />
        <Agendab
          iconoContac={Hector}
          name="Name: Hector"
          expandedCard={expandedCard}
          setExpandedCard={setExpandedCard}
          phoneNumber="Phone number: +52 7352014931"
          marcame="+52 7352014931"
          occupation="Occupation: aeronautical engineer and I usually do aeronautical stuffs"
          email="Email: hg3438773@gmail.com"
          nationality="Nationality: Mexican"
          country="Country:  Mexico"
          address="Address: Av Insurgentes 1149 colonia Miguel hidalgo"
        />
        <Agendab
          iconoContac={Aurora}
          name="Name: Aurora"
          expandedCard={expandedCard}
          setExpandedCard={setExpandedCard}
          phoneNumber="Phone number: 5581207792"
          marcame="5581207792"
          occupation="Occupation: home-office worker as an accountant assistant"
          email="Email: auroyariix@gmail.com"
          nationality="Nationality: Mexican"
          country="Country:  Mexico"
          address="Address: San Salvador Atenco, at 16 de Septiembre st."
        />
        <Agendab
          iconoContac={Mich}
          name="Name: Juan(Mich)"
          expandedCard={expandedCard}
          setExpandedCard={setExpandedCard}
          phoneNumber="Phone number: 5513513242"
          marcame="5513513242"
          occupation="Occupation: public servant"
          email="Email: scotty1500@amlo.com"
          nationality="Nationality: Mexican"
          country="Country: Mexico"
          address="Address: sn"
        />
        <Agendab
          iconoContac={Monserrat}
          name="Name: Celina Monserrat"
          expandedCard={expandedCard}
          setExpandedCard={setExpandedCard}
          phoneNumber="Phone number: 5574827980"
          marcame="5574827980"
          occupation="Occupation: nursing student"
          email="Email: monserratr139@glmail.com"
          nationality="Nationality: Mexican"
          country="Country: Mexico"
          address="Address: Stret Chapultepec #7 Ixtapaluca México"
        />
        <Agendab
          iconoContac={Diana}
          name="Name: Diana"
          expandedCard={expandedCard}
          setExpandedCard={setExpandedCard}
          phoneNumber="Phone number: 5565397862"
          marcame="5565397862"
          occupation="Occupation: backend developer at GS (Grupo Salinas)"
          email="Email: diana.randi1@gmail.com"
          nationality="Nationality: Mexican"
          country="Country: Mexico"
          address="Address: Vicente Guerrero Street, Luis Echeverría Colony, Cuautitlán Izcalli, Méx."
        />
        <Agendab
          iconoContac={Valentin}
          name="Name: Valentin"
          expandedCard={expandedCard}
          setExpandedCard={setExpandedCard}
          phoneNumber="Phone number: 2331113740"
          marcame="2331113740"
          occupation="Occupation: student"
          email="Email: vcode1104@gmail.com"
          nationality="Nationality: Mexican"
          country="Country:  Mexico"
          address="Address: Av. Escuadron 201 Ticoman"
        />

      </div>
    </>
  );
}
export default Agenda;