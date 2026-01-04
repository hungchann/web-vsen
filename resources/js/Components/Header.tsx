import { Link, router, usePage } from '@inertiajs/react';
import { useState } from 'react';
import QuoteModal from './QuoteModal';
import { useTranslate } from '@/helpers';
import { PageProps } from '@/types';

export default function Header() {
  const { __ } = useTranslate();
  const { props } = usePage<PageProps>();
  const { locale, categories } = props;
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      router.get('/products', { q: searchQuery });
    }
  };

  return (
    <header className="sticky top-0 z-40 shadow-sm font-sans">
      <QuoteModal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
      
      {/* Top Bar: Search & Language - Gray Background */}
      <div className="bg-gray-100 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-10 flex justify-end items-center gap-6">
            {/* Search */}
            <div className="relative">
                <input 
                    type="text" 
                    placeholder={__('Search...')}
                    className="w-64 bg-white pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-ge-blue focus:ring-1 focus:ring-ge-blue transition-all"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyDown={handleSearch}
                />
                <svg className="w-4 h-4 text-gray-400 absolute left-3.5 top-2.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
            </div>

            {/* Language Switcher */}
            <div className="flex items-center gap-2 text-[11px] font-bold tracking-wide">
                <Link 
                    href="/language/en" 
                    className={`${locale === 'en' ? 'text-ge-blue' : 'text-gray-500 hover:text-gray-700'}`}
                >
                    EN
                </Link>
                <span className="text-gray-300">|</span>
                <Link 
                    href="/language/vi" 
                    className={`${locale === 'vi' ? 'text-ge-blue' : 'text-gray-500 hover:text-gray-700'}`}
                >
                    VN
                </Link>
            </div>
        </div>
      </div>

      {/* Main Navigation: Logo, Menu, CTA - White Background */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center h-20">
                {/* Logo */}
                <div className="flex-shrink-0 flex items-center">
                    <Link href="/" className="flex items-center gap-2">
                        <span className="text-3xl font-bold text-ge-blue italic tracking-tighter">VSEN</span>
                        <span className="text-sm font-semibold text-gray-500 uppercase tracking-widest mt-1">Medical</span>
                    </Link>
                </div>

                {/* Navigation Links */}
                <nav className="hidden lg:flex items-center space-x-1">
                    {/* Products Dropdown */}
                    <div className="group relative">
                        <Link 
                            href="/products" 
                            className="text-gray-700 group-hover:text-ge-blue px-4 py-3 rounded-md text-sm font-bold uppercase tracking-wide transition-colors flex items-center"
                        >
                            {__('Products')}
                            <svg className="w-3 h-3 ml-1 text-gray-400 group-hover:text-ge-blue transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                            </svg>
                        </Link>
                        
                        {/* Dropdown Menu */}
                        <div className="absolute left-0 pt-2 w-56 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out transform group-hover:translate-y-0 translate-y-2 z-50">
                            <div className="bg-white rounded-lg shadow-xl border border-gray-100 overflow-hidden ring-1 ring-black ring-opacity-5">
                                <div className="py-2">
                                    <Link href="/products" className="block px-4 py-2 text-sm text-ge-blue font-bold hover:bg-gray-50 border-b border-gray-50">
                                        {__('All Products')}
                                    </Link>
                                    {categories?.map((category) => (
                                        <Link 
                                            key={category.slug}
                                            href={`/products?category=${category.name}`}
                                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-ge-blue transition-colors"
                                        >
                                            {category.name}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    <Link href="/services" className="text-gray-700 hover:text-ge-blue px-4 py-3 rounded-md text-sm font-bold uppercase tracking-wide transition-colors">
                        {__('Services')}
                    </Link>
                    <Link href="/solutions" className="text-gray-700 hover:text-ge-blue px-4 py-3 rounded-md text-sm font-bold uppercase tracking-wide transition-colors">
                        {__('Solutions')}
                    </Link>
                    <Link href="/education" className="text-gray-700 hover:text-ge-blue px-4 py-3 rounded-md text-sm font-bold uppercase tracking-wide transition-colors">
                        {__('Education')}
                    </Link>
                    <Link href="/insights/news" className="text-gray-700 hover:text-ge-blue px-4 py-3 rounded-md text-sm font-bold uppercase tracking-wide transition-colors">
                        {__('Insights')}
                    </Link>
                </nav>

                {/* Right CTA */}
                <div className="flex items-center">
                    <Link 
                        href="/contact"
                        className="bg-ge-blue text-white px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-blue-800 transition-all shadow-sm hover:shadow-md"
                    >
                        {__('Contact Us')}
                    </Link>
                </div>
            </div>
        </div>
      </div>
    </header>
  );
}