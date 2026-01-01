import { Link, router } from '@inertiajs/react';
import { useState } from 'react';
import QuoteModal from './QuoteModal';

export default function Header() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      router.get('/products', { q: searchQuery });
    }
  };

  return (
    <header className="bg-white sticky top-0 z-40 border-b border-gray-200 shadow-sm">
      <QuoteModal isOpen={isModalOpen} closeModal={() => setIsModalOpen(false)} />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-bold text-ge-blue italic tracking-tighter">
              VSEN Medical
            </Link>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex space-x-8">
            <Link href="/products" className="text-gray-600 hover:text-ge-blue px-3 py-2 rounded-md text-sm font-bold uppercase tracking-wide transition-colors">
              Products
            </Link>
            <Link href="#" className="text-gray-600 hover:text-ge-blue px-3 py-2 rounded-md text-sm font-bold uppercase tracking-wide transition-colors">
              Services
            </Link>
            <Link href="/solutions" className="text-gray-600 hover:text-ge-blue px-3 py-2 rounded-md text-sm font-bold uppercase tracking-wide transition-colors">
              Solutions
            </Link>
            <Link href="#" className="text-gray-600 hover:text-ge-blue px-3 py-2 rounded-md text-sm font-bold uppercase tracking-wide transition-colors">
              Education
            </Link>
            <Link href="/insights/news" className="text-gray-600 hover:text-ge-blue px-3 py-2 rounded-md text-sm font-bold uppercase tracking-wide transition-colors">
              Insights
            </Link>
          </nav>

          {/* Right Section */}
          <div className="flex items-center space-x-4">
            <div className="hidden lg:block relative">
              <input 
                type="text" 
                placeholder="Search..." 
                className="w-48 pl-10 pr-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:border-ge-blue focus:ring-1 focus:ring-ge-blue transition-all"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={handleSearch}
              />
              <svg className="w-4 h-4 text-gray-400 absolute left-3 top-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            <button 
              onClick={() => setIsModalOpen(true)}
              className="bg-ge-blue text-white px-5 py-2 rounded text-xs font-bold uppercase tracking-widest hover:bg-blue-800 transition-colors"
            >
              Request Quote
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
