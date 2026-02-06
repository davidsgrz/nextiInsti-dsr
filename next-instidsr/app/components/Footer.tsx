import styles from './Footer.module.css';
import Logo from './Logo';

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
            <div className={styles.socialLogos}>
                <Logo image="/instagram.jpg" link="https://instagram.com" alt="Instagram" width={40} />
                <Logo image="/x.png" link="https://twitter.com" alt="X" width={40} />
                <Logo image="/whatsapp.png" link="https://whatsapp.com" alt="WhatsApp" width={40} />
            </div>
        </div>
        <div className={styles.creditSection}>
            <p>by DAVID</p> 
        </div>
      </div>
    </footer>
  );
}
