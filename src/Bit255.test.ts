import { Scalar } from 'o1js';
import { Bit255 } from './Bit255';

describe('CustomScalar', () => {
  it('Should xor correctly', async () => {
    let r1 = Scalar.random();
    let r2 = Scalar.random();
    let bitString1 = Bit255.fromScalar(r1);
    let bitString2 = Bit255.fromScalar(r2);
    let bigInt1 = bitString1.toBigInt();
    let bigInt2 = bitString2.toBigInt();

    let bitStringXor = Bit255.xor(bitString1, bitString2);
    let bigIntXor = bigInt1 ^ bigInt2;
    expect(bitStringXor.toBigInt()).toEqual(bigIntXor);

    let bitStringXor1 = bitStringXor.xor(bitString2);
    bitStringXor1.assertEquals(bitString1);
    let bigIntXor1 = bigIntXor ^ bigInt2;
    expect(bitStringXor1.toBigInt()).toEqual(bigIntXor1);

    let bitStringXor2 = bitStringXor.xor(bitString1);
    bitStringXor2.assertEquals(bitString2);
    let bigIntXor2 = bigIntXor ^ bigInt1;
    expect(bitStringXor2.toBigInt()).toEqual(bigIntXor2);
  });

  // FIXME - not working
  xit('Should convert to bigint correctly', async () => {
    // let r = Scalar.random();
    let r = Scalar.from(1n);
    let bitString = Bit255.fromScalar(r);
    expect(bitString.toBigInt()).toEqual(r.toBigInt());
  });
});