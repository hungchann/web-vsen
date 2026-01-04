import { useTranslate } from '@/helpers';

export default function CareersBanner() {
  const { __ } = useTranslate();
  return (
    <section className="bg-ge-blue py-16 text-white text-center">
      <div className="max-w-3xl mx-auto px-4">
         <h2 className="text-3xl font-bold mb-6 italic">{__('Building a world that works.')}</h2>
         <p className="text-blue-100 mb-8 text-lg">
           {__("Join our team of experts working to solve the healthcare industry's toughest challenges.")}
         </p>
         <a href="#" className="inline-block bg-white text-ge-blue px-8 py-3 rounded font-bold uppercase tracking-widest hover:bg-gray-100 transition-colors">
           {__('View Careers')}
         </a>
      </div>
    </section>
  );
}
