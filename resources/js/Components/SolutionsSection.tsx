import { Link } from '@inertiajs/react';
import { SOLUTIONS } from '@/constants';

export default function SolutionsSection() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
         <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Precision Medicine Across the Pathway</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Our clinical and therapeutic solutions help transform the way clinicians approach patient care, from screening to follow-up.
            </p>
         </div>
         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {SOLUTIONS.map((sol) => (
              <div key={sol.id} className="relative overflow-hidden rounded-xl h-[400px] group shadow-lg">
                <img 
                  src={sol.image} 
                  alt={sol.title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/30 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8">
                  <div className="text-3xl mb-4">{sol.icon}</div>
                  <h3 className="text-2xl font-bold text-white mb-2">{sol.title}</h3>
                  <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                    {sol.summary}
                  </p>
                  <Link href="#" className="inline-flex items-center text-white text-xs font-bold uppercase tracking-widest border-b-2 border-white pb-1 hover:text-blue-400 hover:border-blue-400 transition-colors">
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
         </div>
      </div>
    </section>
  );
}
