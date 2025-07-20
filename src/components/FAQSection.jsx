import { useState } from 'react';
import Button from './elements/Button';

const faqs = [
  {
    id: 1,
    question: "Can I change my subscription plan at any time?",
    answer: "Absolutely—you can upgrade or downgrade directly from your NexAI dashboard. Prorated billing ensures you only pay for what you use, and changes take effect immediately with no downtime.",
  },
  {
    id: 2,
    question: "Are custom integrations available?",
    answer: "Yes, we offer custom integrations tailored to your needs. Contact our support team for more details.",
  },
  {
    id: 3,
    question: "What onboarding support does NexAI provide?",
    answer: "We provide comprehensive onboarding support, including setup assistance and training sessions to get you started.",
  },
  {
    id: 4,
    question: "What are the earning options available?",
    answer: "NexAI offers multiple earning options, including performance-based earnings and subscription models. Check your dashboard for details.",
  },
];

export default function FAQSection() {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <div>
          <Button>Start Trading Smarter Now</Button>
        </div>
        <span className="px-6 py-2.5 rounded-[30px] mb-4 mt-8 border border-white shadow shadow-white bg-[#A200F5]/10 text-[#A200F5] text-[18px] inline-block">
          FAQs
        </span>
        <h2 className="text-4xl md:text-[48px] text-white mb-6">
          Frequently Asked Question
        </h2>
        <p className="text-[#898989] font-medium text-[20px] mb-8 max-w-3xl mx-auto">
          Discover how leading businesses optimize performance, automate workflows, and achieve transformative growth with NexAI.
        </p>
        <div className="space-y-4">
          {faqs.map((faq) => (
            <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`rounded-xl border border-white/10 relative ${isOpen ? "bg-white/2 backdrop-blur-lg" : ""}`}>
      <button
        className={`w-full text-left px-6 pt-6 ${isOpen ? "pb-2" : "pb-6"} flex justify-between items-center text-white cursor-pointer`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-[24px] font-normal">{question}</span>
        <span className="w-10 h-10 rounded-full border border-white/10 text-[15px] flex justify-center items-center" style={{ lineHeight: 0 }}>{isOpen ? <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 12.3208H18" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
          : <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 12.3208H18" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M12 18.3208V6.3208" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
        }</span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
          }`}
      >
        <p className="px-6 pb-6 text-[#898989] text-[18px] text-left">{answer}</p>
      </div>
    </div>
  );
}