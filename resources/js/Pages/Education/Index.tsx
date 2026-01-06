import MainLayout from '@/Layouts/MainLayout';
import { useTranslate } from '@/helpers';

export default function Index() {
  const { __ } = useTranslate();

  const programs = [
    {
      title: 'Clinical Training',
      description: 'In-depth training sessions for clinicians on the latest medical technologies.',
      category: 'Healthcare Professionals'
    },
    {
      title: 'Technical Certification',
      description: 'Certification programs for biomedical engineers and technical staff.',
      category: 'Technical Staff'
    },
    {
      title: 'Webinars & Online Courses',
      description: 'On-demand learning resources accessible from anywhere, anytime.',
      category: 'All Users'
    },
    {
      title: 'Workshops',
      description: 'Hands-on workshops featuring expert-led demonstrations.',
      category: 'Specialized'
    }
  ];

  return (
    <MainLayout title={__('Education')}>
      <div className="bg-white">
        <div className="bg-gray-50 py-16 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{__('Education & Training')}</h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              {__('Empowering healthcare professionals with the knowledge and skills to improve patient outcomes.')}
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programs.map((program, index) => (
              <div key={index} className="flex flex-col bg-white border border-gray-100 rounded-xl overflow-hidden shadow-sm">
                <div className="h-48 bg-ge-blue/5 flex items-center justify-center">
                  <span className="text-ge-blue font-bold text-center px-4">{__(program.title)}</span>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-ge-blue tracking-widest mb-2 block">{__(program.category)}</span>
                  <p className="text-sm text-gray-600 mb-4 leading-relaxed">
                    {__(program.description)}
                  </p>
                  <button className="mt-auto text-ge-blue font-bold text-xs uppercase tracking-widest hover:underline">
                    {__('Learn More')}
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
