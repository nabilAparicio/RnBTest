import styles from "../styles/Main.module.css";
import { useSelector } from "react-redux";
import MainCard from "./MainCard";
import { Pages } from "../json/Pages";
import Link from "next/link";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Main = () => {
  const Search = useSelector((state) => state.SearchSlice);
  const notFound = Pages.filter((Page) =>
    Page.name.toLowerCase().includes(Search.search)
  );
  return (
    <>
      <div className={styles.mainContainer}>
        {notFound.length === 0 ? (
          <div>Pagina no encontrada lo siento :c</div>
        ) : (
          Pages.filter((Page) =>
            Page.name.toLowerCase().includes(Search.search)
          ).map((Page) => <MainCard Page={Page} key={Page.id} />)
        )}
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
