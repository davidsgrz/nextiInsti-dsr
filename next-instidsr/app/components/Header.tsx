import styles from './Header.module.css';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.overlay}>
        <div className={styles.logoContainer}>
            <img src="/logo-ies.jpg" alt="IES Logo" className={styles.logo} />
            <div className={styles.titleContainer}>
                <h1>IES Cura Valera</h1>
                <p>Huércal-Overa</p>
            </div>
        </div>
      </div>
    </header>
  );
}
