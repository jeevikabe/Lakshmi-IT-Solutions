import React from 'react';
import { ShieldCheck } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="py-20 px-6 max-w-4xl mx-auto text-slate-700">
      <div className="flex items-center gap-3 mb-6 border-b border-slate-200 pb-4">
        <ShieldCheck className="text-brandAccent" size={32} />
        <h1 className="text-3xl font-bold text-slate-900">Privacy Policy</h1>
      </div>
      <p className="text-sm text-slate-400 mb-8">Last Updated: July 2026</p>
      
      <div className="space-y-6 text-sm leading-relaxed">
        <section>
          <h2 className="text-lg font-bold text-slate-900 mb-2">1. Data Encryption & Security</h2>
          <p>At Lakshmi IT Solutions, infrastructure security is fundamental. All client information, code repositories, and structural metrics are protected via AES-256 end-to-end encryption protocols during data transit and rest phases.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900 mb-2">2. Information Collection</h2>
          <p>We restrict data gathering purely to diagnostic metrics, operational feedback pipelines, and service specifications submitted directly through our consultation channels.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900 mb-2">3. Compliance and Law</h2>
          <p>Our operational framework strictly adheres to industry standards, guaranteeing that structural assets and internal source systems remain unshared with external marketing platforms.</p>
        </section>
      </div>
    </div>
  );
}