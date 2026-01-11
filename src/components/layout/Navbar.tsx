import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X, Sun, Moon, Globe } from 'lucide-react';
import { Button } from '../ui/Button';
import { cn } from '../../utils/cn';
import { useTheme } from '../../hooks/useTheme';
import logo from '../../assets/bg-11296a5d-527e-4d3e-8020-1c0a8116bfce.png';
export const Navbar = () => {
    const { t, i18n } = useTranslation();
    const { theme, toggleTheme } = useTheme();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Handle language switch
    const toggleLanguage = () => {
        const newLang = i18n.language === 'ar' ? 'en' : 'ar';
        i18n.changeLanguage(newLang);
    };



    // Sticky navbar effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: t('nav.home'), path: '/' },
        { name: t('nav.about'), path: '/about' },
        { name: t('nav.products'), path: '/products' },
        { name: t('nav.factory'), path: '/factory' },
        { name: t('nav.careers'), path: '/careers' },
    ];

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled
                    ? "bg-white/90 dark:bg-neutral-900/90 backdrop-blur-lg shadow-sm border-b border-neutral-200 dark:border-neutral-800"
                    : "bg-transparent py-2"
            )}
        >
            <div className="container mx-auto px-4 md:px-6">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
                        <div className="relative shrink-0">
                            <img
                                src={logo}
                                alt="Arzaq Logo"
                                className="w-12 h-12 md:w-16 md:h-20 object-contain transition-transform duration-300 group-hover:scale-110 drop-shadow-md"
                            />
                        </div>
                        <span className={cn(
                            "font-cairo font-bold text-lg md:text-xl truncate max-w-[150px] sm:max-w-none",
                            isScrolled ? "text-neutral-900 dark:text-white" : "text-neutral-900 dark:text-white"
                        )}>
                            {t('hero.title2')}
                        </span>
                    </Link>

                    {/* Desktop Nav */}
                    <div className="hidden md:flex items-center gap-8">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                className={({ isActive }) => cn(
                                    "text-sm font-medium transition-colors hover:text-primary",
                                    isActive ? "text-primary font-bold" : "text-neutral-600 dark:text-neutral-300"
                                )}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                    </div>

                    {/* Actions */}
                    <div className="hidden md:flex items-center gap-2">
                        <button
                            onClick={toggleLanguage}
                            className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                            title={t('nav.language')}
                        >
                            <Globe className="w-5 h-5" />
                        </button>

                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                        >
                            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>
                        <Link to="/contact">
                            <Button size="sm" className="bg-[#2e7d32] hover:bg-[#1b5e20] text-white border-none">
                                {t('common.contact_us')}
                            </Button>
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-2">
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                        >
                            {theme === 'dark' ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
                        </button>
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="p-2 rounded-lg hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-white"
                        >
                            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="md:hidden bg-white dark:bg-neutral-900 border-b border-neutral-200 dark:border-neutral-800 animate-fade-in absolute w-full left-0 top-16 shadow-lg">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navLinks.map((link) => (
                            <NavLink
                                key={link.path}
                                to={link.path}
                                onClick={() => setIsMenuOpen(false)}
                                className={({ isActive }) => cn(
                                    "block px-3 py-3 rounded-lg text-base font-medium transition-colors",
                                    isActive
                                        ? "bg-primary/10 text-primary"
                                        : "text-neutral-600 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800"
                                )}
                            >
                                {link.name}
                            </NavLink>
                        ))}
                        <div className="pt-4 border-t border-neutral-200 dark:border-neutral-800 flex items-center justify-between px-3">
                            <span className="text-sm font-medium text-neutral-500">{t('nav.language')}</span>
                            <Button variant="ghost" size="sm" onClick={toggleLanguage} className="gap-2">
                                <Globe className="w-4 h-4" />
                                {i18n.language === 'ar' ? 'English' : 'العربية'}
                            </Button>
                        </div>

                        <div className="pt-2 px-3">
                            <Link to="/contact" onClick={() => setIsMenuOpen(false)}>
                                <Button className="w-full">
                                    {t('common.contact_us')}
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};
