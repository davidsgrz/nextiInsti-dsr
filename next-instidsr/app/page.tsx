import Sidebar from "./components/Sidebar";
import InfoCard from "./components/InfoCard";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.homeContainer}>
      
  
      <section className={styles.leftColumn}>
        <img 
            src="/next.png" 
            alt="Next.js Logo" 
            className={styles.nextLogo}
        />
        <div className={styles.subtitle}>
            Next mola
        </div>
        <div className={styles.description}>
            Curso de Next para todos
        </div>
        

      </section>

     
      <section className={styles.centerColumn}>
        <InfoCard />
      </section>

      
      <Sidebar />
    </div>
  );
}
