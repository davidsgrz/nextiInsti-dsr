import styles from './Sidebar.module.css';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.item}>
        <img 
            src="/biblio-seneca.jpg" 
            alt="Biblioteca Séneca" 
            className={styles.image} 
        />
        <div className={styles.label}>biblioteca séneca</div>
      </div>
      <div className={styles.item}>
        
        <iframe 
            width="100%" 
            height="200" 
            src="https://www.youtube.com/embed/8RfixVO5V7o?si=NxDrcCp_g9ovw2LN" 
            title="YouTube video player" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
            allowFullScreen
            className={styles.image} 
        ></iframe>
        <div className={styles.label}>IES Cura Valera TV</div>
      </div>
    </aside>
  );
}
