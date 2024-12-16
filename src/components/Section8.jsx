import React, { useState } from "react";

const Section8 = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    { 
      question: "What do I earn by selling my content on Stuvia?", 
      answer: "You earn money for each sale made on Stuvia. The more you sell, the more you earn!" 
    },
    { 
      question: "What does it cost to sell on Stuvia?", 
      answer: "Stuvia charges a small fee per transaction, and you keep the majority of your earnings." 
    },
    { 
      question: "When will I receive my earned money from Stuvia?", 
      answer: "Your earnings will be paid to your account within a specified payout period, typically a few days." 
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#f6fcff] py-10 px-12 md:px-10 border-t-[#d1ebfb] border-b-[#d1ebfb] border-2">
      <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">
        Frequently asked questions
      </h2>
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-md shadow-sm bg-white"
          >
            {/* Question */}
            <button
              className="w-full flex justify-between items-center p-5 text-left focus:outline-none"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-blue-500 font-medium text-lg">
                {faq.question}
              </span>
              <span className="text-blue-500 text-2xl">
                {openIndex === index ? "−" : "+"}
              </span>
            </button>
            {/* Answer */}
            {openIndex === index && (
              <div className="p-5 pt-0 text-gray-600">
                <p>{faq.answer}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center my-20">
    <div>
                <button className='bg-[#22c5b6] py-4 px-8 rounded-[30px] text-[1.2em] font-medium text-white'>Start Selling</button>
            </div>
    </div>
    </div>
  );
};

export default Section8;
