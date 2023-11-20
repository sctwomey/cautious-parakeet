import React, { useState } from 'react';

const FAQPage = () => {
  // State to track the visibility of answers
  const [answersVisible, setAnswersVisible] = useState({});

  // Sample FAQ data
  const faqData = [
    { id: 1, question: 'What genres of vinyl records does Retro Rewind offer?', answer: 'Retro Rewind proudly offers a diverse range of genres, including classic rock, jazz, hip-hop, indie, and more. Our curated collection caters to all music enthusiasts.' },
    { id: 2, question: 'Do you have a physical store, or is Retro Rewind exclusively online?', answer: 'Retro Rewind is an exclusively online vinyl record store. You can browse, order, and enjoy our extensive collection from the comfort of your home.' },
    { id: 3, question: 'Does Retro Rewind offer international shipping?', answer: 'Absolutely! Retro Rewind provides international shipping to bring the joy of vinyl records to music lovers around the world.' },
    { id: 4, question: 'Do you offer gift cards for purchase?', answer: 'Yes, we do! Surprise your loved ones with the gift of music by purchasing Retro Rewind gift cards. It is the perfect way to share the joy of vinyl records.' },
    { id: 5, question: 'How often is the online catalog updated with new releases?', answer: 'Our online catalog is regularly updated with exciting new releases. Be sure to check back frequently to discover the latest additions to our vinyl collection.' },
    { id: 6, question: 'Are the vinyl records new or used?', answer: 'At Retro Rewind, we offer a mix of new and carefully curated used vinyl records. Each used record is inspected to ensure quality, and our new releases are sourced from reputable distributors.' },
    { id: 7, question: 'Can I request a specific vinyl record that is not currently listed on the website?', answer: 'Of course! We value your requests. If there is a specific vinyl record you are looking for and it is not in our current catalog, feel free to reach out to us. We will do our best to fulfill your request and expand our collection.' },
    // Add more FAQ items as needed
  ];

  // Toggle answer visibility
  const toggleAnswer = (id) => {
    setAnswersVisible((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="faq-page">
      <h2 className="faq-header">FAQs</h2>

      <ul className="faq-list">
        {faqData.map((faqItem) => (
          <li key={faqItem.id} className="faq-item">
            <button
              className="faq-button"
              onClick={() => toggleAnswer(faqItem.id)}
            >
              {faqItem.question}
            </button>

            <div
              className={`faq-answer ${
                answersVisible[faqItem.id] ? 'show' : ''
              }`}
            >
              {faqItem.answer}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FAQPage;