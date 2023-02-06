import style from "./AskQuestions.module.css";
import React, {useState} from "react";
import FAQ from '../../components/FAQS/Faqs';
import Footer from '../../components/Footer/Footer'


export default function AskQuestions() {
    const [faqs, setfaqs] = useState([
      {
        question: "¿Cuál es el costo de envío?",
        answer: "loremp inmpsum",
        open: true
      },
      {
        question: "¿Cuánto tardará la entrega en realizarse?",
        answer: "loremp inmpsum",
        open: false,
      },
      {
        question: "¿Cómo sabré que se ha confirmado mi pedido?",
        answer: "loremp inmpsum",
        open: false,
      },
      {
        question: "¿Qué pasa si no estoy en casa cuando se entrega mi pedido?",
        answer: "loremp inmpsum",
        open: false,
      },
      {
        question: "¿Qué tipos de pago se aceptan?",
        answer: "loremp inmpsum",
        open: false,
      },
      {
        question: "¿Cómo verifico el estado de mi pedido?",
        answer: "loremp inmpsum",
        open: false,
      },
      {
        question: "¿Puedo cambiar o cancelar mi pedido una vez confirmado?",
        answer: "loremp inmpsum",
        open: false,
      },
      {
        question: "¿Cómo devuelvo o cambio un artículo?",
        answer: "loremp inmpsum",
        open: false,
      },
    ]);

    const toggleFAQ = index => {
      setfaqs(faqs.map((faq,i)=> {
        if (i=== index){
          faq.open =!faq.open
        } else {
          faq.open = false;
        }
        return faq;
      }))
    }
  
    return (
      <>
        <div className={style.FaqsContainer}>
          <h2 className={style.faqsH2}> Preguntas Frecuentes </h2> {/*Header */}
          <div className={style.faqs}>
            {faqs.map((faq, i) => (
              <FAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
            ))}
          </div>
        </div>
        <Footer styleFoo={style.foo} />
      </>
    );
}
