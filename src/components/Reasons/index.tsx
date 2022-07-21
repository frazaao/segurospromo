import styles from "./styles.module.css";
import Accordion from "../Accordion";
import Image from "next/image";
import ReasonsImage from "../../public/images/Reasons.png";
import LinkButton from "../LinkButton";

export default function Reasons() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <span className={styles.title}>Mas por que ter um seguro de vida?</span>
        <div className={styles.content}>
          <div className={styles.leftSide}>
            <Accordion
              title="Custo-benefício"
              content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sollicitudin luctus malesuada. Curabitur vestibulum sagittis iaculis. Phasellus quis lobortis neque, mattis viverra augue. Etiam bibendum, sem vel faucibus finibus, ante dui finibus urna, sed gravida nisi lectus ac metus. Sed consequat lacinia nisl. Morbi in arcu risus. Phasellus pulvinar sed odio at scelerisque. Mauris."
            />

            <Accordion
              title="Custo-benefício"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              quaerat quis, necessitatibus repudiandae temporibus sed."
            />

            <Accordion
              title="Custo-benefício"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              quaerat quis, necessitatibus repudiandae temporibus sed."
            />

            <Accordion
              title="Custo-benefício"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              quaerat quis, necessitatibus repudiandae temporibus sed."
            />

            <Accordion
              title="Custo-benefício"
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
              quaerat quis, necessitatibus repudiandae temporibus sed."
            />
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
