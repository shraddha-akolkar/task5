import { useState } from "react";
import "./Qna.css";
import Plus from "../../assets/svg/Plus";
import Minus from "../../assets/svg/Minus";
const faqs = [
  { q: "Who needs a neurologist?", 
    a: "Individuals with neurological symptoms such as chronic headaches, seizures, dizziness, numbness, weakness, memory issues, or movement disorders may need a neurologist." },

  { q: "How long does recovery take for neurological conditions?", 
    a: "Recovery varies widely by condition and individual..." },

  { q: "What conditions does neurology treat?", 
    a: "Neurology treats conditions like strokes, epilepsy, Alzheimer's disease, Parkinson's disease, multiple sclerosis, migraines, and neuropathy" },

  { q: "Can I continue normal activities during neurological treatment?", 
    a: "You may be able to maintain normal activities depending on the severity of the condition and the treatment plan. Your neurologist will advise on activity restrictions." },

  { q: "When should I see a neurologist?", 
    a: "Consult a neurologist if you experience persistent or severe neurological symptoms like sudden weakness, vision changes, speech difficulties, or unexplained pain." },

  { q: "Is there a cure for neurological disorders?", 
    a: "A neurologist diagnoses the condition, recommends treatment plans, prescribes medications, and provides ongoing care and monitoring for chronic conditions." },

  { q: "What is the process of a neurological evaluation?", 
    a: "A neurological evaluation includes a detailed medical history, physical exam, diagnostic tests like MRIs or EEGs, and possibly laboratory tests to diagnose the condition." },

  { q: "What are the risks of not treating neurological conditions?", 
    a: "Without treatment, many neurological disorders can worsen, leading to permanent disability, cognitive decline, or life-threatening complications." },

  { q: "How is neurological treatment administered?", 
    a: "Treatment may involve medications, physical therapy, lifestyle changes, or, in some cases, surgical interventions depending on the condition." },
    
  { q: "What should I expect during a neurological appointment?", 
    a: "Expect a thorough review of your medical history, a physical and neurological exam, and possibly tests to assess brain function, nerve health, or imaging." },

  { q: "What are common diagnostic tests in neurology?", 
    a: "Common tests include MRI (Magnetic Resonance Imaging), CT scan (Computed Tomography), EEG (Electroencephalogram), and lumbar puncture." },

  { q: "How can I manage stress related to neurological conditions?", 
    a: "Stress management techniques like mindfulness, relaxation exercises, regular physical activity, and counselling can help reduce stress and improve overall well-being." },

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
    <section className="faq section-space side-space">
      <div >

        <h2 className="section-title text-center mb-4">
          Frequently Asked <span>Questions</span>
        </h2>

        <div className="faq-grid">

          <div className="faq-col">
            {leftFaqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} />
            ))}
          </div>

          <div className="faq-col">
            {rightFaqs.map((faq, i) => (
              <FAQItem key={i} faq={faq} />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}