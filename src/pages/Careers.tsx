import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Button } from '../components/ui/Button';
import { Section } from '../components/ui/Section';
import { TrendingUp, Users, DollarSign } from 'lucide-react';
import heroBg from '../assets/hero-bg2.png'; // Reusing hero-bg for now, ideally specific about bg


export const Careers = () => {
    const { t } = useTranslation();

    const benefits = [
        { key: 'growth', icon: <TrendingUp className="w-8 h-8 text-secondary" /> },
        { key: 'environment', icon: <Users className="w-8 h-8 text-secondary" /> },
        { key: 'rewards', icon: <DollarSign className="w-8 h-8 text-secondary" /> },
    ];

    return (
        <div className="pt-20">
            {/* Header */}
            <div className=" flex items-center bg-neutral-100 dark:bg-neutral-900 min-h-[70vh] pb-[100px]">
                <div className="absolute inset-0 opacity-40">
                    {/* Placeholder or reused background */}
                    <img src={heroBg} alt="About Background" className="w-full h-full object-cover" />

                    <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/90 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-80" />
                </div>
                <div className="container relative z-10 px-4 text-center">

                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-4 text-primary-dark dark:text-primary-light"
                    >
                        {t('careers_page.title')}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.1 }}
                        className="text-neutral-600 dark:text-neutral-300 max-w-xl mx-auto text-lg"
                    >
                        {t('careers_page.subtitle')}
                    </motion.p>
                </div>
            </div>

            {/* Intro / Benefits */}
            <Section className="bg-white dark:bg-neutral-950 min-h-screen">
                <div className="container px-4 py-36">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold mb-4 dark:text-white">{t('careers_page.intro.title')}</h2>
                        <p className="text-neutral-600 dark:text-neutral-300 text-lg">
                            {t('careers_page.intro.desc')}
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                        {benefits.map((item, index) => (
                            <motion.div
                                key={item.key}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-neutral-50 dark:bg-neutral-800 p-8 rounded-2xl text-center border border-neutral-100 dark:border-neutral-700"
                            >
                                <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                                    {t(`careers_page.benefits.${item.key}`)}
                                </h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Contact Us CTA */}
            <Section className="bg-neutral-50 dark:bg-neutral-900">
                <div className="container px-4 text-center py-20">
                    <h2 className="text-3xl font-bold mb-6 dark:text-white">{t('careers_page.openings_title')}</h2>
                    <p className="text-lg text-neutral-600 dark:text-neutral-400 mb-10 max-w-2xl mx-auto">
                        {t('home.cta_desc')}
                    </p>
                    <Button size="lg" onClick={() => window.location.href = '/contact'} className="min-w-[200px]">
                        {t('common.contact_us')}
                    </Button>
                </div>
            </Section>
        </div>
    );
};
