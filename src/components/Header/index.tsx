import Image from 'next/image';
import styles from './styles.module.css';
import Logo from '../../public/images/SegurosPromo.svg';
import User from '../../public/icons/User.svg';
import ArrowRight from '../../public/icons/ArrowRight.svg';

export default function Header() {

    return (
        <header className={styles.wrapper}>
            <div className={styles.container}>
                <picture>
                    <Image src={Logo} alt="Logomarca S seguros promo" />
                </picture>
                <nav>
                    <ul className={styles.navigation}>
                        <li><a className={styles.btnOutline} href="#">Seguro de Vida</a></li>
                        <li><a href="#">Multi-trip</a></li>
                        <li><a href="#">Atendimento</a></li>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">Afiliadas</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                </nav>
                <div className={styles.areaCliente}>
                    <Image src={User} alt="Ícone de usuário" />
                    <a href="#">Área do cliente</a>
                    <Image className={styles.arrowRight} src={ArrowRight} alt="Ícone de seta para a direita" />
                </div>
            </div>
        </header>
    )

}