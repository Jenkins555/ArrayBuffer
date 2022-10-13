export class ArrayBufferConverter {
  constructor(loadBuffer) {
    this.loadBuffer = loadBuffer;
  }

  toString() {
    return String.fromCharCode.apply(null, new Uint16Array(this.loadBuffer));
  }
}
