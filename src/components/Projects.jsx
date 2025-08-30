const works = [
  {
    title: 'Courtyard House',
    location: 'Santa Barbara, CA',
    year: '2023',
    image:
      'https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Glass Pavilion',
    location: 'Brooklyn, NY',
    year: '2022',
    image:
      'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Hillside Retreat',
    location: 'Boulder, CO',
    year: '2024',
    image:
      'https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?q=80&w=1600&auto=format&fit=crop',
  },
  {
    title: 'Civic Gallery',
    location: 'Austin, TX',
    year: '2021',
    image:
      'https://images.unsplash.com/photo-1558002038-1055907df827?q=80&w=1600&auto=format&fit=crop',
  },
];

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <div className="flex items-end justify-between gap-6 mb-8">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Selected Work</h2>
        <a
          href="#contact"
          className="text-sm text-neutral-300 hover:text-white underline underline-offset-4 decoration-neutral-700 hover:decoration-neutral-400"
        >
          Request full portfolio
        </a>
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {works.map((w) => (
          <article key={w.title} className="group relative overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/40">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={w.image}
                alt={w.title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                loading="lazy"
              />
            </div>
            <div className="p-4">
              <h3 className="font-medium tracking-tight text-white">{w.title}</h3>
              <p className="text-sm text-neutral-400 mt-1">
                {w.location} · {w.year}
              </p>
            </div>
            <div className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
          </article>
        ))}
        <article className="rounded-xl border border-dashed border-neutral-800 p-6 flex flex-col items-start justify-between min-h-[280px]">
          <div>
            <h3 className="text-xl font-medium text-white">Your project here</h3>
            <p className="mt-2 text-neutral-300 text-sm">
              From concept to completion, we create spaces tailored to your needs and context.
            </p>
          </div>
          <a href="#contact" className="mt-6 inline-block text-sm font-medium text-white underline underline-offset-4 decoration-neutral-600 hover:decoration-neutral-300">
            Start a conversation
          </a>
        </article>
      </div>
    </div>
  );
}
