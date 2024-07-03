import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./Components/Navbar";
import Head from "next/head";

export default function Home() {
  return (
    <>
    <Head>
    </Head>
    <main className={styles.main}>
      <Navbar></Navbar>
    </main>
    </>
  );
}


