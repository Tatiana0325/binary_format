export default class ArrayBufferConverter {
    load(buffer) {
        this.buffer = buffer;
    }

    toString() {
        return String.fromCharCode.apply(null, new Uint16Array(this.buffer));
    }
}