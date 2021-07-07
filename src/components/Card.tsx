import { ReactNode } from "react";

import styles from "../styles/Card.module.css";

interface CardProps {
  bgColor?: string;
  children?: ReactNode;
}

export function Card({ bgColor, children }: CardProps) {
  return (
    <div style={{ backgroundColor: bgColor ?? "#fff" }} className={styles.card}>
      {children}
    </div>
  );
}
