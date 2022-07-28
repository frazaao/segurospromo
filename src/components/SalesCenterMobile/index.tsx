import Image from "next/image";
import SegurosPromo from "../../../public/images/SegurosPromoBlack.svg";
import LinkButton from "../LinkButton";
import Accordion from "../Accordion";
import styles from "./styles.module.css";

import * as I from "./helper";

export default function SalesCenterMobile() {
  return (
    <>
      <div className={styles.separator}>
        <div className={styles.green100}></div>
        <div className={styles.purple}></div>
        <div className={styles.yellow}></div>
        <div className={styles.green700}></div>
      </div>
      <section className={styles.container}>
        <Image src={SegurosPromo} alt="Logomarca Seguros Promo" />
        <div className={styles.socialNetworks}>
          <Image src={I.Facebook} alt="Logo do Facebook" />
          <Image src={I.Twitter} alt="Logo do Twitter" />
          <Image src={I.Instagram} alt="Logo do Instagram" />
        </div>
        <div className={styles.contacts}>
          <span>Central de vendas:</span>
          <LinkButton variant="mediumRounded" href="#">
            <Image src={I.Smartphone} alt="Ícone de smartphone" />
            (31) 4000-1667
          </LinkButton>
          <LinkButton variant="mediumRounded" href="#">
            <Image src={I.WhatsApp} alt="Ícone do WhatsApp" />
            (31) 98204-2542
          </LinkButton>
          <span>Atendimento:</span>
          <LinkButton variant="mediumRounded" href="#">
            <Image src={I.Smartphone} alt="Ícone de smartphone" />
            (31) 4000-1667
          </LinkButton>
          <LinkButton variant="mediumRounded" href="#">
            Central de Ajuda
          </LinkButton>
          <LinkButton className={styles.email} variant="mediumRounded" href="#">
            <Image src={I.Envelope} alt="Ícone de envelope" />
            <span>atendimento@segurospromo.com.br</span>
          </LinkButton>
        </div>
        <div className={styles.accordionContainer}>
          <Accordion variant="black" title="SEGUROS">
            <a href="#">Seguro Viagem América do Norte</a>
            <a href="#">Seguro Viagem Europa</a>
            <a href="#">Seguro Viagem América do Sul</a>
            <a href="#">Seguro Viagem América Central</a>
            <a href="#">Seguro Viagem África</a>
            <a href="#">Seguro Viagem Ásia</a>
            <a href="#">Seguro Viagem Internacional</a>
            <a href="#">Seguro Viagem Nacional</a>
            <a href="#">Seguro Viagem Oceania</a>
            <a href="#">Seguro Viagem Oriente Médio</a>
            <a href="#">Seguro Viagem Cruzeiro</a>
            <a href="#">Seguro de Vida</a>
          </Accordion>
          <Accordion variant="black" title="QUEM SOMOS" />
          <Accordion variant="black" title="SEGURADORAS" />
          <Accordion variant="black" title="BLOG" />
        </div>
        <div className={styles.payment}>
          <span>Formas de pagamento:</span>

          <p>Crédito em até 12 vezes</p>
          <div>
            <Image src={I.Mastercard} alt="Bandeira cartões mastercard" />
            <Image src={I.Visa} alt="Bandeira cartões Visa" />
            <Image src={I.American} alt="Bandeira cartões American Express" />
            <Image src={I.Elo} alt="Bandeira cartões Elo" />
            <Image src={I.Dinners} alt="Bandeira cartões Dinners club" />
            <Image src={I.Hypercard} alt="Bandeira cartões Hipercard" />
          </div>

          <p>Boleto bancário</p>
          <div>
            <Image src={I.Boleto} alt="Ícone de boleto" />
            <Image src={I.Desconto} alt="Ícone de 5% de desonto" />
          </div>

          <p>Tranferência bancária</p>
          <div>
            <Image src={I.Brasil} alt="Logo do Banco do Brasil" />
            <Image src={I.Bradesco} alt="Logo do banco Bradesco" />
            <Image src={I.Itau} alt="Logo do banco Itaú" />
            <Image src={I.Santander} alt="Logo do banco Santander" />
            <Image src={I.Original} alt="Logo do banco Original" />
            <Image src={I.Inter} alt="Logo do banco Inter" />
            <Image src={I.Bs2} alt="Logo do banco BS2" />
          </div>

          <p>Pagamento com pix</p>
          <div>
            <Image src={I.Pix} alt="Ícone do PIX" />
          </div>
        </div>
        <p>
          2XT | CNPJ: 73.690.653/0001-13 | Rua dos Timbiras, nº 1.532, 10º andar
          - Belo Horizonte - MG © 2017 Seguros Promo - Emitir Shop | By - 2XT
          Tecnologia
        </p>
        <Image src={I.Bitmap} alt="Associações parceiras" />
      </section>
    </>
  );
}
