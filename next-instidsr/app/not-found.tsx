import Link from "next/link";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <div className={styles.container}>
      <h1 className={styles.errorCode}>404</h1>
      <h2 className={styles.title}>Página no encontrada</h2>
      <p>Lo sentimos, la página que buscas no existe.</p>
      <Link 
        href="/" 
        className={styles.link}
      >
        Volver al Inicio
      </Link>
    </div>
  );
}
