import MainLayout from '@/Layouts/MainLayout';
import { useTranslate } from '@/helpers';

export default function Index() {
  const { __ } = useTranslate();

  return (
    <MainLayout title={__('Contact Us')}>
      <div className="bg-white">
        <div className="bg-gray-50 py-16 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{__('Contact Us')}</h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              {__('We are here to help. Reach out to us for any inquiries or support.')}
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-8">{__('Get in Touch')}</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-ge-blue flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{__('Address')}</h3>
                    <p className="text-gray-600">123 Medical Tech Blvd,<br />Innovation District, City, Country</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-ge-blue flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{__('Phone')}</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center text-ge-blue flex-shrink-0">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 mb-1">{__('Email')}</h3>
                    <p className="text-gray-600">contact@vsen-medical.com</p>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="mt-12 bg-gray-200 rounded-xl h-64 w-full flex items-center justify-center text-gray-500">
                Map Integration Placeholder
              </div>
            </div>

            {/* Form */}
            <div className="bg-gray-50 p-8 rounded-2xl border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{__('Send us a Message')}</h2>
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">{__('Full Name')}</label>
                  <input type="text" id="name" className="w-full rounded-md border-gray-300 shadow-sm focus:border-ge-blue focus:ring focus:ring-ge-blue/20" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{__('Email Address')}</label>
                  <input type="email" id="email" className="w-full rounded-md border-gray-300 shadow-sm focus:border-ge-blue focus:ring focus:ring-ge-blue/20" />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">{__('Subject')}</label>
                  <select id="subject" className="w-full rounded-md border-gray-300 shadow-sm focus:border-ge-blue focus:ring focus:ring-ge-blue/20">
                    <option>{__('General Inquiry')}</option>
                    <option>{__('Sales')}</option>
                    <option>{__('Support')}</option>
                    <option>{__('Partnership')}</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">{__('Message')}</label>
                  <textarea id="message" rows={4} className="w-full rounded-md border-gray-300 shadow-sm focus:border-ge-blue focus:ring focus:ring-ge-blue/20"></textarea>
                </div>
                <button type="submit" className="w-full bg-ge-blue text-white py-3 rounded-md font-bold uppercase tracking-widest hover:bg-blue-800 transition-colors">
                  {__('Submit')}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
