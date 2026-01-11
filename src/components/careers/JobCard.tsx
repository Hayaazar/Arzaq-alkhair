import React from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import type { Job } from '../../types';
import { MapPin, Briefcase, ArrowRight, ArrowLeft } from 'lucide-react';
import { Button } from '../ui/Button';

interface JobCardProps {
    job: Job;
}

export const JobCard: React.FC<JobCardProps> = ({ job }) => {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';
    const Arrow = isRTL ? ArrowLeft : ArrowRight;

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-neutral-800 p-6 rounded-2xl shadow-sm border border-neutral-100 dark:border-neutral-700 hover:shadow-md transition-all flex flex-col md:flex-row justify-between items-start md:items-center gap-6"
        >
            <div>
                <h3 className="text-xl font-bold mb-2 text-neutral-900 dark:text-white">
                    {job.title}
                </h3>
                <div className="flex flex-wrap gap-4 text-sm text-neutral-500 dark:text-neutral-400 mb-4">
                    <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        <span>{job.location}</span>
                    </div>
                    <div className="flex items-center gap-1">
                        <Briefcase className="w-4 h-4" />
                        <span>{job.type}</span>
                    </div>
                    <span className="bg-primary/10 text-primary px-2 py-0.5 rounded text-xs font-semibold self-center">
                        {job.department}
                    </span>
                </div>
                <p className="text-neutral-600 dark:text-neutral-300 max-w-2xl">
                    {job.description}
                </p>
            </div>

            <Button className="shrink-0 group">
                {t('careers_page.job_card.apply')}
                <Arrow className="ml-2 rtl:mr-2 rtl:ml-0 w-4 h-4 transition-transform group-hover:translate-x-1 rtl:group-hover:-translate-x-1" />
            </Button>
        </motion.div>
    );
};
