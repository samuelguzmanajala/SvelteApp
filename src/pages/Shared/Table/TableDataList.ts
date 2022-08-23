
export class TableDataList {
  readonly value: Array<Object>;
  constructor(value:Array<Object>) {
    this.value = value;
  }
  public getKeys(): Array<string> {
    if (this.value.length > 0) {
      return Object.keys(this.value[0]);
    }
    return [];
  }
  public getRows(): Array<Object> {
    return this.value.map(row => Object.values(row));
  }
  fromPrimitives(primitives: any): Object {
    const keys = this.getKeys();
    let object:Object = {};
    keys.forEach((key, index) => {
      object[key] = primitives[index];
    });
    return object;
  }
}