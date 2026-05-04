import { Star } from 'lucide-react';
import { testimonials } from '../data/testimonials';

export default function Testimonials() {
  return (
    <section id="testimonials" className="section bg-slate-900/30 border-y border-slate-800">
      <div className="container">
        <h2 className="section-title text-glow mb-8 text-center">
          What Our Learners Say
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="glass-panel glass-panel-hover flex flex-col p-6 rounded-3xl hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-12 h-12 rounded-full border border-slate-600"
                />
                <div>
                  <p className="font-semibold text-white">{t.name}</p>
                  <div className="flex items-center">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-500 text-amber-500"
                      />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-slate-300 flex-1">{t.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
