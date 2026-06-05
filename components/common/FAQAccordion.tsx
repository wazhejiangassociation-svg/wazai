import { ChevronDown } from "lucide-react";

import { BilingualText } from "@/components/common/BilingualText";
import { ScrollReveal } from "@/components/common/ScrollReveal";

type Item = {
  questionEn: string;
  questionZh: string;
  answerEn: string;
  answerZh: string;
};

export function FAQAccordion({ items }: { items: Item[] }) {
  return (
    <div className="editorial-accordion">
      {items.map((item, index) => (
        <ScrollReveal key={item.questionEn} delay={index * 70}>
          <details className="editorial-accordion-item">
            <summary className="editorial-accordion-summary">
              <span className="editorial-accordion-question">
                <BilingualText en={item.questionEn} zh={item.questionZh} />
              </span>
              <ChevronDown size={18} aria-hidden="true" />
            </summary>

            <div className="editorial-accordion-panel">
              <div className="editorial-accordion-panel-inner">
                <p className="editorial-accordion-answer">
                  <BilingualText en={item.answerEn} zh={item.answerZh} />
                </p>
              </div>
            </div>
          </details>
        </ScrollReveal>
      ))}
    </div>
  );
}
