import Header from '@/Components/Header';
import Footer from '@/Components/Footer';
import ChatBot from '@/Components/ChatBot';
import { Head } from '@inertiajs/react';
import { ReactNode } from 'react';

interface Props {
    title?: string;
    children: ReactNode;
}

export default function MainLayout({ title, children }: Props) {
    return (
        <div className="min-h-screen flex flex-col font-sans text-gray-900 bg-white">
            <Head title={title} />
            <Header />
            <main className="flex-grow">
                {children}
            </main>
            <Footer />
            <ChatBot />
        </div>
    );
}
