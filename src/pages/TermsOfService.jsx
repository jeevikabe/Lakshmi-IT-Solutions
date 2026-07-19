import React from 'react';
import { FileText } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="py-20 px-6 max-w-4xl mx-auto text-slate-700">
      <div className="flex items-center gap-3 mb-6 border-b border-slate-200 pb-4">
        <FileText className="text-brandAccent" size={32} />
        <h1 className="text-3xl font-bold text-slate-900">Terms of Service</h1>
      </div>
      <p className="text-sm text-slate-400 mb-8">Last Updated: July 2026</p>
      
      <div className="space-y-6 text-sm leading-relaxed">
        <section>
          <h2 className="text-lg font-bold text-slate-900 mb-2">1. Scope of Architectural Services</h2>
          <p>Lakshmi IT Solutions delivers custom software design, dedicated cloud infrastructure automation, and native engineering services. All system requirements are explicitly structured through binding Service Level Agreements (SLAs).</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900 mb-2">2. Intellectual Property Rights</h2>
          <p>Upon final payment distribution, all customized application layers, written modules, and integrated cloud configuration designs belong entirely to the client platform entity.</p>
        </section>

        <section>
          <h2 className="text-lg font-bold text-slate-900 mb-2">3. System Operations & Performance Limitations</h2>
          <p>While we architect highly redundant environments with up to 99.99% uptime configurations, Lakshmi IT Solutions is not liable for intermittent upstream cloud host provider outages originating from core datacenters.</p>
        </section>
      </div>
    </div>
  );
}