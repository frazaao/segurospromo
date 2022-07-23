import Image from "next/image";
import styles from "./styles.module.css";
import ContactImage from "/public/images/Contact.webp";
import ContactImageMobile from "/public/images/ContactMobile.webp";
import TelephoneIcon from "/public/icons/Phone.svg";
import WhatsAppIcon from "/public/icons/WhatsAppStroke.svg";
import LinkButton from "../LinkButton";
import { useState, useEffect } from "react";
import { ContactProps } from "../../@types/landingPage";

interface Props {
  data: ContactProps;
}

export default function Contact({ data }: Props) {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    setWidth(window.innerWidth);
  }, []);

  return (
    <section className={styles.wrapper}>
      <Image
        placeholder="blur"
        style={imageStyle}
        className={styles.imageBackground}
        src={width > 900 ? ContactImage : ContactImageMobile}
        sizes="100vw"
        alt="Imagem de mulher usando notebook"
      />
      <div className={styles.container}>
        <div className={styles.leftSide}>
          <span
            className={styles.title}
            dangerouslySetInnerHTML={{ __html: data.Title }}
          ></span>
        </div>
        <div className={styles.rightSide}>
          <div className={styles.topInformation}>
            <p dangerouslySetInnerHTML={{ __html: data.CallToAction }}></p>
            <a
              className={styles.telephoneInfo}
              href={`tel:${data.PhoneNumber}`}
            >
              <Image src={TelephoneIcon} alt="Ícone de telefone" />
              <span>{data.PhoneNumber}</span>
            </a>
            <LinkButton
              className={styles.linkButton}
              variant={data.ButtonWhatsApp.Variant}
              href={data.ButtonWhatsApp.Link}
            >
              <Image src={WhatsAppIcon} alt="Ícone do WhatsApp" />
              {data.ButtonWhatsApp.Label}
            </LinkButton>
          </div>
          <div className={styles.bottomInformation}>
            <p>{data.OpeningHours}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

const imageStyle = {
  display: "none",
};
