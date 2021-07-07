import { Door } from "../model/door";

export function createDoors(amount: number, doorWithGift: number): Door[] {
  return Array.from({ length: amount }, (_, i) => {
    const number = i + 1;
    const hasGift = number === doorWithGift;
    return new Door(number, hasGift);
  });
}

export function updateDoors(
  doors: Door[],
  updatedDoor: Door
): { isFail: boolean; doors: Door[] } {
  let isFail = false;
  const result = doors.map((currentDoor) => {
    const equalToModified = currentDoor.number === updatedDoor.number;

    if (equalToModified) {
      if (!currentDoor.isOpen && updatedDoor.isOpen && !updatedDoor.hasGift)
        isFail = true;
      return updatedDoor;
    } else {
      return updatedDoor.isOpen ? currentDoor : currentDoor.deselect();
    }
  });

  return { isFail, doors: result };
}

export function checkVitory(doors: Door[]): boolean {
  const condition = doors.filter((door) => door.hasGift && door.isOpen);

  if (condition.length > 0) return true;
  return false;
}

export function openAndReturnDoorWithGift(doors: Door[]): {
  number: number;
  doors: Door[];
} {
  let doorNumber = 0;
  const doorsUpdated = doors.map((currentDoor) => {
    if (currentDoor.hasGift) {
      const newDoor = currentDoor.open();
      doorNumber = currentDoor.number;
      return newDoor;
    }

    return currentDoor;
  });

  return { number: doorNumber, doors: doorsUpdated };
}
