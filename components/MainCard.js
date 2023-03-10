import styles from "../styles/MainCard.module.css";
import Image from "next/image";
import Link from "next/link";
const MainCard = ({ Page }) => {
  return (
    <div className={styles.allCardContainer}>
      <div className={styles.imageContainer}>
        <ul className={styles.categoriesContainer}>
          {Page.categories.map((category) =>
            category === "Popular" ? (
              <li className={styles.popularCategory} key={category}>
                {"⭐ " + category}
              </li>
            ) : (
              <li className={styles.category} key={category}>
                {category}
              </li>
            )
          )}
        </ul>
        <Image
          className={styles.cardImage}
          width={Page.image.width}
          height={100}
          alt={Page.name}
          src={Page.image.url}
        />
        <p className={styles.storeDescription}>{Page.description}</p>
      </div>
      <div className={styles.infoContainer}>
        <h2 className={styles.PageName}>{Page.name}</h2>
        <p className={styles.Website}>{Page.site}</p>
        <div className={styles.Links}>
          <Link className={styles.verInfo} href={"/"}>
            {"ver info >"}
          </Link>
          <Link className={styles.verOfertas} href={"/"}>
            {"ver ofertas >"}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
