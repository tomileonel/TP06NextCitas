import Image from "next/image";
import styles from "./page.module.css";
import AboutUs from "../Components/AboutUs";

export default function Home() {
  return (
    <main className={styles.main}>
<AboutUs></AboutUs>
    </main>
  );
}
