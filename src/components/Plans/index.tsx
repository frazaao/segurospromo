import Image from "next/image";
import styles from "./styles.module.css";
import Mockup from "/public/images/Mockup.webp";
import LinkButton from "../LinkButton";
import { useEffect, useState } from "react";
import { ListProps } from "../../@types/landingPage";

interface Props {
  data: ListProps;
}

export default function Plans({data}: Props) {

  const [width, setWidth] = useState(0);

  useEffect(() => {
      setWidth(window.innerWidth);  
  },[]);

  return (
    <section>
      <div className={styles.container}>
        { width > 900 && 
          <Image
            placeholder="blur"
            className={styles.mockup}
            src={Mockup}
            layout="intrinsic"
            alt="Ilustrações de aplicativos no notebook e no smartphone"
          /> 
        }
        <section className={styles.rightSection}>
          <span className={styles.title} dangerouslySetInnerHTML={{ __html: data.Title }}></span>
          <ul>
            { data.Steps.map((step, index) => {
              return (
                <li key={step.id}>
                  <strong>{index + 1}.</strong>
                  <p>{step.Title}</p>
                </li>
              )
            }) }
          </ul>
          <p className={styles.displayText} dangerouslySetInnerHTML={{ __html: data.Description }}></p>
          { width < 900 && 
            <Image
              placeholder="blur"
              className={styles.mockup}
              src={Mockup}
              layout="intrinsic"
              alt="Ilustrações de aplicativos no notebook e no smartphone"
            /> 
          }
          <LinkButton variant={data.Button.Variant} href={data.Button.Link}>{data.Button.Label}</LinkButton>
        </section>
      </div>
    </section>
  );
}
