import Sidebar from "./components/Sidebar";
import InfoCard from "./components/InfoCard";
import styles from "./page.module.css";
import Link from "next/link";

import Modal from "./components/Modal";
import NewsDetail from "./components/NewsDetail";

export default async function Home({ searchParams }: { searchParams: Promise<{ noticia?: string }> }) {
  const { noticia } = await searchParams;

  return (
    <div className={styles.homeContainer}>
      {noticia && (
          <Modal>
              <NewsDetail slug={noticia} />
          </Modal>
      )}

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
        <Link href="/?noticia=next-mola" scroll={false} className={styles.linkButton}>
            Ver detalle
        </Link>
        

      </section>

     
      <section className={styles.centerColumn}>
        <InfoCard />
      </section>

      
      <Sidebar />
    </div>
  );
}
