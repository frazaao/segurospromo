import CoverageCard from "../CoverageCard";
import styles from "./styles.module.css";
import LinkButton from "../LinkButton";
import { CoverageProps } from "../../@types/landingPage";

interface Props {
  data: CoverageProps;
}

export default function Coverage({ data }: Props) {
  return (
    <section className={styles.wrapper}>
      <div className={styles.container}>
        <span className={styles.title}>{data.Title}</span>
        <p className={styles.subtitle}>{data.Subtitle}</p>
        <div className={styles.cardContainer}>
          {data.CoverageCard.map((card, index) => {
            return (
              <CoverageCard
                key={index}
                src={`https://amopromo.herokuapp.com${card.Icon.data.attributes.url}`}
                alt={card.Icon.data.attributes.alternativeText}
                title={card.Title}
                description={card.Description}
                href={card.Description}
              />
            );
          })}
        </div>
        <LinkButton variant={data.Button.Variant} href={data.Button.Link}>
          {data.Button.Label}
        </LinkButton>
      </div>
    </section>
  );
}
