import Link from 'next/link';
import styles from './NewsDetail.module.css';

interface NewsItem {
  title: string;
  image: string;
  text: string;
}

const newsData: Record<string, NewsItem> = {
  'next-mola': {
    title: 'Next mola',
    image: '/next.png',
    text: 'Curso de Next para todos. Aprende las últimas novedades de Next.js y conviértete en un experto.',
  },
  'almeria': {
    title: 'Almería',
    image: '/almeria.jpg',
    text: 'Tierra de alumnos de ASIR y DAW. Un lugar perfecto para estudiar y disfrutar del buen clima.',
  }
};

export default function NewsDetail({ slug }: { slug: string }) {
  const item = newsData[slug];

  if (!item) {
    return (
      <div className={styles.container}>
        <div className={styles.imageContainer}>
             <img src="/404-school.png" alt="No encontrado" className={styles.image} />
        </div>
        <h2 className={styles.title}>NADA QUE MOSTRAR</h2>
        <Link href="/" className={styles.backLink}>
            Volver a inicio
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.container}>
       <div className={styles.imageContainer}>
             <img src={item.image} alt={item.title} className={styles.image} />
        </div>
      <h2 className={styles.title}>{item.title}</h2>
      <p className={styles.text}>{item.text}</p>
      <Link href="/" className={styles.backLink}>
        Volver a inicio
      </Link>
    </div>
  );
}
