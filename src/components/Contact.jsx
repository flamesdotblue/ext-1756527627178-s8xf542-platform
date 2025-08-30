import { useState } from 'react';
import { Mail } from 'lucide-react';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [status, setStatus] = useState('');

  const onChange = (e) => setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  const onSubmit = (e) => {
    e.preventDefault();
    setStatus('');
    const to = 'studio@example.com';
    const subject = encodeURIComponent(`New project inquiry from ${form.name || 'Website Visitor'}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone}\n\nMessage:\n${form.message}`
    );
    const link = `mailto:${to}?subject=${subject}&body=${body}`;
    try {
      window.location.href = link;
      setStatus('Opening email client...');
    } catch (err) {
      setStatus('Unable to open email client. Please email studio@example.com directly.');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Let’s build something remarkable</h2>
          <p className="mt-4 text-neutral-300 max-w-xl">
            Share a few details about your project, timeline, and goals. We’ll follow up to schedule a consultation.
          </p>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm text-neutral-300">
            <div className="rounded-lg border border-neutral-800 p-4 bg-neutral-900/40">
              Residential and commercial
            </div>
            <div className="rounded-lg border border-neutral-800 p-4 bg-neutral-900/40">
              Concept, planning, execution
            </div>
            <div className="rounded-lg border border-neutral-800 p-4 bg-neutral-900/40">
              Sustainable materials and systems
            </div>
            <div className="rounded-lg border border-neutral-800 p-4 bg-neutral-900/40">
              Clear timelines and budgets
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="rounded-2xl border border-neutral-800 bg-neutral-900/50 p-6 sm:p-8">
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-sm text-neutral-300">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={onChange}
                className="w-full rounded-md bg-neutral-950 border border-neutral-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white/10"
                placeholder="Your full name"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm text-neutral-300">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={onChange}
                className="w-full rounded-md bg-neutral-950 border border-neutral-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white/10"
                placeholder="you@example.com"
              />
            </div>
            <div className="flex flex-col gap-2 sm:col-span-2">
              <label htmlFor="phone" className="text-sm text-neutral-300">Phone (optional)</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={form.phone}
                onChange={onChange}
                className="w-full rounded-md bg-neutral-950 border border-neutral-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white/10"
                placeholder="(+1) 555‑123‑4567"
              />
            </div>
            <div className="flex flex-col gap-2 sm:col-span-2">
              <label htmlFor="message" className="text-sm text-neutral-300">Project details</label>
              <textarea
                id="message"
                name="message"
                required
                rows={6}
                value={form.message}
                onChange={onChange}
                className="w-full rounded-md bg-neutral-950 border border-neutral-800 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white/10"
                placeholder="Scope, location, timeline, budget range..."
              />
            </div>
          </div>
          <div className="mt-6 flex items-center gap-3">
            <button
              type="submit"
              className="inline-flex items-center gap-2 rounded-md bg-white text-neutral-900 px-5 py-3 text-sm font-medium hover:bg-neutral-200 transition-colors"
            >
              <Mail size={18} />
              Send Inquiry
            </button>
            {status && <span className="text-sm text-neutral-400">{status}</span>}
          </div>
          <p className="mt-4 text-xs text-neutral-500">
            By submitting, you agree to be contacted regarding your inquiry.
          </p>
        </form>
      </div>
    </div>
  );
}
