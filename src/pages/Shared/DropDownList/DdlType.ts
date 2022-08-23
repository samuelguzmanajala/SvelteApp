export class DdlType {
  readonly label: string;
  readonly value: Object;
  constructor(value:Object, key:string) {
    this.value = value;
    this.label = value[key];
  }
}
