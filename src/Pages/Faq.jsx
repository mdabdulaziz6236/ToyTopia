import React, { useState } from "react";
import { FaSearch, FaPlus, FaMinus, FaQuestionCircle } from "react-icons/fa";
import { Link } from "react-router";

const FAQ = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [openIndex, setOpenIndex] = useState(null);

  // FAQ Data (আপনার প্রয়োজন মতো পরিবর্তন করতে পারেন)
  const faqs = [
    {
      id: 1,
      category: "Shipping",
      question: "How long does delivery take?",
      answer:
        "Usually, delivery takes 3-5 business days within the city and 5-7 days for other regions. Express delivery is available upon request.",
    },
    {
      id: 2,
      category: "Returns",
      question: "What is your return policy?",
      answer:
        "We offer a 30-day return policy for unused toys in original packaging. If the toy is damaged, please contact us within 48 hours.",
    },
    {
      id: 3,
      category: "Payment",
      question: "Do you accept Cash on Delivery (COD)?",
      answer:
        "Yes! We accept Cash on Delivery, bKash, Nagad, and all major Credit/Debit cards.",
    },
    {
      id: 4,
      category: "Products",
      question: "Are the toys safe for toddlers?",
      answer:
        "Absolutely. All our toys are non-toxic, BPA-free, and meet international safety standards. Age recommendations are mentioned on every product page.",
    },
    {
      id: 5,
      category: "Orders",
      question: "Can I cancel my order after placing it?",
      answer:
        "You can cancel your order within 2 hours of placing it directly from your profile dashboard. After that, please contact support.",
    },
    {
      id: 6,
      category: "Account",
      question: "Do I need an account to place an order?",
      answer:
        "No, you can checkout as a guest. However, creating an account helps you track orders and get exclusive discounts.",
    },
  ];

  // Toggle Function
  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  // Filter Logic based on Search
  const filteredFAQs = faqs.filter((faq) =>
    faq.question.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 md:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-pink-600 font-bold uppercase tracking-wider text-sm">
            Help Center
          </h2>
          <h1 className="text-3xl md:text-5xl font-extrabold text-gray-800">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-linear-to-r from-pink-500 to-purple-600">
              Questions
            </span>
          </h1>
          <p className="text-gray-500 max-w-lg mx-auto">
            Have questions? We're here to help. Find answers to the most common
            questions about ToyTopia below.
          </p>

          {/* Search Bar */}
          <div className="relative max-w-lg mx-auto mt-6">
            <input
              type="text"
              placeholder="Search for a question..."
              className="input input-bordered w-full pl-12 py-6 rounded-full shadow-sm focus:outline-none focus:border-pink-500 focus:ring-2 focus:ring-pink-200 transition-all"
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <FaSearch className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => (
              <div
                key={faq.id}
                className={`collapse collapse-plus bg-white rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 ${
                  openIndex === index ? "border-l-4 border-l-pink-500" : ""
                }`}
              >
                <input
                  type="radio"
                  name="my-accordion-3"
                  checked={openIndex === index}
                  onChange={() => toggleFAQ(index)}
                />

                <div className="collapse-title text-lg md:text-xl font-semibold text-gray-700 flex items-center gap-3 py-6">
                  <span className="bg-pink-100 text-pink-600 text-xs px-2 py-1 rounded uppercase font-bold hidden md:block">
                    {faq.category}
                  </span>
                  {faq.question}
                </div>

                <div className="collapse-content text-gray-600">
                  <p className="pb-4 leading-relaxed border-t pt-4 border-gray-100">
                    {faq.answer}
                  </p>
                </div>
              </div>
            ))
          ) : (
            // No Results Found State
            <div className="text-center py-10">
              <div className="text-6xl mb-4">🤔</div>
              <h3 className="text-xl font-bold text-gray-600">
                No results found
              </h3>
              <p className="text-gray-500">
                Try searching with different keywords.
              </p>
            </div>
          )}
        </div>

        {/* Contact Support Section */}
        <div className="mt-16 bg-linear-to-r from-purple-600 to-pink-500 rounded-3xl p-8 md:p-12 text-center text-white shadow-xl relative overflow-hidden">
          {/* Decorative Circles */}
          <div className="absolute top-0 left-0 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute bottom-0 right-0 w-40 h-40 bg-yellow-300 opacity-20 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>

          <div className="relative z-10">
            <FaQuestionCircle className="text-5xl mx-auto mb-4 text-yellow-300 opacity-90" />
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Still have questions?
            </h2>
            <p className="mb-8 text-white/90">
              Can’t find the answer you’re looking for? Please chat to our
              friendly team.
            </p>
            <Link to={"/contact"}>
              <button className="btn btn-wide bg-white text-pink-600 border-none hover:bg-yellow-300 hover:text-black font-bold rounded-full transition-transform transform hover:scale-105">
                Contact Support
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
