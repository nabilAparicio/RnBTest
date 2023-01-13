import styles from "../styles/Cover.module.css";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { setSearch } from "../store/slice/Search.slice";

import SearchIcon from "../public/assets/icons/search.png";
import CrossIcon from "../public/assets/icons/cross.png";
import BackGround from "../public/assets/logosburbujas.png";
import MobileBackGround from "../public/assets/bgMobile.png";
import VectorMobileBackGround from "../public/assets/Vector(5).png";
const Cover = () => {
  const dispatch = useDispatch();

  const [defaultFormValue, setdefaultFormValue] = useState("Amazon");

  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => dispatch(setSearch(data));
  return (
    <div className={styles.coverContainer}>
      <Image
        className={styles.BackGroundImage}
        alt="Background image"
        src={BackGround}
      />
      <Image
        className={styles.mobileBackGroundImage}
        alt="Background image"
        src={MobileBackGround}
      />
      <Image
        className={styles.mobileBackGroundImage}
        alt="Background image"
        src={VectorMobileBackGround}
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
        <div onClick={handleSubmit(onSubmit)} className={styles.searchIcon}>
          <Image width={25} height={25.5} alt="search" src={SearchIcon}></Image>
        </div>
        <form className={styles.Form} onChange={handleSubmit(onSubmit)}>
          <input
            className={styles.input}
            placeholder={defaultFormValue}
            {...register("search")}
          />
        </form>
        <div
          onClick={() => setdefaultFormValue("")}
          className={styles.crossIcon}
        >
          <Image width={25} height={25.5} alt="cross" src={CrossIcon}></Image>
        </div>
      </div>
    </div>
  );
};

export default Cover;
