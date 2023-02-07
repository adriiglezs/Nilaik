import React from "react";
import style from "../../pages/AskQuestions/AskQuestions.module.css"

export default function FAQ ({faq,index,toggleFAQ}) {
return (
  <div 
    className={style.faq + (faq.open ? 'open' : '')} 
    key={index}
    onClick ={()=>toggleFAQ(index)}
  >

    <div className={style.question}>
        {faq.question}
    </div>

    <div className={style.answer}>
        {faq.answer}
    </div>
  </div>
);

}