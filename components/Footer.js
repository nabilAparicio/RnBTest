import styles from "../styles/Footer.module.css";
const Footer = () => {
  return (
    <div className={styles.prueba}>
      <div className={styles.siteMap}>
        <div>
          <div>logo</div>
          <div> parrafo</div>
          <div> form</div>
        </div>
        <div> links</div>
        <div> links</div>
      </div>
      <div className={styles.info}>
        <div>ubicacion</div>
        <div>telefono</div>
        <div>correo</div>
      </div>
      <div className={styles.logoCopyrigth}>
        <div>logo</div>
        <div>Copyrigth</div>
      </div>
    </div>
  );
};

export default Footer;
