import MainLayout from '@/Layouts/MainLayout';
import { SOLUTIONS } from '@/constants';

export default function Index() {
  return (
    <MainLayout title="Clinical Solutions">
      <div className="bg-white">
        {/* Header */}
        <div className="bg-gray-50 py-16 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Clinical Solutions</h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              Transforming patient care with integrated, data-driven solutions across the care pathway.
            </p>
          </div>
        </div>

        {/* List */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 gap-16">
            {SOLUTIONS.map((solution, index) => (
              <div key={solution.id} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
                <div className="flex-1 w-full">
                  <div className="rounded-2xl overflow-hidden shadow-2xl">
                    <img src={solution.image} alt={solution.title} className="w-full h-[400px] object-cover hover:scale-105 transition-transform duration-700" />
                  </div>
                </div>
                <div className="flex-1 space-y-6">
                  <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center text-4xl shadow-sm mb-6">
                    {solution.icon}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">{solution.title}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {solution.summary}
                  </p>
                  <p className="text-gray-500">
                    Our {solution.title.toLowerCase()} solutions bring together advanced imaging, data analytics, and AI to help clinicians detect disease earlier, diagnose with greater precision, and treat more effectively.
                  </p>
                  <button className="text-ge-blue font-bold uppercase tracking-widest text-sm hover:underline flex items-center">
                    Explore {solution.title} Solutions
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
