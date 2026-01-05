import MainLayout from '@/Layouts/MainLayout';
import { Link } from '@inertiajs/react';
import { useTranslate } from '@/helpers';

interface Resource {
    id: number;
    title: string;
    description: string;
    resource_type: string;
}

interface Props {
    resources: {
        data: Resource[];
    };
}

export default function Index({ resources }: Props) {
  const { __ } = useTranslate();
  
  return (
    <MainLayout title={__('Resource Center')}>
      <div className="bg-white">
        <div className="bg-gray-50 py-16 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{__('Resource Center')}</h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              {__('Download brochures, whitepapers, and technical specifications.')}
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* If no resources, show empty state */}
            {resources.data.length === 0 && (
                <div className="col-span-full text-center py-12 text-gray-500">
                    {__('No resources available at the moment.')}
                </div>
            )}
            
            {resources.data.map(res => (
              <div key={res.id} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <span className="text-xs font-bold uppercase text-ge-blue tracking-widest mb-2 block">{res.resource_type}</span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{res.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{res.description}</p>
                <button className="text-ge-blue font-bold text-sm flex items-center hover:underline">
                    {__('Download')}
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
