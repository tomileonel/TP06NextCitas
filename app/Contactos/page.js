import Image from "next/image";
import styles from "./page.module.css";
import AyudaComponent from '../Components/AyudaComponent'

export default function Home() {
  return (
    <main className={styles.main}>
      <AyudaComponent/>
    </main>
  );
}
