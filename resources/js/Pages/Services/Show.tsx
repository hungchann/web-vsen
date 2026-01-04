import MainLayout from '@/Layouts/MainLayout';
import { useTranslate } from '@/helpers';
import { SERVICES } from '@/constants';
import { Link } from '@inertiajs/react';

interface Props {
  slug: string;
}

export default function Show({ slug }: Props) {
  const { __ } = useTranslate();
  const service = SERVICES.find(s => s.slug === slug);

  if (!service) {
    return (
        <MainLayout title={__('Not Found')}>
            <div className="py-20 text-center">
                <h2 className="text-2xl font-bold">{__('Service not found.')}</h2>
                <Link href="/services" className="text-ge-blue underline mt-4 inline-block">{__('Back to services')}</Link>
            </div>
        </MainLayout>
    );
  }

  // Helper to get icon (same as Index, usually good to componentize but keeping inline for speed)
  const getIcon = (slug: string) => {
     switch(slug) {
        case 'equipment-maintenance':
            return (
                <svg className="w-16 h-16 text-ge-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
                </svg>
            );
        case 'technical-support':
            return (
                <svg className="w-16 h-16 text-ge-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
            );
        case 'installation-integration':
            return (
                <svg className="w-16 h-16 text-ge-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            );
        case 'asset-management':
             return (
                <svg className="w-16 h-16 text-ge-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
             );
        default: return null;
     }
  }

  return (
    <MainLayout title={service.title}>
      <div className="bg-white">
        <div className="bg-gray-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 py-4 flex text-xs font-bold uppercase tracking-widest text-gray-400 gap-2">
            <Link href="/" className="hover:text-ge-blue">{__('Home')}</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-ge-blue">{__('Services')}</Link>
            <span>/</span>
            <span className="text-ge-blue">{service.title}</span>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col lg:flex-row gap-16">
             <div className="flex-1">
                <div className="mb-8 p-6 bg-blue-50 inline-block rounded-full">
                    {getIcon(service.slug)}
                </div>
                <h1 className="text-4xl font-bold text-gray-900 mb-6">{service.title}</h1>
                <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    {service.description}
                </p>
                <div className="prose prose-lg text-gray-600">
                    <p>{service.fullDescription}</p>
                    <p>{__('We are committed to providing world-class service to ensure your success.')}</p>
                </div>
             </div>
             
             <div className="lg:w-1/3">
                <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100 sticky top-24">
                    <h3 className="text-xl font-bold text-gray-900 mb-4">{__('Interested in this service?')}</h3>
                    <p className="text-gray-600 mb-6">
                        {__('Contact our team to discuss how we can support your facility needs.')}
                    </p>
                    <Link href="/contact" className="block w-full text-center bg-ge-blue text-white py-4 rounded font-bold uppercase tracking-widest hover:bg-blue-800 transition-colors">
                        {__('Contact Us')}
                    </Link>
                </div>
             </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
