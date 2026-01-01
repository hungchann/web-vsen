import { useState, useEffect } from 'react';
import MainLayout from '@/Layouts/MainLayout';
import { Link, router } from '@inertiajs/react';
import { Product } from '@/types';

interface Props {
  products: Product[];
  categories: string[];
  filters: {
    category?: string;
  };
}

export default function Index({ products, categories, filters }: Props) {
  const [filter, setFilter] = useState(filters.category || 'All');

  useEffect(() => {
    if (filter !== (filters.category || 'All')) {
        router.get('/products', { category: filter }, { preserveState: true, preserveScroll: true });
    }
  }, [filter]);

  return (
    <MainLayout title="Products">
      <div className="bg-white">
        <div className="bg-gray-50 py-16 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Product Catalog</h1>
            <p className="text-lg text-gray-600 max-w-2xl">
              Explore our comprehensive portfolio of medical technology, digital solutions, and pharmaceutical diagnostics.
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="flex flex-wrap gap-4 mb-12">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all border ${
                  filter === cat 
                    ? 'bg-ge-blue text-white border-ge-blue shadow-lg' 
                    : 'bg-white text-gray-600 border-gray-200 hover:border-ge-blue hover:text-ge-blue'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map(product => (
              <Link 
                key={product.id} 
                href={`/products/${product.id}`}
                className="group flex flex-col border border-gray-100 rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-64 overflow-hidden bg-gray-100">
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <span className="text-[10px] uppercase font-bold text-ge-blue tracking-widest mb-2 block">{product.category}</span>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-ge-blue transition-colors">{product.name}</h3>
                  <p className="text-gray-600 text-sm mb-6 line-clamp-3 leading-relaxed">{product.description}</p>
                  <div className="mt-auto pt-4 flex items-center text-ge-blue font-bold text-xs uppercase tracking-widest">
                    View Specifications
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
