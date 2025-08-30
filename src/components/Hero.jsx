import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_80%_-10%,rgba(99,102,241,0.15),transparent),radial-gradient(1000px_500px_at_20%_-10%,rgba(34,197,94,0.08),transparent)]" />
      <div className="max-w-7xl mx-auto px-6 pt-20 pb-24 relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-neutral-800 bg-neutral-900/60 px-3 py-1 text-xs text-neutral-300 mb-6">
              Elevating spaces with modern precision
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold leading-tight tracking-tight">
              Modern architecture, crafted with clarity and calm.
            </h1>
            <p className="mt-6 text-neutral-300 max-w-xl">
              We design refined residential and commercial environments that balance minimalism and warmth. From concept to completion, every detail serves purpose and people.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-md bg-white text-neutral-900 px-5 py-3 text-sm font-medium hover:bg-neutral-200 transition-colors">
                View Work
                <ArrowRight size={18} />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-md border border-neutral-700 px-5 py-3 text-sm font-medium text-neutral-100 hover:bg-neutral-900 transition-colors">
                Start a Project
              </a>
            </div>
          </div>
          <div className="relative h-[420px] sm:h-[520px] lg:h-[560px] rounded-xl overflow-hidden border border-neutral-800">
            <img
              src="https://images.unsplash.com/photo-1529429612778-cf4fb9c0d3a2?q=80&w=1600&auto=format&fit=crop"
              alt="Modern architectural facade"
              className="h-full w-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/60 via-transparent to-transparent pointer-events-none" />
            <div className="absolute bottom-4 left-4 right-4 text-neutral-200 text-sm">
              Riverside Cultural Center — Concept Study, 2024
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
