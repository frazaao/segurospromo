import Image from "next/image";
import { useEffect, useState } from "react";
import { HeroProps } from "../../@types/landingPage";
import BackgroundImage from "/public/images/Hero.webp";
import BackgroundImageMobile from "/public/images/HeroMobile.webp";
import LinkButton from "../LinkButton";
import styles from "./styles.module.css";

interface Props {
  data: HeroProps;
}

export default function Hero({ data }: Props) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <section className={styles.wrapper}>
      <Image
        placeholder="blur"
        sizes="100vw"
        src={width > 900 ? BackgroundImage : BackgroundImageMobile}
        alt="Uma família, um homem e uma mulher com seus filhos no campo"
      />

      <div className={styles.heroContent}>
        <h1 dangerouslySetInnerHTML={{ __html: data.Title }}></h1>

        <div className={styles.heroDescription}>
          <p dangerouslySetInnerHTML={{ __html: data.Description }}></p>

          <div className={styles.linkButton}>
            <LinkButton variant={data.Button.Variant} href={data.Button.Link}>
              {data.Button.Label}
            </LinkButton>
          </div>
        </div>
      </div>
      <div className={styles.whiteFade} />
    </section>
  );
}
