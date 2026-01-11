import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, ShieldCheck, Award, Zap, Smile, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Section } from '../components/ui/Section';
import { Link } from 'react-router-dom';

import heroBg from '../assets/hero-bg.png';
import { HeroGallery } from '../components/home/HeroGallery';
import factoryBg from '../assets/factory-bg.png';

export const Home = () => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';
    const Arrow = isRTL ? ArrowLeft : ArrowRight;

    const highlights = [
        { icon: <ShieldCheck className="w-8 h-8 text-primary-light" />, title: t('highlights.quality'), desc: t('home.factory_desc') },
        { icon: <Award className="w-8 h-8 text-primary-light" />, title: t('highlights.safety'), desc: t('home.factory_desc') },
        { icon: <Smile className="w-8 h-8 text-primary-light" />, title: t('highlights.taste'), desc: t('home.products_desc') },
        { icon: <Zap className="w-8 h-8 text-primary-light" />, title: t('highlights.technology'), desc: t('home.factory_desc') },
    ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <div className=" flex items-center bg-neutral-100 dark:bg-neutral-900">

                <div className="absolute inset-0 opacity-80">

                    <img src={heroBg} alt="Hero Background" className="w-full h-full object-cover opacity-60" />
                    <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/90 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-80" />
                </div>

                <div className="container relative z-10 px-4 pb-[50px]">

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="max-w-3xl"
                    >
                        {/* <span className="inline-block py-1 px-3 rounded-full bg-primary/20 text-accent-cream border border-primary/30 mb-6 text-sm font-medium backdrop-blur-sm">
                            {t('hero.subtitle')}
                        </span> */}
                        <h1 className="text-xl md:text-5xl font-bold text-white mb-6 leading-tight">
                            {t('hero.title')}
                        </h1>
                        <p className="text-xl md:text-2xl text-neutral-200 mb-8 max-w-xl leading-relaxed">
                            {t('hero.description')}
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <Link to="/products">
                                <Button size="lg" className="group">
                                    {t('hero.cta')}
                                    <Arrow className="ml-2 rtl:mr-2 rtl:ml-0 w-5 h-5 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
                                </Button>
                            </Link>
                            <Link to="/contact">
                                <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-neutral-900 dark:hover:text-neutral-900">
                                    {t('common.contact_us')}
                                </Button>
                            </Link>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Highlights Section */}
            <Section className="bg-white dark:bg-neutral-900 relative z-20 pt-20 pb-16 rounded-t-[3rem]">
                <div className="container px-4 py-">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {highlights.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-neutral-50 dark:bg-neutral-800 p-8 rounded-2xl hover:shadow-xl transition-shadow border border-neutral-100 dark:border-neutral-700"
                            >
                                <div className="mb-4 bg-white dark:bg-neutral-700 w-16 h-16 rounded-xl flex items-center justify-center shadow-sm">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-3 dark:text-white">{item.title}</h3>
                                {/* <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                                    {item.desc}
                                </p> */}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Products Preview */}
            <Section className="bg-neutral-50 dark:bg-neutral-950">
                <div className="container px-4">
                    <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                        <div className="flex-1 order-2 md:order-1">
                            <div className="relative">
                                <HeroGallery />
                            </div>
                        </div>
                        <div className="flex-1 order-1 md:order-2">
                            <span className="text-primary-dark font-bold tracking-wider uppercase text-sm mb-2 block">{t('nav.products')}</span>
                            <h2 className="text-4xl font-bold mb-6 dark:text-white">{t('home.products_title')}</h2>
                            <p className="text-neutral-600 dark:text-neutral-300 text-lg mb-8 leading-relaxed">
                                {t('home.products_desc')}
                            </p>
                            <ul className="space-y-4 mb-8">
                                {['zabadiVanillia', 'zabadiCooki', 'zabadiStrw'].map((item) => (
                                    <li key={item} className="flex items-center gap-3 text-neutral-700 dark:text-neutral-300">
                                        <CheckCircle className="w-5 h-5 text-primary" />
                                        <span>{t(`home.products_${item}`)}</span>
                                    </li>
                                ))}
                            </ul>
                            <Link to="/products">
                                <Button variant="primary" size="lg">
                                    {t('common.view_products')}
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Factory Section */}
            <Section className="relative bg-primary-900 text-white overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                    <img src={factoryBg} alt="Factory" className="w-full h-full object-cover" />
                </div>
                <div className="container relative z-10 px-4">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl text-primary-light font-bold mb-6">{t('home.factory_title')}</h2>
                        <p className="text-xl text-primary-light mb-8 leading-relaxed">
                            {t('home.factory_desc')}
                        </p>
                        <Link to="/factory">
                            <Button variant="outline" className="text-primary-light  border-primary-light hover:bg-primary-light hover:text-white">
                                {t('common.learn_more')}
                            </Button>
                        </Link>
                    </div>
                </div>
            </Section>

            {/* CTA Section */}
            <Section className="bg-white dark:bg-neutral-900">
                <div className="container px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">{t('home.cta_title')}</h2>
                    <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-10 text-lg">
                        {t('home.cta_desc')}
                    </p>
                    <Link to="/contact">
                        <Button size="lg" className="px-12">
                            {t('common.contact_us')}
                        </Button>
                    </Link>
                </div>
            </Section>
        </div>
    );
};
