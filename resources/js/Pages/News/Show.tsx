import MainLayout from '@/Layouts/MainLayout';
import { Link } from '@inertiajs/react';
import { useTranslate } from '@/helpers';

interface Article {
    id: number;
    title: string;
    content: string;
    image: string;
    category: string;
    published_at: string;
}

interface Props {
    article: Article;
}

export default function Show({ article }: Props) {
  const { __ } = useTranslate();

  return (
    <MainLayout title={article.title}>
      <div className="bg-white">
         <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="mb-8 text-center">
               <div className="flex justify-center items-center gap-4 text-xs font-bold uppercase tracking-widest text-gray-400 mb-4">
                  <span className="text-ge-blue">{article.category}</span>
                  <span>|</span>
                  <span>{article.published_at}</span>
               </div>
               <h1 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-8">
                  {article.title}
               </h1>
            </div>

            {article.image && (
               <div className="rounded-2xl overflow-hidden mb-12 shadow-lg">
                  <img src={article.image} alt={article.title} className="w-full h-auto" />
               </div>
            )}

            <div className="prose prose-lg max-w-none text-gray-600">
               {/* Note: In a real app, you'd use a parser for HTML content. 
                   For now, we just display raw text or assume simple paragraphs. 
                   If using a rich text editor in backend, use dangerouslySetInnerHTML carefully. */}
               <div dangerouslySetInnerHTML={{ __html: article.content }} />
            </div>

            <div className="mt-16 pt-8 border-t border-gray-200">
               <Link href="/insights/news" className="text-ge-blue font-bold uppercase tracking-widest text-sm flex items-center hover:underline">
                  <svg className="w-4 h-4 mr-2 rotate-180" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                     <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  {__('Back to Newsroom')}
               </Link>
            </div>
         </div>
      </div>
    </MainLayout>
  );
}
