import Image from "next/image";
import Link from "next/link";
import RNBlogo from "../public/assets/RNBLogo.png";
import styles from "../styles/Header.module.css";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div>
          <Image width={217.91} height={40} alt="RNB Logo" src={RNBlogo} />
        </div>
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
        <Link href="/" className={styles.buttonContainer}>
          <div className={styles.buttonPortal}>Portal</div>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
