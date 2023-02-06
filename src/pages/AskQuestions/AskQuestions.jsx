import style from "./AskQuestions.module.css";
import React, {useState} from "react";
import FAQ from '../../components/FAQS/Faqs';


export default function AskQuestions() {
    const [faqs, setfaqs] = useState([
      {
        question: "¿Loremo?",
        answer: "loremp inmpsum",
        open: true
      },
      {
        question: "¿Loremo?",
        answer: "loremp inmpsum",
        open: false
      },
      {
        question: "¿Loremo?",
        answer: "loremp inmpsum",
        open: false
      },
    ]);

    const toggleFAQ = index => (
      setfaqs(faqs.map((faq,i)=> {
        if (i=== index){
          faq.open =!faq.open
        } else {
          faq.open = false;
        }
        return faq;
      }))
    )
  
    return (
    <>
      <div className={style.FaqsContainer}>
        <h2 className={style.faqsH2}> Preguntas Frecuentes </h2>
        <div className={style.faqs}>
            {faqs.map((faq,i)=> (
                <FAQ faq={faq} index = {i} toggleFAQ = {toggleFAQ}/>
            ))}
        </div>
      </div>
    </>
  );
}
