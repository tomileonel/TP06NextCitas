import Image from "next/image";
import styles from "./page.module.css";
import Navbar from "./Components/Navbar";
import Head from "next/head";
import HomeCompoment from './Components/HomeCompoment';

export default function Home() {
  return (
    <>
    <main className={styles.main}>
    <HomeCompoment />
    </main>
    </>
  );
}


