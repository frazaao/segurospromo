import CoverageCard from "../CoverageCard";
import styles from "./styles.module.css";
import Angel from "../../public/icons/Angel.svg";
import LinkButton from "../LinkButton";

export default function Coverage() {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <span className={styles.title}>Nossas coberturas</span>
        <p className={styles.subtitle}>Veja mais detalhes de cada proteção!</p>
        <div className={styles.cardContainer}>
          <CoverageCard
            src={Angel}
            alt="Ícone de anjo"
            title="Morte"
            description="Se você vier a faltar por causa de um acidente ou doença, a pessoa que você escolheu como beneficiário receberá o valor contratado."
            href="#"
          />
          <CoverageCard 
            src={Angel}
            alt="Ícone de anjo"
            title="Morte"
            description="Se você vier a faltar por causa de um acidente ou doença, a pessoa que você escolheu como beneficiário receberá o valor contratado."
            href="#"
          />
          <CoverageCard 
            src={Angel}
            alt="Ícone de anjo"
            title="Morte"
            description="Se você vier a faltar por causa de um acidente ou doença, a pessoa que você escolheu como beneficiário receberá o valor contratado."
            href="#"
          />
        </div>
        <LinkButton href="#">Faça sua cotação</LinkButton>
      </div>
    </section>
  );
}
