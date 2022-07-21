import { ReactNode } from "react";
import styles from './styles.module.css';

interface Props {
    href: string;
    children: ReactNode
}

export default function LinkButton({ href, children, ...props }: Props){
    return <a className={styles.linkButton} href={href} { ...props }>{children}</a>
}