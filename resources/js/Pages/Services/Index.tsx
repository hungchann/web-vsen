import MainLayout from '@/Layouts/MainLayout';
import { useTranslate } from '@/helpers';
import { SERVICES } from '@/constants';
import { Link } from '@inertiajs/react';

export default function Index() {
  const { __ } = useTranslate();

  const getIcon = (slug: string) => {
    switch(slug) {
       case 'equipment-maintenance':
           return (
               <svg className="w-10 h-10 text-ge-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
               </svg>
           );
       case 'technical-support':
           return (
               <svg className="w-10 h-10 text-ge-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
               </svg>
           );
       case 'installation-integration':
           return (
               <svg className="w-10 h-10 text-ge-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
               </svg>
           );
       case 'asset-management':
            return (
               <svg className="w-10 h-10 text-ge-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
               </svg>
            );
       default: return null;
    }
  }

  return (
    <MainLayout title={__('Services')}>
      <div className="bg-white">
        <div className="bg-gray-50 py-16 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{__('Services')}</h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              {__('Dedicated support and maintenance services to maximize the value of your investments.')}
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {SERVICES.map((service, index) => (
              <Link key={index} href={`/services/${service.slug}`} className="p-8 border border-gray-100 rounded-2xl shadow-sm hover:shadow-lg transition-all group block">
                <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300 origin-left">{getIcon(service.slug)}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-ge-blue transition-colors">{__(service.title)}</h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {__(service.description)}
                </p>
                <span className="text-ge-blue text-sm font-bold uppercase tracking-widest flex items-center">
                    {__('Learn More')}
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
