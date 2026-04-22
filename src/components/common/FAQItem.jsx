import { useState } from "react";
import Plus from "../../assets/svg/Plus";
import Minus from "../../assets/svg/Minus";

export default function FAQItem({ faq }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={`faq-item ${open ? "open" : ""}`}>
      <button className="faq-question" onClick={() => setOpen(!open)}>
        <p>{faq.q}</p>
        <div className="faq-icon">
          {open ? <Minus /> : <Plus />}
        </div>
      </button>

      <div className="faq-answer">{faq.a}</div>
    </div>
  );
}
