import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

import { Door } from "../../../components/Door";
import { Modal } from "../../../components/Modal";

import { Door as DoorModel } from "../../../model/door";
import {
  checkVitory,
  createDoors,
  updateDoors,
  openAndReturnDoorWithGift,
} from "../../../functions/doors";

import styles from "../../../styles/Game.module.css";

export default function Game() {
  const router = useRouter();
  const [doors, setDoors] = useState<DoorModel[]>([]);
  const [isValid, setIsValid] = useState(true);
  const [modal, setModal] = useState(false);
  const [attemps, setAttemps] = useState(1);
  const modalTitle = useRef("");

  useEffect(() => {
    const doors = +router.query.doors;
    const doorWithGift = +router.query.doorWithGift;

    setAttemps(Math.floor(doors / 3));
    setDoors(createDoors(doors, doorWithGift));
  }, [router.query]);

  useEffect(() => {
    const doors = +router.query.doors;
    const doorWithGift = +router.query.doorWithGift;

    const countOfDoorsValid = doors >= 3 && doors <= 20;
    const doorWithGiftIsValid = doorWithGift >= 1 && doorWithGift <= doors;

    setIsValid(countOfDoorsValid && doorWithGiftIsValid);
  }, [doors, router.query.doors, router.query.doorWithGift]);

  useEffect(() => {
    if (checkVitory(doors)) {
      modalTitle.current = "Você venceu!";
      setModal(true);
    }
  }, [doors]);

  useEffect(() => {
    if (attemps <= 0) {
      const failData = openAndReturnDoorWithGift(doors);
      modalTitle.current = `Você perdeu! O presente estava na porta ${failData.number}`;
      setDoors(failData.doors);
      setModal(true);
    }
  }, [attemps, doors]);

  const updateGame = (newDoor: DoorModel) => {
    const update = updateDoors(doors, newDoor);

    if (update.isFail) setAttemps((oldValue) => oldValue - 1);
    setDoors(update.doors);
  };

  const renderDoors = () =>
    doors.map((door) => (
      <Door key={door.number} value={door} onChange={updateGame} />
    ));

  return (
    <>
      <div className={styles.game}>
        <h3 className={styles.attemps}>tentativas restantes: {attemps}</h3>
        <div className={styles.doors}>
          {isValid ? renderDoors() : <h1>Valores inválidos</h1>}
        </div>
        <div className={styles.buttons}>
          <Link href="/" passHref>
            <button>Reiniciar Jogo</button>
          </Link>
        </div>
      </div>

      {modal && <Modal title={modalTitle.current} href={router.asPath} />}
    </>
  );
}
