'use client';

import { useRouter } from 'next/navigation';
import styles from './Modal.module.css';

export default function Modal({ children }: { children: React.ReactNode }) {
  const router = useRouter();

  function onDismiss() {
    router.back();
  }

  return (
    <div className={styles.overlay}>
       <div className={styles.backdrop} onClick={onDismiss} />
      <div className={styles.dialog}>
        {children}
      </div>
    </div>
  );
}
