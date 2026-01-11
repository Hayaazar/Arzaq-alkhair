import { useTranslation } from 'react-i18next';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '../components/ui/Button';
import { Input, Textarea } from '../components/ui/Input';

export const Contact = () => {
    const { t, i18n } = useTranslation();

    const contactInfo = [
        {
            icon: <MapPin className="w-6 h-6 text-primary" />,
            title: "HQ",
            value: [t('contact.hq_address')],
            link: t('contact.hq_map_link')
        },
        {
            icon: <MapPin className="w-6 h-6 text-primary" />,
            title: t('factory_page.title'),
            value: [t('contact.factory_address')],
            link: t('contact.factory_map_link')
        },
        {
            icon: <Phone className="w-6 h-6 text-primary" />,
            title: t('contact.phone'),
            value: ["+218913049393", "+218923049393"],
            dir: 'ltr'
        },
        { icon: <Mail className="w-6 h-6 text-primary" />, title: t('contact.email_label'), value: ["info@arzaq.ly"] },
    ];

    return (
        <div className="bg-white dark:bg-neutral-900">
            {/* Header */}
            <div className="bg-primary py-20 lg:py-28 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-primary-900 to-primary opacity-50" />
                <div className="container relative z-10 px-4 text-center text-white">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">{t('contact.get_in_touch')}</h1>
                    <p className="text-primary-100 max-w-xl mx-auto text-lg">{t('home.cta_desc')}</p>
                </div>
            </div>

            <div className="container px-4 -mt-16 pb-20 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {/* Info Cards */}
                    <div className="lg:col-span-1 space-y-4">
                        {contactInfo.map((item, index) => (
                            <div key={index} className="bg-white dark:bg-neutral-800 p-6 rounded-xl shadow-lg border border-neutral-100 dark:border-neutral-700 flex items-start gap-4">
                                <div className="bg-primary/10 p-3 rounded-lg shrink-0">
                                    {item.icon}
                                </div>
                                <div>
                                    <h3 className="font-bold text-neutral-900 dark:text-white mb-1">{item.title}</h3>
                                    <div className="space-y-1">
                                        {(item.value as string[]).map((val, idx) => (
                                            <p key={idx} className="text-neutral-600 dark:text-neutral-400 text-sm" dir={item.dir || (i18n.language === 'ar' ? 'rtl' : 'ltr')}>{val}</p>
                                        ))}
                                        {item.link && (
                                            <a
                                                href={item.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="text-primary text-xs font-medium hover:underline mt-2 inline-block"
                                            >
                                                {t('contact.view_on_map')}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Form */}
                    <div className="lg:col-span-2 bg-white dark:bg-neutral-800 p-8 rounded-2xl shadow-xl border border-neutral-100 dark:border-neutral-700">
                        <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{t('contact.name')}</label>
                                    <Input placeholder={t('contact.name')} />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{t('contact.email')}</label>
                                    <Input type="email" placeholder={t('contact.email')} />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{t('contact.subject')}</label>
                                <Input placeholder={t('contact.subject')} />
                            </div>
                            <div className="space-y-2">
                                <label className="text-sm font-medium text-neutral-700 dark:text-neutral-300">{t('contact.message')}</label>
                                <Textarea placeholder={t('contact.message')} rows={5} />
                            </div>
                            <Button className="w-full md:w-auto min-w-[200px]" size="lg">
                                {t('contact.send')}
                                <Send className="ml-2 rtl:ml-0 rtl:mr-2 w-4 h-4" />
                            </Button>
                        </form>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 h-[450px] w-full">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3350.551690022379!2d13.136896275494498!3d32.88358457361879!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzLCvDUzJzAwLjkiTiAxM8KwMDgnMjIuMSJF!5e0!3m2!1sen!2sly!4v1735509749543!5m2!1sen!2sly"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="HQ Location"
                ></iframe>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3368.17585350927!2d14.536787!3d32.41444599999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMzLCvDI0JzUyLjAiTiAxNMKwMzInMTIuNCJF!5e0!3m2!1sen!2sly!4v1735509838186!5m2!1sen!2sly"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Factory Location"
                ></iframe>
            </div>
        </div>
    )
}
