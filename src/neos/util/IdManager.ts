import { v4 as uuidv4 } from "uuid";

export class IdManager<KeyType extends string> {
  idMap = new Map<
    KeyType,
    { id: string; setCount: number; getCount: number }
  >();
  constructor() {}

  public set(key: KeyType) {
    const exits = this.idMap.get(key);
    if (exits) {
      if (exits.setCount > 0) {
        throw new Error("duplicated key");
      } else {
        exits.setCount++;
        return exits.id;
      }
    } else {
      const data = { id: uuidv4(), setCount: 1, getCount: 0 };
      this.idMap.set(key, data);
      return data.id;
    }
  }

  public get(key: KeyType) {
    const exits = this.idMap.get(key);
    if (exits) {
      exits.getCount++;
      return exits.id;
    } else {
      const data = { id: uuidv4(), setCount: 0, getCount: 1 };
      this.idMap.set(key, data);
      return data.id;
    }
  }
}
