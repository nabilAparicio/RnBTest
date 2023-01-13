import Image from "next/image";
import Link from "next/link";
import RNBlogo from "../public/assets/RNBLogo.png";
import HamburgerMenu from "../public/assets/icons/Vectormenu.png";
import styles from "../styles/Header.module.css";
import Navigation from "../components/Navigation";
import MobileNavigation from "./MobileNavigation";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        <div>
          <Image className={styles.RNBLogo} alt="RNB Logo" src={RNBlogo} />
        </div>
        <div className={styles.navigation}>
          <Navigation />
        </div>
        <div className={styles.buttons}>
          <Link href="/" className={styles.buttonContainer}>
            <div className={styles.buttonPortal}>Portal</div>
          </Link>
          <div className={styles.mobileNavigation}>
            <Image
              width={27}
              height={19}
              alt={"hamburger icon"}
              src={HamburgerMenu}
            />
            {/* <MobileNavigation /> */}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
