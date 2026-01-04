import { Link } from '@inertiajs/react';
import { useTranslate } from '@/helpers';
import { Product } from '@/types';

interface Props {
  products: Product[];
}

export default function ProductSection({ products }: Props) {
  const { __ } = useTranslate();
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{__('Featured Products')}</h2>
            <p className="text-gray-600">{__('Advanced diagnostic and therapeutic tools.')}</p>
          </div>
          <Link href="/products" className="text-ge-blue font-bold uppercase text-sm tracking-widest flex items-center hover:underline">
            {__('View All Products')}
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.slice(0, 4).map((product) => (
            <Link key={product.id} href={`/products/${product.id}`} className="group cursor-pointer border border-gray-100 rounded-lg p-2 hover:shadow-xl transition-shadow bg-gray-50/50">
              <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-md bg-gray-200 mb-4 h-48">
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="px-2 pb-4">
                <span className="text-[10px] uppercase font-bold text-ge-blue tracking-widest mb-1 block">
                  {product.category}
                </span>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                  {product.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
