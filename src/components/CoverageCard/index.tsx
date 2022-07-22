import Image from "next/image";

import styles from "./styles.module.css";

interface Props {
  src: string;
  alt: string;
  title: string;
  description: string;
  href: string;
}

export default function CoverageCard({
  src,
  alt,
  title,
  description,
  href,
  ...props
}: Props) {
  return (
    <div className={styles.card} { ...props }>
      <Image src={src} alt={alt} width="62" height="48" />
      <span>{title}</span>
      <p>{description}</p>
      <a className={styles.btnCallToAction} href={href}>
        Saiba mais
      </a>
    </div>
  );
}
