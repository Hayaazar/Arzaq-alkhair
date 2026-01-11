import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { Section } from '../components/ui/Section';
import { ShieldCheck, Award, Users, Globe, CheckCircle } from 'lucide-react';
import heroBg from '../assets/aboutUsbg.png';
import factory from '../assets/factoryDetails.png';

export const About = () => {
    const { t } = useTranslation();

    const stats = [
        { label: t('about.years'), value: '2017', icon: <Award className="w-8 h-8 text-primary" /> },
        { label: t('about.products_count'), value: '2 Lines', icon: <CheckCircle className="w-8 h-8 text-primary" /> },
        { label: t('about.employees'), value: '130+', icon: <Users className="w-8 h-8 text-primary" /> },
        { label: t('about.branches'), value: 'All Libya', icon: <Globe className="w-8 h-8 text-primary" /> },
    ];

    // const partners = [
    //     { name: 'Délice', logo: 'https://placehold.co/150x80/2E7D32/FFFFFF?text=Délice' },
    // ];

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <div className=" flex items-center bg-neutral-100 dark:bg-neutral-900 min-h-[70vh] pb-[100px]">
                <div className="absolute inset-0 opacity-40">
                    {/* Placeholder or reused background */}

                    <img src={heroBg} alt="About Background" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-r from-neutral-900/90 to-transparent" />
                    <div className="absolute inset-0 bg-gradient-to-t from-neutral-900 via-transparent to-transparent opacity-80" />
                </div>
                <div className="container relative z-10 px-4 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-4 text-primary-dark dark:text-primary-light"
                    >
                        {t('about.title')}
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-neutral-600 dark:text-neutral-300 max-w-xl mx-auto text-lg"
                    >
                        {t('hero.subtitle')}
                    </motion.p>
                </div>
            </div>

            {/* Intro Section */}
            <Section className="bg-white dark:bg-neutral-900 border-b border-neutral-100 dark:border-neutral-800 relative z-10">
                <div className="container px-4 py-20">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1">
                            <img
                                src={factory}
                                alt="About Arzaq"
                                className="rounded-2xl shadow-xl w-full"
                            />
                        </div>
                        <div className="flex-1">
                            <h2 className="text-3xl font-bold mb-6 text-neutral-900 dark:text-white">{t('about.intro_title')}</h2>
                            <p className="text-neutral-600 dark:text-neutral-300 text-lg leading-relaxed mb-6">
                                {t('about.intro_desc')}
                            </p>
                            <div className="grid grid-cols-1 xs:grid-cols-2 gap-6">
                                {stats.map((stat, index) => (
                                    <div key={index} className="bg-neutral-50 dark:bg-neutral-800 p-4 rounded-xl border border-neutral-100 dark:border-neutral-700">
                                        <div className="mb-2">{stat.icon}</div>
                                        <div className="text-2xl font-bold text-neutral-900 dark:text-white">{stat.value}</div>
                                        <div className="text-sm text-neutral-500 dark:text-neutral-400">{stat.label}</div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Mission & Vision */}
            <Section className="bg-neutral-50 dark:bg-neutral-950">
                <div className="container px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Mission */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-sm border-t-4 border-primary"
                        >
                            <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                <ShieldCheck className="w-8 h-8 text-primary" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 dark:text-white">{t('about.mission')}</h3>
                            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                                {t('about.mission_desc')}
                            </p>
                        </motion.div>

                        {/* Vision */}
                        <motion.div
                            whileHover={{ y: -5 }}
                            className="bg-white dark:bg-neutral-900 p-8 rounded-2xl shadow-sm border-t-4 border-secondary"
                        >
                            <div className="bg-secondary/10 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                                <Globe className="w-8 h-8 text-secondary" />
                            </div>
                            <h3 className="text-2xl font-bold mb-4 dark:text-white">{t('about.vision')}</h3>
                            <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                                {t('about.vision_desc')}
                            </p>
                        </motion.div>
                    </div>
                </div>
            </Section>

            {/* Partners */}
            <Section className="bg-white dark:bg-neutral-900">
                <div className="container px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4 dark:text-white">{t('about.partners_title')}</h2>
                    <p className="text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-12">
                        {t('about.partners_desc')}
                    </p>
                    {/* <div className="flex flex-wrap justify-center gap-8 md:gap-12 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
                        {partners.map((partner, index) => (
                            <img
                                key={index}
                                src={partner.logo}
                                alt={partner.name}
                                className="h-16 object-contain dark:invert"
                            />
                        ))}
                    </div> */}
                </div>
            </Section>
        </div>
    );
};
