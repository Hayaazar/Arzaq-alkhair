import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import type { Product } from '../../types';
import { Info, Package, Snowflake } from 'lucide-react';

interface ProductCardProps {
    product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    const { t } = useTranslation();

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -5 }}
            className="bg-white dark:bg-neutral-800 rounded-2xl overflow-hidden shadow-lg border border-neutral-100 dark:border-neutral-700 flex flex-col h-full group"
        >
            <div className="relative h-64 overflow-hidden bg-white dark:bg-neutral-900 p-6 flex items-center justify-center">
                <img
                    src={product.image}
                    alt={t(product.name)}
                    className="max-w-full max-h-full object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-md"
                />
                <div className="absolute top-4 right-4 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-primary shadow-sm">
                    {t(`products_page.categories.${product.category}`)}
                </div>
            </div>

            <div className="p-6 flex flex-col flex-1">
                <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-white">
                    {t(product.name)}
                </h3>
                <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-4 line-clamp-2 flex-grow">
                    {t(product.description)}
                </p>

                <div className="space-y-3 mb-6">
                    <div className="flex items-start gap-2 text-sm text-neutral-500 dark:text-neutral-400">
                        <Package className="w-4 h-4 mt-1 text-primary shrink-0" />
                        <div>
                            <span className="font-semibold text-neutral-700 dark:text-neutral-300 mr-1 rtl:ml-1">
                                {t('products_page.card.sizes')}:
                            </span>
                            {product.sizes.join(', ')}
                        </div>
                    </div>
                    {product.storage && (
                        <div className="flex items-start gap-2 text-sm text-neutral-500 dark:text-neutral-400">
                            <Snowflake className="w-4 h-4 mt-1 text-secondary shrink-0" />
                            <div>
                                <span className="font-semibold text-neutral-700 dark:text-neutral-300 mr-1 rtl:ml-1">
                                    {t('products_page.card.storage')}:
                                </span>
                                {t(product.storage)}
                            </div>
                        </div>
                    )}
                </div>

                {product.nutritionalInfo && (
                    <div className="mt-auto pt-4 border-t border-neutral-100 dark:border-neutral-700">
                        <div className="flex items-center gap-2 mb-2 text-xs font-semibold text-neutral-900 dark:text-white uppercase tracking-wider">
                            <Info className="w-3 h-3" />
                            {t('products_page.card.nutrition')}
                        </div>
                        <div className="grid grid-cols-4 gap-2 text-center text-xs">
                            <div className="bg-neutral-50 dark:bg-neutral-900 p-2 rounded">
                                <span className="block font-bold text-primary">{product.nutritionalInfo.calories}</span>
                                <span className="text-[10px] text-neutral-500">{t('products_page.card.calories')}</span>
                            </div>
                            <div className="bg-neutral-50 dark:bg-neutral-900 p-2 rounded">
                                <span className="block font-bold text-secondary">{product.nutritionalInfo.protein}g</span>
                                <span className="text-[10px] text-neutral-500">{t('products_page.card.protein')}</span>
                            </div>
                            <div className="bg-neutral-50 dark:bg-neutral-900 p-2 rounded">
                                <span className="block font-bold text-accent">{product.nutritionalInfo.fat}g</span>
                                <span className="text-[10px] text-neutral-500">{t('products_page.card.fat')}</span>
                            </div>
                            <div className="bg-neutral-50 dark:bg-neutral-900 p-2 rounded">
                                <span className="block font-bold text-neutral-600 dark:text-neutral-400">{product.nutritionalInfo.carbs}g</span>
                                <span className="text-[10px] text-neutral-500">{t('products_page.card.carbs')}</span>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </motion.div>
    );
};
