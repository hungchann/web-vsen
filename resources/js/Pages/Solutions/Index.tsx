import MainLayout from '@/Layouts/MainLayout';
import { SOLUTIONS } from '@/constants';
import { Link } from '@inertiajs/react';
import { useTranslate } from '@/helpers';

export default function Index() {
  const { __ } = useTranslate();

  const getIcon = (title: string) => {
    switch (title) {
      case 'Cardiology':
        return (
          <svg className="w-8 h-8 text-ge-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
          </svg>
        );
      case 'Oncology':
        return (
          <svg className="w-8 h-8 text-ge-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        );
      case 'Neurology':
        return (
          <svg className="w-8 h-8 text-ge-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <MainLayout title={__('Clinical Solutions')}>
      <div className="bg-white">
        {/* Header */}
        <div className="bg-gray-50 py-16 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{__('Clinical Solutions')}</h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              {__('Transforming patient care with integrated, data-driven solutions across the care pathway.')}
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
                  <div className="w-16 h-16 rounded-full bg-blue-50 flex items-center justify-center shadow-sm mb-6">
                    {getIcon(solution.title)}
                  </div>
                  <h2 className="text-3xl font-bold text-gray-900">{solution.title}</h2>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {solution.summary}
                  </p>
                  <p className="text-gray-500">
                    {__('Our solutions bring together advanced imaging, data analytics, and AI to help clinicians detect disease earlier, diagnose with greater precision, and treat more effectively.', { title: solution.title.toLowerCase() })}
                  </p>
                  <Link 
                    href={`/products?q=${solution.title}`}
                    className="text-ge-blue font-bold uppercase tracking-widest text-sm hover:underline flex items-center inline-block"
                  >
                    {__('Explore Solutions', { title: solution.title })}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
