import React, { useState } from 'react';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', projectType: 'Web', details: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you ${formData.name}! Our development team will review your ${formData.projectType} brief.`);
  };

  return (
    <div className="py-16 px-6 max-w-xl mx-auto">
      <div className="bg-white p-8 rounded-2xl shadow-md border border-slate-100">
        <h2 className="text-2xl font-bold text-slate-900 mb-2">Kickstart Your Project</h2>
        <p className="text-slate-500 mb-6 text-sm">Tell us about what you are building, and we'll reach out within 24 hours.</p>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Your Name</label>
            <input type="text" required value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} className="w-full border border-slate-200 p-3 rounded-lg focus:outline-none focus:border-brandAccent" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Work Email</label>
            <input type="email" required value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} className="w-full border border-slate-200 p-3 rounded-lg focus:outline-none focus:border-brandAccent" />
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Project Scope</label>
            <select value={formData.projectType} onChange={e => setFormData({...formData, projectType: e.target.value})} className="w-full border border-slate-200 p-3 rounded-lg focus:outline-none focus:border-brandAccent">
              <option value="Web">Web Application</option>
              <option value="Mobile">Mobile App (iOS/Android)</option>
              <option value="Both">Both (Cross-platform System)</option>
            </select>
          </div>
          <div>
            <label className="block text-sm font-medium text-slate-700 mb-1">Brief Project Breakdown</label>
            <textarea rows="4" value={formData.details} onChange={e => setFormData({...formData, details: e.target.value})} className="w-full border border-slate-200 p-3 rounded-lg focus:outline-none focus:border-brandAccent" placeholder="Tell us about features, timelines, or your target audience..."></textarea>
          </div>
          <button type="submit" className="w-full bg-brandDark text-white py-3 rounded-lg font-bold hover:bg-slate-800 transition">
            Submit Proposal Request
          </button>
        </form>
      </div>
    </div>
  );
}