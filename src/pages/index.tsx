import { useState } from "react";
import Link from "next/link";

import { Card } from "../components/Card";
import { NumberInput } from "../components/NumberInput";

import styles from "../styles/Form.module.css";

export default function Form() {
  const [numberOfDoors, setNumberOfDoors] = useState(3);
  const [doorWithGift, setdoorWithGift] = useState(1);

  return (
    <div className={styles.form}>
      <div>
        <Card bgColor="#c0392c">
          <h2 className={styles.title}>Monty Hall</h2>
        </Card>
        <Card>
          <NumberInput
            label="Qtde Portas?"
            value={numberOfDoors}
            onChange={(newCountOfDoor) => setNumberOfDoors(newCountOfDoor)}
            min={3}
            max={20}
          />
        </Card>
      </div>
      <div>
        <Card>
          <NumberInput
            label="Porta com presente?"
            value={doorWithGift}
            onChange={(newDoorWithGift) => setdoorWithGift(newDoorWithGift)}
            max={numberOfDoors}
          />
        </Card>
        <Card bgColor="#28a085">
          <Link href={`/game/${numberOfDoors}/${doorWithGift}`} passHref>
            <h2 className={styles.link}>Iniciar</h2>
          </Link>
        </Card>
      </div>
    </div>
  );
}
