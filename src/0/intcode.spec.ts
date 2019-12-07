import { padInstruction, decodeInstruction } from './intcode';
import { expect } from 'chai';
import 'mocha';

describe('intcode computer', () => {

  describe('padInstruction', () => {
    it('should return padded number 10002', () => {
      const result = padInstruction(10002);
      expect(result).to.eql('10002');
    });
    it('should return padded number 01002', () => {
      const result = padInstruction(1002);
      expect(result).to.eql('01002');
    });
    it('should return padded number 00102', () => {
      const result = padInstruction(102);
      expect(result).to.eql('00102');
    });
  });

  describe('decodeInstruction', () => {
    it('should decode 10002', () => {
      const result = decodeInstruction(10002);
      expect(result).to.eql({
        opcode: '02',
        param1mode: '0',
        param2mode: '0',
        param3mode: '1'
      });
    });
    it('should decode 1002', () => {
      const result = decodeInstruction(1002);
      expect(result).to.eql({
        opcode: '02',
        param1mode: '0',
        param2mode: '1',
        param3mode: '0'
      });
    });
    it('should decode 102', () => {
      const result = decodeInstruction(102);
      expect(result).to.eql({
        opcode: '02',
        param1mode: '1',
        param2mode: '0',
        param3mode: '0'
      });
    });
    it('should decode 99', () => {
      const result = decodeInstruction(99);
      expect(result).to.eql({
        opcode: '99',
        param1mode: '0',
        param2mode: '0',
        param3mode: '0'
      });
    });
  });

});