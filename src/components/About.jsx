export default function About() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <div className="aspect-[4/5] rounded-xl overflow-hidden border border-neutral-800">
            <img
              src="https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?q=80&w=1200&auto=format&fit=crop"
              alt="Principal architect portrait"
              className="h-full w-full object-cover"
              loading="lazy"
            />
          </div>
        </div>
        <div className="lg:col-span-7 flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">About the Studio</h2>
          <p className="mt-6 text-neutral-300 leading-relaxed">
            Studio Arc is an architecture practice dedicated to thoughtful, contemporary design. Our work explores proportion, light, and material to produce calm, livable spaces with enduring value.
          </p>
          <p className="mt-4 text-neutral-300 leading-relaxed">
            Led by a principal architect with over a decade of experience across residential, cultural, and mixed‑use projects, the studio partners closely with clients to translate vision into built reality. We prioritize clarity, collaboration, and craft.
          </p>
          <dl className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-6 text-sm">
            <div>
              <dt className="text-neutral-400">Years</dt>
              <dd className="mt-1 text-white font-medium">10+</dd>
            </div>
            <div>
              <dt className="text-neutral-400">Projects</dt>
              <dd className="mt-1 text-white font-medium">50+</dd>
            </div>
            <div>
              <dt className="text-neutral-400">Sectors</dt>
              <dd className="mt-1 text-white font-medium">Residential, Cultural, Commercial</dd>
            </div>
            <div>
              <dt className="text-neutral-400">Approach</dt>
              <dd className="mt-1 text-white font-medium">Modern, sustainable, human‑centric</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
