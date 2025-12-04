import React from "react";
import { Award, Users, Heart, Gift } from "lucide-react";

const About = () => {
  return (
    <div className="bg-gray-50 max-w-11/12 mx-auto min-h-screen font-sans">
      {/* Hero Section */}
      <div className="relative bg-linear-to-r from-pink-400 to-purple-600 text-white py-20 px-5 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Bringing Joy to Every Child
        </h1>
        <p className="text-lg md:text-xl text-pink-100 max-w-2xl mx-auto">
          ToyTopia is more than just a store; it's a world of imagination,
          creativity, and endless fun.
        </p>
      </div>

      {/* Stats / Features */}
      <div className="max-w-7xl mx-auto  px-5 py-16 -mt-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            {
              label: "Happy Customers",
              value: "50k+",
              icon: <Heart className="text-pink-500" />,
            },
            {
              label: "Unique Toys",
              value: "1200+",
              icon: <Gift className="text-purple-500" />,
            },
            {
              label: "Years Experience",
              value: "10+",
              icon: <Award className="text-yellow-500" />,
            },
            {
              label: "Team Members",
              value: "100+",
              icon: <Users className="text-blue-500" />,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-lg text-center hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex justify-center mb-4 bg-gray-50 w-16 h-16 mx-auto items-center rounded-full shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-3xl font-bold text-gray-800">{item.value}</h3>
              <p className="text-gray-500 font-medium">{item.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Story Section */}
      <div className="max-w-7xl mx-auto px-5 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <img
            src="https://images.unsplash.com/photo-1596461404969-9ae70f2830c1?q=80&w=1000"
            alt="Toy Store"
            className="rounded-3xl shadow-2xl w-full object-cover h-[400px]"
          />
        </div>
        <div>
          <h4 className="text-pink-600 font-bold uppercase tracking-wide mb-2">
            Our Story
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Built on Passion & Play
          </h2>
          <p className="text-gray-600 leading-relaxed mb-4">
            Started in 2020, our mission was simple: to create toys that are not
            just fun, but also tools for learning. We believe that play is the
            highest form of research.
          </p>
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-bold shadow-lg transition-all">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
