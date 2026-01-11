import { cn } from '../../utils/cn';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
    className?: string;
    children: React.ReactNode;
}

export const Section = ({ className, children, ...props }: SectionProps) => (
    <section className={cn("py-16 md:py-24", className)} {...props}>
        {children}
    </section>
);
