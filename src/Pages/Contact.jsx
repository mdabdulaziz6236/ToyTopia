import React from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white py-12 px-5">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
            Get in Touch
          </h1>
          <p className="text-gray-500">
            Have questions? We'd love to hear from you.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Info Cards */}
          <div className="space-y-6">
            <div className="bg-pink-50 p-6 rounded-2xl border border-pink-100">
              <Phone className="text-pink-600 mb-3" size={28} />
              <h3 className="font-bold text-lg">Call Us</h3>
              <p className="text-gray-600">+880 1234-567890</p>
            </div>
            <div className="bg-purple-50 p-6 rounded-2xl border border-purple-100">
              <Mail className="text-purple-600 mb-3" size={28} />
              <h3 className="font-bold text-lg">Email Us</h3>
              <p className="text-gray-600">support@toytopia.com</p>
            </div>
            <div className="bg-blue-50 p-6 rounded-2xl border border-blue-100">
              <MapPin className="text-blue-600 mb-3" size={28} />
              <h3 className="font-bold text-lg">Visit Us</h3>
              <p className="text-gray-600">123 Toy Street, Dhaka</p>
            </div>
          </div>

          {/* Form */}
          <div className="md:col-span-2 bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none"
                    placeholder="email@example.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  className="w-full px-4 py-3 rounded-lg bg-gray-50 border border-gray-200 focus:border-pink-500 focus:ring-1 focus:ring-pink-500 outline-none h-32"
                  placeholder="How can we help?"
                ></textarea>
              </div>
              <div className="flex justify-center items-center">
                <button className="w-[50%] bg-pink-500 hover:bg-pink-600 text-white font-bold py-3 rounded-xl transition-all flex items-center justify-center gap-2">
                  Send Message <Send size={18} />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
