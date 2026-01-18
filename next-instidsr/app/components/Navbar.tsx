import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>
        <li><Link href="/" className={styles.navLink}>Inicio</Link></li>
        
        {/* Noticias Dropdown */}
        <li className={styles.dropdown}>
            <Link href="/noticias" className={styles.navLink}>
                Noticias <span className={styles.arrow}>▼</span>
            </Link>
            <ul className={styles.dropdownContent}>
                <li><Link href="/noticias/novedades">Novedades</Link></li>
                <li><Link href="/noticias/eventos">Eventos</Link></li>
                <li><Link href="/noticias/secretaria">Secretaría</Link></li>
            </ul>
        </li>

        {/* Oferta Educativa Dropdown */}
        <li className={styles.dropdown}>
            <Link href="/oferta" className={styles.navLink}>
                Oferta Educativa <span className={styles.arrow}>▼</span>
            </Link>
            <ul className={styles.dropdownContent}>
                <li><Link href="/oferta/eso">ESO</Link></li>
                <li><Link href="/oferta/bachillerato">Bachillerato</Link></li>
                <li><Link href="/oferta/fp">Formación Profesional</Link></li>
            </ul>
        </li>

        <li><Link href="/biblioteca" className={styles.navLink}>Biblioteca Escolar</Link></li>
        <li><Link href="/contacto" className={styles.navLink}>Contacto</Link></li>
      </ul>
      
      <div className={styles.searchContainer}>
        <span className={styles.searchLabel}>Search</span>
        <button className={styles.searchButton}>Search</button>
      </div>
    </nav>
  );
}
