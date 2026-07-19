import React from 'react';
import { Link } from 'react-router-dom';
import { Cloud, Smartphone, Code, Layers, ShieldAlert, Kanban } from 'lucide-react';

const offering = [
  { icon: <Code />, title: 'Custom Software Systems', description: 'Engineered web platforms built with React, Node, and specialized database engines tailored for enterprise performance.' },
  { icon: <Cloud />, title: 'Cloud Automation & DevOps', description: 'Zero-downtime server migrations, CI/CD automated test integrations, and automated horizontal cluster scaling.' },
  { icon: <Smartphone />, title: 'Native Mobile Engineering', description: 'Highly optimized applications mapped beautifully across iOS and Android device ecosystems.' },
  { icon: <Layers />, title: 'API & Legacy System Sync', description: 'Consolidating detached business databases into real-time transactional systems securely.' },
  { icon: <ShieldAlert />, title: 'Cybersecurity Architectures', description: 'Penetration screening, system stress testing, and real-time network anomaly defense configuration.' },
  { icon: <Kanban />, title: 'Agile Product Consulting', description: 'Providing clear workflow architectures, technology selections, and dedicated scaling roadmaps.' }
];

export default function Services() {
  return (
    <div className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-4xl font-black tracking-tight text-slate-950">Enterprise Technical Services</h1>
        <p className="text-slate-600 mt-4 text-lg">
          Lakshmi IT Solutions delivers production-grade consulting and execution assets mapped to contemporary performance benchmarks.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {offering.map((service, index) => (
          <div key={index} className="bg-white p-8 rounded-2xl border border-slate-200/80 hover:border-sky-300 shadow-sm hover:shadow-md transition duration-200 flex flex-col justify-between">
            <div>
              <div className="p-3 bg-sky-50 text-brandAccent rounded-xl w-fit mb-6">
                {React.cloneElement(service.icon, { size: 24 })}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{service.description}</p>
            </div>
            <div className="mt-6 pt-4 border-t border-slate-50">
              <Link to="/contact" className="text-sm font-semibold text-brandAccent hover:text-sky-600 transition inline-flex items-center gap-1">
                Request Specifications &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}