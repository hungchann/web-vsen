import { useState } from 'react';
import MainLayout from '@/Layouts/MainLayout';
import { Link, router } from '@inertiajs/react';
import { Product } from '@/types';
import QuoteModal from '@/Components/QuoteModal';
import { useTranslate } from '@/helpers';

interface Props {
  products: Product[];
  filterCategories: string[];
  filters: {
    category?: string;
    q?: string;
  };
}

export default function Index({ products, filterCategories, filters }: Props) {
  const { __ } = useTranslate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<{id: string, name: string} | null>(null);

  const handleFilterChange = (cat: string) => {
    const params: any = { category: cat };
    if (filters.q) params.q = filters.q;
    router.get('/products', params, { preserveState: true, preserveScroll: true });
  };

  const openQuoteModal = (product: Product) => {
    setSelectedProduct({ id: product.id, name: product.name });
    setIsModalOpen(true);
  };

  return (
    <MainLayout title={__('Products')}>
      <QuoteModal 
        isOpen={isModalOpen} 
        closeModal={() => setIsModalOpen(false)} 
        productId={selectedProduct?.id}
        productName={selectedProduct?.name}
      />
      <div className="bg-white">
        <div className="bg-gray-50 py-16 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{__('Product Catalog')}</h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              {__('Explore our comprehensive portfolio')}
            </p>
            {filters.q && (
              <p className="mt-4 text-sm text-gray-500">
                {__('Search results for')}: <span className="font-bold">"{filters.q}"</span>
                <button 
                  onClick={() => router.get('/products')}
                  className="ml-2 text-ge-blue hover:underline"
                >
                  Clear search
                </button>
              </p>
            )}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-wrap gap-4 mb-12">
            {filterCategories.map(cat => (
              <button
                key={cat}
                onClick={() => handleFilterChange(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all border ${
                  (filters.category || 'All') === cat 
                    ? 'bg-ge-blue text-white border-ge-blue shadow-lg' 
                    : 'bg-white text-gray-600 border-gray-200 hover:border-ge-blue hover:text-ge-blue'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.length > 0 ? products.map(product => (
              <div 
                key={product.id} 
                className="group flex flex-col border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
              >
                <Link href={`/products/${product.id}`} className="h-64 overflow-hidden bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </Link>
                <div className="p-8 flex-1 flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-ge-blue tracking-widest mb-2 block">{product.category}</span>
                  <Link href={`/products/${product.id}`}>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-ge-blue transition-colors">{product.name}</h3>
                  </Link>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">{product.description}</p>
                  
                  <div className="mt-auto pt-4 flex flex-col gap-4">
                    <button 
                      onClick={() => openQuoteModal(product)}
                      className="w-full bg-ge-blue text-white py-3 rounded text-xs font-bold uppercase tracking-widest hover:bg-blue-800 transition-colors"
                    >
                      {__('Request Quote')}
                    </button>
                    <Link 
                      href={`/products/${product.id}`}
                      className="flex items-center text-ge-blue font-bold text-xs uppercase tracking-widest hover:underline"
                    >
                      {__('View Specifications')}
                      <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            )) : (
              <div className="col-span-full py-20 text-center">
                <p className="text-gray-500 text-lg">{__('Product not found.')}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
