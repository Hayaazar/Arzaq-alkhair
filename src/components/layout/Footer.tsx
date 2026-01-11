import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

export const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-neutral-100 dark:bg-neutral-950 pt-16 pb-8 border-t border-neutral-200 dark:border-neutral-800">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h3 className="text-xl font-bold font-cairo text-primary">
                            {t('hero.title')}
                        </h3>
                        <p className="text-neutral-600 dark:text-neutral-400 text-sm leading-relaxed">
                            {t('hero.description')}
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="text-neutral-500 hover:text-primary transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-neutral-500 hover:text-primary transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-neutral-500 hover:text-primary transition-colors"><Instagram size={20} /></a>
                            <a href="#" className="text-neutral-500 hover:text-primary transition-colors"><Linkedin size={20} /></a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold mb-6 text-neutral-900 dark:text-white">{t('nav.home')}</h4>
                        <ul className="space-y-3 text-sm">
                            <li><Link to="/about" className="text-neutral-600 dark:text-neutral-400 hover:text-primary transition-colors">{t('nav.about')}</Link></li>
                            <li><Link to="/products" className="text-neutral-600 dark:text-neutral-400 hover:text-primary transition-colors">{t('nav.products')}</Link></li>
                            <li><Link to="/factory" className="text-neutral-600 dark:text-neutral-400 hover:text-primary transition-colors">{t('nav.factory')}</Link></li>
                            <li><Link to="/careers" className="text-neutral-600 dark:text-neutral-400 hover:text-primary transition-colors">{t('nav.careers')}</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-bold mb-6 text-neutral-900 dark:text-white">{t('nav.contact')}</h4>
                        <ul className="space-y-4 text-sm text-neutral-600 dark:text-neutral-400">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary shrink-0" />
                                <span>{t('contact.factory_label')}<br />{t('contact.factory_city')}</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <MapPin className="w-5 h-5 text-primary shrink-0" />
                                <span> {t('contact.hq_label')}<br />  {t('contact.hq_address')} </span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                                <div className="flex flex-col gap-1">
                                    <span dir="ltr">+218923049393</span>
                                    <span dir="ltr">+218913049393</span>
                                </div>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <span>info@arzaq.ly</span>
                            </li>
                        </ul>
                    </div>

                    {/* Newsletter (Optional Placeholder) */}
                    {/* <div>
                        <h4 className="font-bold mb-6 text-neutral-900 dark:text-white">Newsletter</h4>
                        <p className="text-sm text-neutral-600 dark:text-neutral-400 mb-4">Subscribe to our newsletter for latest updates.</p>
                        <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
                            <input
                                type="email"
                                placeholder="Email address"
                                className="flex-1 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary focus:border-transparent outline-none"
                            />
                            <button className="bg-primary text-white p-2 rounded-lg hover:bg-primary-dark transition-colors">
                                <Mail size={16} />
                            </button>
                        </form>
                    </div> */}
                </div>
                <div className="pt-8 border-t border-neutral-200 dark:border-neutral-800 text-center text-sm text-neutral-500">
                    <p>{t('common.copyright')}</p>
                </div>
            </div>
        </footer>
    );
};
