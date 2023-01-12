import styles from "../styles/Main.module.css";
import MainCard from "./MainCard";
import { Pages } from "../json/Pages";
import Link from "next/link";
const Main = () => {
  console.log(Pages);
  return (
    <>
      <div className={styles.mainContainer}>
        {Pages.map((Page) => (
          <MainCard Page={Page} key={Page.id} />
        ))}
      </div>
      <div className={styles.verMasContainer}>
        <Link href={"/"} className={styles.verMas}>
          {"Ver Mas"}
        </Link>
      </div>
    </>
  );
};

export default Main;
