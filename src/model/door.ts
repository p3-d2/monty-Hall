export class Door {
  #number: number;
  #hasGift: boolean;
  #selected: boolean;
  #isOpen: boolean;

  constructor(
    number: number,
    hasGift = false,
    selected = false,
    isOpen = false
  ) {
    this.#number = number;
    this.#hasGift = hasGift;
    this.#selected = selected;
    this.#isOpen = isOpen;
  }

  get number() {
    return this.#number;
  }

  get hasGift() {
    return this.#hasGift;
  }

  get selected() {
    return this.#selected;
  }

  get isOpen() {
    return this.#isOpen;
  }

  deselect() {
    const selected = false;
    return new Door(this.number, this.hasGift, selected, this.isOpen);
  }

  toggleSelected() {
    const selected = !this.selected;
    return new Door(this.number, this.hasGift, selected, this.isOpen);
  }

  open() {
    const isOpen = true;
    return new Door(this.number, this.hasGift, this.selected, isOpen);
  }
}
