import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Footer.module.css";
import { useForm } from "react-hook-form";

import Logo from "../public/assets/Logofooter.png";
import GPSLogo from "../public/assets/icons/Vectorgps.png";
import MailLogo from "../public/assets/icons/Vectormail.png";
import PhoneLogo from "../public/assets/icons/Vectorphone.png";
import RnBLogoFooter from "../public/assets/RednBlueLogoFooter.png";
import ToTop from "../public/assets/icons/Vectortop.png";

const Footer = () => {
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className={styles.footerContainer}>
      <div className={styles.siteMap}>
        <div className={styles.suggestionCard}>
          <div>
            <Image height={49.97} width={49.97} alt="logo footer" src={Logo} />
          </div>
          <p className={styles.suggestionCardP}>
            Somos una Familia en constante crecimiento y mejora, agradecemos su
            retroalimentacion
          </p>
          <div>
            <form className={styles.Form} onChange={handleSubmit(onSubmit)}>
              <input
                className={styles.input}
                defaultValue="Dinos lo que piensas de la pagina web!"
                {...register("search")}
              />
            </form>
          </div>
        </div>
        <ul className={styles.linksContainer}>
          <Link className={styles.footerLinks} href="/">
            Nosotros
          </Link>
          <Link className={styles.footerLinks} href="/">
            Servicios
          </Link>
          <Link className={styles.footerLinks} href="/">
            Contactanos
          </Link>
          <Link className={styles.footerLinks} href="/">
            Registro
          </Link>
          <Link className={styles.footerLinks} href="/">
            Portal
          </Link>
        </ul>
        <ul className={styles.linksContainer}>
          <Link className={styles.footerLinks} href="/">
            Preguntas frecuentes
          </Link>
          <Link className={styles.footerLinks} href="/">
            Ventajas de comprar por internet
          </Link>
          <Link className={styles.footerLinks} href="/">
            RednBlue Logistics
          </Link>
          <Link className={styles.footerLinks} href="/">
            Soporte tecnico
          </Link>
        </ul>
        <Image height={49} width={49} alt="to top" src={ToTop} />
      </div>
      <div className={styles.infoContainer}>
        <div className={styles.info}>
          <Image width={15.76} height={20} alt="GPS Logo" src={GPSLogo} />
          <div className={styles.infoContent}>
            Av. 6a oeste y calle G sur, David, Chiriqui, Panama.
          </div>
        </div>
        <div className={styles.info}>
          <Image width={19.96} height={20} alt="Phone Logo" src={PhoneLogo} />
          <div className={styles.infoContent}>+507 787-0022</div>
        </div>
        <div className={styles.info}>
          <Image width={21.33} height={15} alt="Mail Logo" src={MailLogo} />
          <div className={styles.infoContent}>info@rednbluepty.com</div>
        </div>
      </div>
      <div className={styles.logoCopyrigth}>
        <Image
          width={173.47}
          height={31.84}
          alt="RnB Logo"
          src={RnBLogoFooter}
        />
        <div className={styles.Copyrigth}>
          ©Copyright. Todos los derechos reservados RednBlue 2023
        </div>
      </div>
    </div>
  );
};

export default Footer;
