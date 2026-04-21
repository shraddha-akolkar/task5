import { useState } from "react";
import "./Qna.css";
import Plus from "../../assets/svg/Plus";
import Minus from "../../assets/svg/Minus";
const faqs = [
  { q: "Who needs a neurologist?", 
    a: "Individuals with neurological symptoms such as chronic headaches, seizures, dizziness..." },

  { q: "How long does recovery take for neurological conditions?", 
    a: "Recovery varies widely by condition and individual..." },

  { q: "What conditions does neurology treat?", 
    a: "Neurology treats epilepsy, migraines, stroke..." },

  { q: "Can I continue normal activities during neurological treatment?", 
    a: "It depends on your diagnosis..." },

  { q: "When should I see a neurologist?", 
    a: "See a neurologist if you experience recurring headaches..." },

  { q: "Is there a cure for neurological disorders?", 
    a: "Some conditions are manageable..." },

  { q: "What is the process of a neurological evaluation?", 
    a: "Includes medical history + tests..." },

  { q: "What are the risks of not treating neurological conditions?", 
    a: "Conditions can worsen over time..." },

  { q: "How is neurological treatment administered?", 
    a: "Includes medication, therapy, surgery..." },
    
  { q: "What should I expect during a neurological appointment?", 
    a: "Expect full evaluation..." },

  { q: "What are common diagnostic tests in neurology?", 
    a: "MRI, CT, EEG, EMG..." },

  { q: "How can I manage stress related to neurological conditions?", 
    a: "Use mindfulness, therapy..." },

];

function FAQItem({ faq }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`faq-item ${open ? "open" : ""}`}>
      <button className="faq-question" onClick={() => setOpen(!open)}>
        <p>{faq.q}</p>
        <div className="faq-icon">  
          {open ? <Minus/> : <Plus />}
          </div>
      </button>

      <div className="faq-answer">
        {faq.a}
      </div>
    </div>
  );
}

export default function FAQAccordion() {
  const mid = Math.ceil(faqs.length / 2);
const leftFaqs = faqs.slice(0, mid);
const rightFaqs = faqs.slice(mid);
  return (
    <div className="faq section-space side-space">
      <h2 className="section-title text-center">
       Frequently Asked <span>Questions</span>
      </h2>
      <div className="faq-grid">

  <div>
    {leftFaqs.map((faq, i) => (
      <FAQItem key={i} faq={faq} />
    ))}
  </div>

  <div>
    {rightFaqs.map((faq, i) => (
      <FAQItem key={i} faq={faq} />
    ))}
  </div>

</div>
    </div>
  );
}