import Image from "next/image";
import { useEffect, useState } from "react";
import BackgroundImage from "../../public/images/Hero.jpg";
import BackgroundImageMobile from "../../public/images/HeroMobile.jpg";
import LinkButton from "../LinkButton";
import styles from "./styles.module.css";

export default function Hero() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <section className={styles.wrapper}>
      <Image
        sizes="100vw"
        src={width > 900 ? BackgroundImage : BackgroundImageMobile}
        alt="Uma família, um homem e uma mulher com seus filhos no campo"
      />

      <div className={styles.heroContent}>
        <h1>
          Tranquilidade para
          <br />
          viver mais
        </h1>

        <div className={styles.heroDescription}>
          <p>
            Viva mais e melhor com os benefícios
            <br />
            que um serguro de vida te oferece
          </p>
          <div className={styles.linkButton}>
            <LinkButton href="#">Faça sua cotação</LinkButton>
          </div>
        </div>
      </div>
      <div className={styles.whiteFade} />
    </section>
  );
}
