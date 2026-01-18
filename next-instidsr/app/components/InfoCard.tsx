import styles from './InfoCard.module.css';

export default function InfoCard() {
  return (
    <div className={styles.card}>
       
        <div className={styles.imageContainer}>
             <img 
                src="/almeria.jpg" 
                alt="Almería" 
                className={styles.image}
            />
        </div>
        <div className={styles.content}>
            <h3 className={styles.title}>Almería</h3>
            <p className={styles.description}>Tierra de alumnos de ASIR y DAW</p>
            <div className={styles.arrow}>
                
            </div>
        </div>
    </div>
  );
}
