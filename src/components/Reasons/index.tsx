import styles from "./styles.module.css";
import Accordion from "../Accordion";
import Image from "next/image";
import ReasonsImage from "/public/images/Reasons.webp";
import LinkButton from "../LinkButton";
import { AccordionItems } from "../../pages";
import { ReasonsProps } from "../../@types/landingPage";

interface Props {
  accordionItems: AccordionItems[];
  data: ReasonsProps;
}

export default function Reasons({ accordionItems, data }: Props) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <span className={styles.title}>{data.Title}</span>
        <div className={styles.content}>
          <div className={styles.leftSide}>
            {accordionItems.map((item, index) => {
              return (
                <Accordion key={index} title={item.title}>{item.text}</Accordion>
              );
            })}
          </div>
          <div className={styles.centerSide}>
            <LinkButton variant={data.Button.Variant} href={data.Button.Link}>
              {data.Button.Label}
            </LinkButton>
          </div>
          <div className={styles.rightSide}>
            <Image
              placeholder="blur"
              src={ReasonsImage}
              alt="Um homem e uma mulher demonstrando afeto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
