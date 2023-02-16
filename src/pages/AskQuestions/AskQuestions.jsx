import style from "./AskQuestions.module.css";
import React, { useState } from "react";
import data from "../../components/FAQS/data";
import SingleQuestion from "../../components/FAQS/Question";
import Footer from '../../components/Footer/Footer'

const AskQuestions = () => {
  const [questions, setQuestions] = useState(data);

  return (
    <div>
      <main>
        <div className={style.container}>
          <h3>Preguntas frecuentes</h3>
          <section className={style.info}>
            {questions.map((question) => (
              <SingleQuestion key={question.id} {...question} />
            ))}
          </section>
        </div>
      </main>
      <Footer styleFoo={style.foo} />
    </div>
  );
};

export default AskQuestions;