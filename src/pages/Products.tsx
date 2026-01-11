import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import type { Product, ProductCategory } from '../types';
import { ProductCard } from '../components/products/ProductCard';
import { Section } from '../components/ui/Section';
import heroBg from '../assets/ourProduct.png'; // Reusing hero-bg for now, ideally specific about bg
import yogurtToot from '../assets/yogurt-toot.png';
import yogurtGhelal from '../assets/yogurt-Ghelal.png';
import yogurtFree from '../assets/yogurt-free.png';
import yogurtBananaStro from '../assets/yogurt-banana-stro.png';
import YogurtVanillia from '../assets/yogert-vanillia.png';
import yogurtCookie from '../assets/yogert-cooki.png';
import laban from '../assets/laban.png';
import labanVanillia from '../assets/laban-vanillia.png';
import labanFostok from '../assets/laban-fostok.jpeg';
import labanAlmond from '../assets/laban-almond.jpeg';
import labanStrawberry from '../assets/laban-strw.jpeg';
import labanBachKewi from '../assets/laban-bachin-kewi.jpeg';
import labanKewi from '../assets/laban-kewi-banana.jpeg';
// Dummy Data
const productsData: Product[] = [
    {
        id: '1',
        name: 'products_page.items.p1.name',
        description: 'products_page.items.p1.description',
        image: yogurtToot,
        category: 'drink',
        sizes: ['180ml', '900ml'],
        storage: 'products_page.card.storage',
        nutritionalInfo: { calories: 85, protein: 2.2, fat: 2.2, carbs: 14.0 }
    },
    {
        id: '2',
        name: 'products_page.items.p2.name',
        description: 'products_page.items.p2.description',
        image: yogurtGhelal,
        category: 'cup',
        sizes: ['80g'],
        storage: 'products_page.card.storage',
        nutritionalInfo: { calories: 0, protein: 0, fat: 0, carbs: 0 }
    },
    {
        id: '3',
        name: 'products_page.items.p3.name',
        description: 'products_page.items.p3.description',
        image: yogurtFree,
        category: 'strained',
        sizes: ['80g'],
        storage: 'products_page.card.storage',
        nutritionalInfo: { calories: 67, protein: 3.6, fat: 3.6, carbs: 5.1 }
    },
    {
        id: '4',
        name: 'products_page.items.p4.name',
        description: 'products_page.items.p4.description',
        image: yogurtBananaStro,
        category: 'drink',
        sizes: ['180ml', '900ml'],
        storage: 'products_page.card.storage',
        nutritionalInfo: { calories: 0, protein: 0, fat: 0, carbs: 0 }
    },
    {
        id: '5',
        name: 'products_page.items.p5.name',
        description: 'products_page.items.p5.description',
        image: yogurtCookie,
        category: 'cup',
        sizes: ['80g'],
        storage: 'products_page.card.storage',
        nutritionalInfo: { calories: 0, protein: 0, fat: 0, carbs: 0 }
    },
    {
        id: '6',
        name: 'products_page.items.p6.name',
        description: 'products_page.items.p6.description',
        image: YogurtVanillia,
        category: 'cup',
        sizes: ['80g'],
        storage: 'products_page.card.storage',
        nutritionalInfo: { calories: 78, protein: 3.3, fat: 2.8, carbs: 14.3 }
    },
    {
        id: '7',
        name: 'products_page.items.p7.name',
        description: 'products_page.items.p7.description',
        image: laban,
        category: 'strained',
        sizes: ['180ml', '900ml'],
        storage: 'products_page.card.storage',
        nutritionalInfo: { calories: 53, protein: 3, fat: 2.3, carbs: 5.1 }
    },
    {
        id: '8',
        name: 'products_page.items.p8.name',
        description: 'products_page.items.p8.description',
        image: labanVanillia,
        category: 'drink',
        sizes: ['180ml', '900ml'],
        storage: 'products_page.card.storage',
        nutritionalInfo: { calories: 78, protein: 3.1, fat: 1.5, carbs: 13 }
    },
    {
        id: '9',
        name: 'products_page.items.p9.name',
        description: 'products_page.items.p9.description',
        image: labanAlmond,
        category: 'drink',
        sizes: ['180ml', '900ml'],
        storage: 'products_page.card.storage',
        nutritionalInfo: { calories: 87, protein: 2.2, fat: 2.2, carbs: 14.7 }
    },
    {
        id: '10',
        name: 'products_page.items.p10.name',
        description: 'products_page.items.p10.description',
        image: labanBachKewi,
        category: 'drink',
        sizes: ['180ml', '900ml'],
        storage: 'products_page.card.storage',
        nutritionalInfo: { calories: 0, protein: 0, fat: 0, carbs: 0 }
    },
    {
        id: '11',
        name: 'products_page.items.p11.name',
        description: 'products_page.items.p11.description',
        image: labanFostok,
        category: 'drink',
        sizes: ['180ml', '900ml'],
        storage: 'products_page.card.storage',
        nutritionalInfo: { calories: 0, protein: 0, fat: 0, carbs: 0 }
    },
    {
        id: '12',
        name: 'products_page.items.p12.name',
        description: 'products_page.items.p12.description',
        image: labanStrawberry,
        category: 'drink',
        sizes: ['180ml', '900ml'],
        storage: 'products_page.card.storage',
        nutritionalInfo: { calories: 0, protein: 0, fat: 0, carbs: 0 }
    },
    {
        id: '13',
        name: 'products_page.items.p13.name',
        description: 'products_page.items.p13.description',
        image: labanKewi,
        category: 'drink',
        sizes: ['180ml', '900ml'],
        storage: 'products_page.card.storage',
        nutritionalInfo: { calories: 0, protein: 0, fat: 0, carbs: 0 }
    }
];

const categories: ProductCategory[] = ['drink', 'cup', 'strained'];

export const Products = () => {
    const { t } = useTranslation();
    const [activeCategory, setActiveCategory] = useState<ProductCategory | 'all'>('all');

    const filteredProducts = activeCategory === 'all'
        ? productsData
        : productsData.filter(p => p.category === activeCategory);

    return (
        <div className="pt-20">
            {/* Header */}
            <div className=" flex items-center bg-neutral-100 dark:bg-neutral-900 min-h-[70vh] pb-[100px]">
                <div className="absolute inset-0 opacity-40">
                    {/* Placeholder or reused background */}
                    <img src={heroBg} alt="About Background" className="w-full h-full object-cover opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/90 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-80" />
                </div>

                <div className="container relative z-10 px-4 text-center pb-24 sm:pb-32">

                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-4 text-primary-dark dark:text-primary-light"
                    >
                        {t('products_page.title')}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                    >
                        {t('products_page.subtitle')}
                    </motion.p>
                </div>
            </div>

            {/* Filter */}
            <Section className="bg-white dark:bg-neutral-950 min-h-screen">
                <div className="container px-4 py-36">
                    {/* Category Tabs */}
                    <div className="flex flex-nowrap sm:flex-wrap justify-start sm:justify-center gap-3 mb-12 overflow-x-auto pb-4 sm:pb-0 no-scrollbar">
                        <button
                            onClick={() => setActiveCategory('all')}
                            className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeCategory === 'all'
                                ? 'bg-primary text-white shadow-lg scale-105'
                                : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                                }`}
                        >
                            {t('products_page.categories.all')}
                        </button>
                        {categories.map(cat => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${activeCategory === cat
                                    ? 'bg-primary text-white shadow-lg scale-105'
                                    : 'bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 hover:bg-neutral-200 dark:hover:bg-neutral-700'
                                    }`}
                            >
                                {t(`products_page.categories.${cat}`)}
                            </button>
                        ))}
                    </div>

                    {/* Product Grid */}
                    <motion.div
                        layout
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
                    >
                        {filteredProducts.map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </motion.div>

                    {filteredProducts.length === 0 && (
                        <div className="text-center py-20 text-neutral-500">
                            No products found in this category.
                        </div>
                    )}
                </div>
            </Section>
        </div>
    );
};
