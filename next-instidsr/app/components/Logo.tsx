import Link from 'next/link';
import styles from './Logo.module.css';

interface LogoProps {
  image: string;
  link: string;
  alt: string;
  width?: number;
}

export default function Logo({ image, link, alt, width = 30 }: LogoProps) {
  return (
    <Link href={link} target="_blank" rel="noopener noreferrer" className={styles.container}>
      <img src={image} alt={alt} style={{ width: `${width}px`, height: 'auto' }} className={styles.image} />
    </Link>
  );
}
