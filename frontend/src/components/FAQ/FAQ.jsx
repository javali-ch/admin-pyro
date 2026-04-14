import { useState } from 'react';
import './FAQ.css';

const faqs = [
  {
    question: 'What services do you offer?',
    answer: 'We offer growth services (we like to comprehensively call them "solutions"), which cover both strategy and execution. Strategy involves getting a deep understanding of your business (and its bottlenecks) through our PyroStack framework. Execution involves everything needed to implement the strategy; including UI/UX design, brand identity, web development, content design, social media management, AI creatives, workflows and automations.'
  },
  {
    question: 'Why PyroSynergy, when other agencies exist?',
    answer: 'Most agencies skip the strategy and sell you execution. We understand the need for empathy, especially when you\'re early-stage. PyroSynergy identifies and helps 0-to-traction businesses building a solid, market-viable product who needs growth strategies & execution.'
  },
  {
    question: 'How does the pricing work?',
    answer: 'Every project is a custom solution, scoped and priced based on what\'s actually needed. Once we understand your goals and where you are, we put together a clear proposal.'
  },
  {
    question: 'What kind of founders does PyroSynergy work with?',
    answer: 'Typically early-stage founders who\'ve pushed their product to the real world and are receiving any form of market validation; be it recognition, revenue, or both.'
  },
  {
    question: 'How does a typical engagement work?',
    answer: 'We start with a series of discovery calls and questions to understand your product, goals, and bottlenecks. This is followed by a strategy call, where we define the scope, deliverables, and timeline required to grow your business. Upon agreement, we jump right into building and execution.'
  }
];

const FAQ = ({ openCalendarPopup }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      {/* Decorative blurs */}
      <div className="faq-blur faq-blur-1"></div>
      <div className="faq-blur faq-blur-2"></div>

      <div className="faq-container">
        <div className="faq-left">
          <div className="faq-left-inner">
            <h2 className="faq-title">FAQs</h2>
            <p className="faq-subtitle">
              Clear answers to help you understand how we work, what to expect, and whether this is the right fit for you.
            </p>
            <div className="faq-cta-box">
              <p className="faq-cta-heading">Still have questions?</p>
              <p className="faq-cta-desc">Our experts are ready to guide you through the transition.</p>
              <button className="faq-cta-button" onClick={openCalendarPopup}>
                Book a FREE discovery call
              </button>
            </div>
          </div>
        </div>

        <div className="faq-right">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? 'faq-item-open' : ''}`}
            >
              <button className="faq-question" onClick={() => toggle(index)}>
                <span className="faq-question-text">{faq.question}</span>
                <span className="faq-icon">
                  <span className="faq-icon-symbol">{openIndex === index ? '−' : '+'}</span>
                </span>
              </button>
              <div className="faq-answer-wrapper">
                <p className="faq-answer">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
