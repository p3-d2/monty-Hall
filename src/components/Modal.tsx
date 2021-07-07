import Link from "next/link";

import styles from "../styles/Modal.module.css";

interface ModalProps {
  title: string;
  href?: string;
}

export function Modal({ title, href }: ModalProps) {
  return (
    <div className={styles.overlay}>
      <div className={styles.container}>
        <h2>{title}</h2>
        <Link href={href ?? "/"} passHref>
          <button>Reiniciar</button>
        </Link>
      </div>
    </div>
  );
}
