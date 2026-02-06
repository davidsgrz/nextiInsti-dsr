import styles from './Noticias.module.css';

export default function Noticias({ category }: { category?: string }) {
  let title = "Sección de Noticias";
  
  if (category === 'novedades') title = "Novedades";
  else if (category === 'eventos') title = "Eventos";
  else if (category === 'secretaria') title = "Secretaría";

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
  
      <p>Aquí se mostrarán las últimas noticias de {category || 'el instituto'}.</p>
    </div>
  );
}
