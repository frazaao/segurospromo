import styles from './styles.module.css';
import SmartphoneIcon from '/public/icons/Smartphone.svg'
import WhatsAppIcon from '/public/icons/WhatsApp.svg'
import Image from 'next/image';

export default function TopAdvertisement() {
    return (
        <section className={styles.wrapper}>
            <span className={styles.uppercase}>Central de vendas</span>
            <a href="#"><Image src={SmartphoneIcon} alt="Ícone de smartphone" /> <span>(31) 4000-1667</span></a>
            <a href="#"><Image src={WhatsAppIcon} alt="Ícone do WhatsApp" /> <span>(31) 2534-2115</span></a>
        </section>
    )
}