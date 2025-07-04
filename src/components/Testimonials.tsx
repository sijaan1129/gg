import React, { useState } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Marcus Chen",
    role: "Gaming Community Owner",
    server: "EliteGamers Discord",
    avatar: "MC",
    rating: 5,
    content: "NexuSec saved our 15k member gaming server from a massive raid. The bot detected the attack pattern and locked down the server in under a second. Absolutely incredible technology.",
    members: "15,000 members"
  },
  {
    id: 2,
    name: "Sarah Rodriguez",
    role: "Community Manager",
    server: "TechHub Community",
    avatar: "SR",
    rating: 5,
    content: "The AI automoderation is mind-blowing. It understands context and never makes false positives. Our moderation workload decreased by 90% since adding NexuSec.",
    members: "8,500 members"
  },
  {
    id: 3,
    name: "David Kim",
    role: "Server Administrator",
    server: "CryptoTraders United",
    avatar: "DK",
    rating: 5,
    content: "Best security investment we ever made. The silent monitoring caught several scammers before they could target our members. Worth every penny.",
    members: "12,000 members"
  },
  {
    id: 4,
    name: "Emily Watson",
    role: "Discord Moderator",
    server: "Art & Design Hub",
    avatar: "EW",
    rating: 5,
    content: "Setup took literally 2 minutes. The bot immediately started protecting our server and the dashboard gives us incredible insights into threats.",
    members: "6,200 members"
  }
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section id="reviews" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-yellow-500/20 border border-yellow-500/30 rounded-full text-yellow-400 text-sm font-semibold mb-6">
            <Star className="h-4 w-4" />
            5-Star Reviews
          </div>
          <h2 className="text-4xl lg:text-6xl font-black mb-6">
            <span className="text-white">Server Owners</span>
            <br />
            <span className="bg-gradient-to-r from-yellow-400 to-red-400 bg-clip-text text-transparent">Love NexuSec</span>
          </h2>
          <p className="text-xl text-gray-300">
            Real feedback from Discord communities protected by NexuSec
          </p>
        </div>

        <div className="relative">
          <div className="testimonial-card">
            {/* Quote Icon */}
            <div className="absolute -top-4 -left-4 w-12 h-12 bg-gradient-to-br from-blue-600 to-red-600 rounded-full flex items-center justify-center">
              <Quote className="h-6 w-6 text-white" />
            </div>

            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
              ))}
            </div>

            {/* Testimonial Content */}
            <blockquote className="text-xl lg:text-2xl text-white mb-8 leading-relaxed text-center">
              "{currentTestimonial.content}"
            </blockquote>

            {/* Author Info */}
            <div className="flex flex-col items-center gap-4">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-red-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {currentTestimonial.avatar}
                </div>
                <div className="text-center">
                  <div className="font-bold text-white text-lg">{currentTestimonial.name}</div>
                  <div className="text-gray-400">{currentTestimonial.role}</div>
                  <div className="text-blue-400 text-sm">{currentTestimonial.server}</div>
                </div>
              </div>
              
              <div className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg">
                <span className="text-gray-300 text-sm">{currentTestimonial.members}</span>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-center items-center gap-6 mt-8">
              <button
                onClick={prevTestimonial}
                className="nav-button"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-blue-400 scale-125' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="nav-button"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">40+</div>
            <div className="text-gray-400">Protected Servers</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">50k+</div>
            <div className="text-gray-400">Protected Members</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">99.9%</div>
            <div className="text-gray-400">Uptime</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-white mb-2">5.0★</div>
            <div className="text-gray-400">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;