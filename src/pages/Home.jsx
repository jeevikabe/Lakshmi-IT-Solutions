import React, { useEffect, useState } from 'react';
import { Phone, MessageSquare, Linkedin, Twitter, Github, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Triggers the sleek entry animation sequence on component load
    setIsVisible(true);
  }, []);

  return (
    <div className="w-full min-h-screen bg-slate-50">
      {/* Animated Hero Section */}
      <section className="relative flex items-center justify-center py-20 md:py-32 px-4 bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.1),transparent_50%)]" />
        
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block bg-blue-500/10 text-blue-400 border border-blue-500/20 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider uppercase mb-6 backdrop-blur-sm">
            Next-Gen Digital Architecture
          </span>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-slate-200 to-blue-200">
            Architecting Scalable Engineering Solutions
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl mx-auto mb-10 px-2 leading-relaxed">
            We build performant applications, optimize critical cloud systems, and deliver cutting-edge technical design custom tailored for industry leaders.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 px-4">
            <Link to="/contact" className="w-full sm:w-auto bg-blue-600 hover:bg-blue-500 text-white px-8 py-4 rounded-xl font-medium shadow-lg shadow-blue-600/20 transition-all duration-200 flex items-center justify-center gap-2 group">
              Start Project Development
              <ArrowRight size={18} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/services" className="w-full sm:w-auto bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-slate-200 px-8 py-4 rounded-xl font-medium transition-colors duration-200 flex items-center justify-center">
              Explore Services
            </Link>
          </div>
        </div>
      </section>

      {/* Professional Connection & Communication Architecture */}
      <section className="max-w-6xl mx-auto py-16 px-4 -mt-10 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
{/* Direct Hot Line Card */}
    <a href="tel:+917892780318" className="flex items-start gap-4 p-6 bg-white border border-slate-100 shadow-xl shadow-slate-200/50 rounded-2xl hover:border-blue-500/30 transition-all duration-300 group">
      <div className="p-3 bg-blue-50 text-blue-600 rounded-xl group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
        <Phone size={24} />
      </div>
      <div>
        <h3 className="font-bold text-slate-900 mb-1">Direct Consulting Hot Line</h3>
        <p className="text-sm text-slate-500 mb-2">Available Mon - Fri, 9am - 6pm</p>
        <span className="text-sm font-semibold text-blue-600 group-hover:underline">+91 78927 80318</span>
      </div>
    </a>

    {/* Instant WhatsApp Gateway Card */}
    <a href="https://wa.me/917892780318?text=Hi%20Jetwave%2C%20I'd%20like%20to%20schedule%20an%20architectural%20consultation." target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 p-6 bg-white border border-slate-100 shadow-xl shadow-slate-200/50 rounded-2xl hover:border-emerald-500/30 transition-all duration-300 group">
      <div className="p-3 bg-emerald-50 text-emerald-600 rounded-xl group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300">
        <MessageSquare size={24} />
      </div>
      <div>
        <h3 className="font-bold text-slate-900 mb-1">Instant WhatsApp Business</h3>
        <p className="text-sm text-slate-500 mb-2">Rapid chat response pipeline</p>
        <span className="text-sm font-semibold text-emerald-600 group-hover:underline">Chat with Operations →</span>
      </div>
    </a>

          {/* Corporate Network Hub Card */}
          <div className="flex flex-col justify-between p-6 bg-white border border-slate-100 shadow-xl shadow-slate-200/50 rounded-2xl">
            <div>
              <h3 className="font-bold text-slate-900 mb-1">Corporate Networks</h3>
              <p className="text-sm text-slate-500 mb-4">Follow our operational infrastructure updates.</p>
            </div>
            <div className="flex items-center gap-3">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-50 hover:bg-blue-50 text-slate-600 hover:text-blue-600 rounded-xl border border-slate-100 transition-all duration-200 flex-1 flex justify-center">
                <Linkedin size={20} />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-50 hover:bg-sky-50 text-slate-600 hover:text-sky-400 rounded-xl border border-slate-100 transition-all duration-200 flex-1 flex justify-center">
                <Twitter size={20} />
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-3 bg-slate-50 hover:bg-slate-900 text-slate-600 hover:text-white rounded-xl border border-slate-100 transition-all duration-200 flex-1 flex justify-center">
                <Github size={20} />
              </a>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
}