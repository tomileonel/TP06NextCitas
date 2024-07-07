import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "../Components/Navbar";
import ReservarCitas from "../Components/ReservarCitas"

export default function Home() {
  return (
    <main className={styles.main}>
      <ReservarCitas/>
    </main>
  );
}
