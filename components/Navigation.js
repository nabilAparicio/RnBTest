import Link from "next/link";
import styles from "../styles/Navigation.module.css";

const Navigation = () => {
  return (
    <div className={styles.navLinksContainer}>
      <Link className={styles.navLinks} href="/">
        Nosotros
      </Link>
      <Link className={styles.navLinks} href="/">
        Servicios
      </Link>
      <Link className={styles.navLinks} href="/">
        Contáctanos
      </Link>
      <Link className={styles.navLinks} href="/">
        Registrate
      </Link>
      <Link className={styles.navLinks} href="/">
        Pasantias RNB
      </Link>
    </div>
  );
};

export default Navigation;
