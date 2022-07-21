import { ReactNode } from "react";
import styles from './styles.module.css';

interface Props {
    href: string;
    variant?: 'thin' | 'bold';
    children: ReactNode,
    className?: string;
}

export default function LinkButton({ href, children, variant = "bold", className, ...props }: Props){
    return (
        <a 
            className={`${styles.linkButton} ${className} ${variant === 'bold' ? styles.fontBold : styles.fontThin}`} 
            href={href} { ...props }
        >
            {children}
        </a>
    )
}