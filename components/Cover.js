import styles from "../styles/Cover.module.css";
import Image from "next/image";
import { useForm } from "react-hook-form";

import SearchIcon from "../public/assets/icons/search.png";
import CrossIcon from "../public/assets/icons/cross.png";
import BackGround from "../public/assets/logosburbujas.png";
const Cover = () => {
  const { register, handleSubmit, watch } = useForm();
  const onSubmit = (data) => console.log(data);

  console.log(watch("example")); // watch input value by passing the name of it

  return (
    <div className={styles.coverContainer}>
      <Image
        className={styles.BackGroundImage}
        alt="Background image"
        src={BackGround}
      />
      <div className={styles.titleContainer}>
        <h2 className={styles.title}>Tiendas con las que trabajamos</h2>
        <p className={styles.description}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo nisi
          cumque aliquid voluptatem ullam aut doloremque illum qui autem esse
          inventore, vero, recusandae eaque ducimus delectus at
        </p>
      </div>
      <div className={styles.searchContainer}>
        <form className={styles.Form} onChange={handleSubmit(onSubmit)}>
          <div className={styles.searchIcon}>
            <Image
              width={25}
              height={25.5}
              alt="search"
              src={SearchIcon}
            ></Image>
          </div>
          <div className={styles.crossIcon}>
            <Image width={25} height={25.5} alt="cross" src={CrossIcon}></Image>
          </div>
          <input
            className={styles.input}
            defaultValue="Amazon"
            {...register("search")}
          />
        </form>
      </div>
    </div>
  );
};

export default Cover;
