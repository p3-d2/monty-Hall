import { MouseEvent } from "react";

import { Gift } from "./Gift";
import { Door as DoorModel } from "../model/door";

import styles from "../styles/Door.module.css";

interface DoorProps {
  value: DoorModel;
  onChange: (newDoor: DoorModel) => void;
}

export function Door({ value: door, onChange }: DoorProps) {
  const selected = door.selected && !door.isOpen ? styles.selected : "";

  const toggleSelected = (e: MouseEvent) => onChange(door.toggleSelected());

  const open = (e: MouseEvent) => {
    e.stopPropagation();
    onChange(door.open());
  };

  const renderDoor = () => (
    <div className={styles.door}>
      <div className={styles.number}>{door.number}</div>
      <div className={styles.knob} onClick={open}></div>
    </div>
  );

  return (
    <div className={styles.area} onClick={toggleSelected}>
      <div className={`${styles.frame} ${selected}`}>
        {!door.isOpen ? renderDoor() : door.hasGift && <Gift />}
      </div>
      <div className={styles.floor}></div>
    </div>
  );
}
