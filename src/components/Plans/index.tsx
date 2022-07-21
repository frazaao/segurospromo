import Image from "next/image";
import styles from "./styles.module.css";
import Mockup from "../../public/images/Mockup.png";
import LinkButton from "../LinkButton";

export default function Plans() {
  return (
    <section>
      <div className={styles.container}>
        <Image
          className={styles.mockup}
          src={Mockup}
          layout="intrinsic"
          alt="Ilustrações de aplicativos no notebook e no smartphone"
        />
        <section className={styles.rightSection}>
          <span className={styles.title}>
            Planos personalizados
            <br />e sem burocracia
          </span>
          <ul>
            <li>
              <strong>1.</strong>
              <p>Informe seus dados</p>
            </li>
            <li>
              <strong>2.</strong>
              <p>Descubra o plano ideal para o seu perfil</p>
            </li>
            <li>
              <strong>3.</strong>
              <p>
                Escolha sua forma de pagamento e contrate
                <br /> 100% online
              </p>
            </li>
          </ul>
          <p className={styles.displayText}>
            Pronto! Agora você e sua família têm todos <br /> os benefícios de
            viver com segurança total
          </p>
          <LinkButton href="#">Faça sua cotação</LinkButton>
        </section>
      </div>
    </section>
  );
}
