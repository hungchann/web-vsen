import MainLayout from '@/Layouts/MainLayout';
import Hero from '@/Components/Hero';
import StatsBar from '@/Components/StatsBar';
import ProductSection from '@/Components/ProductSection';
import SolutionsSection from '@/Components/SolutionsSection';
import CareersBanner from '@/Components/CareersBanner';
import { Product } from '@/types';

interface Props {
    featuredProducts: Product[];
}

export default function Home({ featuredProducts }: Props) {
    return (
        <MainLayout title="Home">
            <Hero />
            <StatsBar />
            <ProductSection products={featuredProducts} />
            <SolutionsSection />
            <CareersBanner />
        </MainLayout>
    );
}
