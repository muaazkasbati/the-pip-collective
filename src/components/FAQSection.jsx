import { useState } from 'react';

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
    <section className="bg-black py-16 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <button className="bg-purple-600 text-white px-4 py-2 rounded-full mb-4 hover:bg-purple-700">
          FAQs
        </button>
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Frequently Asked Question
        </h2>
        <p className="text-gray-400 mb-8">
          Discover how leading businesses optimize performance, automate workflows, and achieve transformative growth with NexAI.
        </p>
        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq) => (
            <FAQItem key={faq.id} question={faq.question} answer={faq.answer} />
          ))}
        </div>
        <button className="bg-purple-600 text-white px-6 py-3 rounded-full hover:bg-purple-700 mt-8">
          Start Trading Smarter Now
        </button>
      </div>
    </section>
  );
}

function FAQItem({ question, answer }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="bg-gray-800/50 backdrop-blur-md rounded-lg shadow-lg border border-gray-700/50">
      <button
        className="w-full text-left p-4 flex justify-between items-center text-white hover:bg-gray-700/50 transition-colors duration-300"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-lg font-medium">{question}</span>
        <span>{isOpen ? '-' : '+'}</span>
      </button>
      <div
        className={`overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="p-4 text-gray-300">{answer}</p>
      </div>
    </div>
  );
}