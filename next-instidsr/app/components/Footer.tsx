import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.infoSection}>
            <h3>Enlaces de interés</h3>
            <ul>
                <li>Web 50 aniversario</li>
                <li>Web antigua</li>
                <li>Consejería de educación</li>
                <li>Séneca</li>
                <li>Pasen</li>
            </ul>
        </div>
        <div className={styles.contactSection}>
            <h3>Encuéntranos en...</h3>
            <p><strong>DIRECCIÓN POSTAL:</strong></p>
            <p>Avda. Guillermo Reyna, 35</p>
            <p>04600 HUÉRCAL-OVERA</p>
            <p>Almería</p>
            <p><strong>DIRECCIÓN ELECTRÓNICA:</strong></p>
            <p>https://iescuravalera.es</p>
            <p>04002714.edu@juntadeandalucia.es</p>
        </div>
        <div className={styles.creditSection}>
            <p>by DAVID</p> 
        </div>
      </div>
    </footer>
  );
}
