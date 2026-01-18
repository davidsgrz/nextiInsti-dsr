import Sidebar from "../components/Sidebar";
import styles from "./page.module.css";

export default function Contacto() {
  return (
    <div className={styles.container}>
    
      <section className={styles.contentSection}>
        <h1 className={styles.title}>CONTENIDO DE PÁGINA CONTACTO</h1>
      </section>
      
      <Sidebar />
    </div>
  );
}
