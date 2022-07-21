import styles from "./styles.module.css";
import Accordion from "../Accordion";

export default function Reasons() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <span className={styles.title}>Mas por que ter um seguro de vida?</span>
        <div className={styles.content}>
          <div className={styles.leftSide}>
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
          <div className={styles.centerSide}></div>
          <div className={styles.rightSide}></div>
        </div>
      </div>
    </section>
  );
}
