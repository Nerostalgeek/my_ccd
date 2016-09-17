import EventManager from "../eventManager";

export default class Abstract extends EventManager{
  constructor() {
    super();
    if (new.target === Abstract) {
      throw new TypeError("Cannot construct Abstract instances directly");
    }
  }
}
