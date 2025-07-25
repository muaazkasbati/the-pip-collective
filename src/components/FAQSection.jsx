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

import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';


export default function FAQSection() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id='faqs' className="py-12 px-4 md:py-16" ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-7xl mx-auto text-center relative"
      >
        <div className="relative z-10">
          <div>
            <Button>Start Trading Smarter Now</Button>
          </div>

          <span className="px-4 py-2 rounded-full mt-8 mb-4 border border-white shadow shadow-white bg-[#A200F5]/10 text-[#A200F5] text-[16px] md:text-[18px] inline-block">
            FAQs
          </span>

          <h2 className="text-3xl md:text-[48px] text-white font-semibold mb-4 md:mb-6">
            Frequently Asked Questions
          </h2>

          <p className="text-[#898989] font-medium text-[16px] md:text-[20px] mb-8 max-w-3xl mx-auto">
            Discover how leading businesses optimize performance, automate workflows, and achieve transformative growth with NexAI.
          </p>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <FAQItem key={faq.id} question={faq.question} answer={faq.answer} index={index} />
            ))}
          </div>
        </div>
        <img src="/images/purple-shadow-bg-101.png" alt="" className='absolute top-42 md:-left-24 left-0' />
        <img src="/images/purple-shadow-bg-102.png" alt="" className='absolute top-28 md:-right-22 right-0' />
      </motion.div>
    </section>
  );
}

function FAQItem({ question, answer, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className={`rounded-xl border border-white/10 backdrop-blur-lg relative transition-colors ${isOpen ? "bg-white/5 backdrop-blur-sm" : ""}`}
    >
      <button
        className={`w-full text-left relative z-10 px-4 md:px-6 pt-4 md:pt-6 ${isOpen ? "pb-2" : "pb-4 md:pb-6"} flex justify-between items-center text-white cursor-pointer`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="text-[18px] md:text-[24px] font-normal">{question}</span>
        <span
          className="w-9 h-9 md:w-10 md:h-10 rounded-full border border-white/10 text-[15px] flex justify-center items-center"
          style={{ lineHeight: 0 }}
        >
          {isOpen ? (
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 12.3208H18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 12.3208H18" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 18.3208V6.3208" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </span>
      </button>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { height: 'auto', opacity: 1 },
              collapsed: { height: 0, opacity: 0 },
            }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden relative z-10"
          >
            <p className="px-4 md:px-6 pb-4 md:pb-6 text-[#898989] text-[16px] md:text-[18px] text-left">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
      {isOpen && <>
        <img src="/images/purple-shadow-bg-102.png" alt="" className='absolute top-0 md:left-16 left-2' />
        <img src="/images/faq-line-1.png" alt="" className='absolute top-0 md:left-36 left-4' />
        <img src="/images/faq-line-2.png" alt="" className='absolute bottom-0 md:right-36 right-4' />
      </>}
    </motion.div>
  );
}
