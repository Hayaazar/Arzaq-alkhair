import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { Settings, ShieldCheck, FlaskConical, Truck, Award } from 'lucide-react';
import factoryBg from '../assets/hero-bg.png'; // Reusing factory bg
import factory from '../assets/factory.jpeg';
export const Factory = () => {
    const { t } = useTranslation();

    const standards = [
        {
            key: 'hygiene',
            icon: <ShieldCheck className="w-10 h-10 text-primary" />,
            title: t('factory_page.standards.hygiene'),
            desc: t('factory_page.standards.hygiene_desc')
        },
        {
            key: 'tech',
            icon: <Settings className="w-10 h-10 text-primary" />,
            title: t('factory_page.standards.tech'),
            desc: t('factory_page.standards.tech_desc')
        },
        {
            key: 'lab',
            icon: <FlaskConical className="w-10 h-10 text-primary" />,
            title: t('factory_page.standards.lab'),
            desc: t('factory_page.standards.lab_desc')
        },
    ];

    return (
        <div className="pt-20">
            {/* Header */}
            <div className=" flex items-center bg-neutral-100 dark:bg-neutral-900 min-h-[70vh] pb-[100px]">
                <div className="absolute inset-0 opacity-40">
                    <img src={factoryBg} alt="Factory" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/90 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-80" />
                </div>

                <div className="container relative z-10 px-4 text-center pb-24 sm:pb-32">


                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-4 text-primary-dark dark:text-primary-light"
                    >
                        {t('factory_page.title')}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-neutral-600 dark:text-neutral-300 max-w-xl mx-auto text-lg"
                    >
                        {t('factory_page.subtitle')}
                    </motion.p>
                </div>
            </div>

            {/* Overview */}
            <Section className="bg-white dark:bg-neutral-900">
                <div className="container px-4 py-36 ">
                    <div className="flex flex-col md:flex-row items-center gap-12">
                        <div className="flex-1">
                            <img
                                src={factory}
                                alt="Production Line"
                                className="rounded-2xl shadow-xl w-full"
                            />
                        </div>
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold mb-6 text-neutral-900 dark:text-white">
                                {t('factory_page.overview.title')}
                            </h2>
                            <p className="text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed">
                                {t('factory_page.overview.desc')}
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Standards */}
            <Section className="bg-neutral-50 dark:bg-neutral-950">
                <div className="container px-4">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold mb-4 dark:text-white">{t('factory_page.standards.title')}</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {standards.map((item, index) => (
                            <motion.div
                                key={item.key}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-800 text-center"
                            >
                                <div className="bg-primary/5 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                                    {item.icon}
                                </div>
                                <h3 className="text-xl font-bold mb-4 dark:text-white">{item.title}</h3>
                                <p className="text-neutral-600 dark:text-neutral-400">
                                    {item.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* Distribution */}
            <Section className="bg-white dark:bg-neutral-900">
                <div className="container px-4">
                    <div className="bg-secondary text-white rounded-3xl p-8 md:p-12 relative overflow-hidden">
                        <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
                            <div className="flex-1">
                                <h2 className="text-3xl font-bold mb-6">{t('factory_page.distribution.title')}</h2>
                                <p className="text-lg text-secondary-100 leading-relaxed">
                                    {t('factory_page.distribution.desc')}
                                </p>
                            </div>
                            <div className="flex-1 flex justify-center">
                                <Truck className="w-32 h-32 md:w-48 md:h-48 opacity-90" />
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Certifications - Simple strip */}
            <Section className="bg-neutral-50 dark:bg-neutral-950 py-12">
                <div className="container px-4 text-center">
                    <h3 className="text-xl font-bold mb-8 text-neutral-400 uppercase tracking-widest">{t('factory_page.certifications')}</h3>
                    <div className="flex justify-center gap-8 md:gap-16 opacity-60">
                        {[1, 2, 3, 4].map(i => (
                            <Award key={i} className="w-12 h-12 md:w-16 md:h-16 text-neutral-400" />
                        ))}
                    </div>
                </div>
            </Section>
        </div>
    );
};
