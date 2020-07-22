import ArrayBufferConverter from '../js/index';

function getBuffer() {
    const data = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
    return (input => {
      const buffer = new ArrayBuffer(data.length * 2);
      const bufferView = new Uint16Array(buffer);
      for (let i = 0; i < input.length; i++) {
        bufferView[i] = input.charCodeAt(i);
      }
      return buffer;
    })(data);
};

test('Загрузка данных в бинарном формате', () => {
    const arrayBin = new ArrayBufferConverter();
    
    expect(arrayBin.load(getBuffer())).toEqual(expect.objectContaining(getBuffer()));
});

test('Преображение данных в строку', () => {
    const arrayBin = new ArrayBufferConverter();
    arrayBin.load(getBuffer())

    expect(arrayBin.toString()).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
})