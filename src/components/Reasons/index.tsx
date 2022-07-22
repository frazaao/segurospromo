import styles from "./styles.module.css";
import Accordion from "../Accordion";
import Image from "next/image";
import ReasonsImage from "../../public/images/Reasons.png";
import LinkButton from "../LinkButton";
import { AccordionItems } from "../../pages";

interface Props{
  accordionItems: AccordionItems[]
}

export default function Reasons({ accordionItems }: Props) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <span className={styles.title}>Mas por que ter um seguro de vida?</span>
        <div className={styles.content}>
          <div className={styles.leftSide}>

            {accordionItems.map((item, index) => {
              return (
                <Accordion
                  key={index}
                  title={item.title}
                  content={item.text}
                />
              )
            })}
          </div>
          <div className={styles.centerSide}>
            <LinkButton href="#">Faça sua cotação</LinkButton>
          </div>
          <div className={styles.rightSide}>
            <Image
              src={ReasonsImage}
              alt="Um homem e uma mulher demonstrando afeto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
