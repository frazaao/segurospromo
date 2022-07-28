import styles from './styles.module.css'
import Image from "next/image";

import ChevronDown from "/public/icons/ChevronDown.svg";
import { useState, ReactNode } from 'react';

interface Props {
    title: string;
    children?: ReactNode;
    variant?: 'normal' | 'black'
}

export default function Accordion({ title, variant = 'normal', children, ...props }: Props){

    const [ isOpen, setIsOpen ] = useState(false);

    return(
        <div className={`${styles.accordionItem} ${variant == 'black' && styles.black}`} { ...props }>
            <div className={`${styles.accordionTitle} ${isOpen ? styles.active : null}`} onClick={() => setIsOpen(!isOpen)}>
            <span>{title}</span>
            <Image src={ChevronDown} alt="Íconde de seta para baixo" />
            </div>
            <p className={`${styles.accordionContent} ${isOpen ? styles.active : null}`} >
            { children }
            </p>
        </div>
    )
}