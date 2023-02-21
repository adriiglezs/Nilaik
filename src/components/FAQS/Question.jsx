import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import style from '../../pages/AskQuestions/AskQuestions.module.css'

const Question = ({ question,answer }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className={style.question}>
      <header>
        <h4 onClick={() => setExpanded(!expanded)} className={style.questionTitle}>
          {question}
        </h4>
        <button className={style.btn} onClick={() => setExpanded(!expanded)}>
          {expanded ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {expanded && <p>{answer}</p>}
    </article>
  );
};

export default Question;
