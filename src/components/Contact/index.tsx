import Image from 'next/image'
import styles from './styles.module.css'
import ContactImage from '../../public/images/Contact.jpg'
import ContactImageMobile from '../../public/images/ContactMobile.jpg'
import TelephoneIcon from '../../public/icons/Phone.svg'
import WhatsAppIcon from '../../public/icons/WhatsAppStroke.svg'
import LinkButton from '../LinkButton'
import { useState, useEffect } from 'react'

export default function Contact(){

    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(window.innerWidth);  
    },[]);

    return(
        <section className={styles.wrapper}>
            <Image style={imageStyle} className={styles.imageBackground} src={width > 900 ? ContactImage : ContactImageMobile} sizes="100vw" alt="Imagem de mulher usando notebook" />
            <div className={styles.container}>
                <div className={styles.leftSide}>
                    <span className={styles.title}>Ainda não sabe qual<br/> seguro contratar?</span>
                </div>
                <div className={styles.rightSide}>
                    <div className={styles.topInformation}>
                        <p>Ligue pra gente e receba uma consultoria<br/>personalizada gratuitamente!</p>
                        <a className={styles.telephoneInfo} href="tel:(99)999999999"><Image src={TelephoneIcon} alt="Ícone de telefone" /><span>(99) 99999.9999</span></a>
                        <LinkButton className={ styles.linkButton } variant="thin" href="#"><Image src={WhatsAppIcon} alt="Ícone do WhatsApp" />Se preferir, entre em contato pelo WhatsApp</LinkButton>
                    </div>
                    <div className={styles.bottomInformation}>
                        <p>Atendemos pelo telefone de seg. a sex., das 9h às 17h</p>
                    </div>
                </div>                
            </div>
        </section>
    )
}

const imageStyle = {
    display: 'none',
}