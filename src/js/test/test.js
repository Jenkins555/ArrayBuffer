import { ArrayBufferConverter } from '../classArrayBuffer';
import { getBuffer } from '../getBufferFunc';

test('toString', () => { /// Тест на создание экземпляра класса
  const converter = new ArrayBufferConverter(getBuffer());
  expect(converter.toString()).toEqual('{\"data\":{\"user\":{\"id\":1,\"name\":\"Hitman\",\"level\":10}}}'); // eslint-disable-line
});
