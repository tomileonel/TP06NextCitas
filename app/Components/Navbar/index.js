import Link from 'next/link';
import styles from './style.module.css'; 

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li>
          <Link href="/">
            Home
          </Link>
        </li>
        <li>
          <Link href="/QuienesSomos">
            Quiénes Somos
          </Link>
        </li>
        <li>
          <Link href="/Reservas">
            Reservas
          </Link>
        </li>
        <li>
          <Link href="/Contactos">
            Ayuda
          </Link>
        </li>
      </ul>
    </nav>
  );
}
