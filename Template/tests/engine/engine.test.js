import { Engine } from '../../src/engine/engine.js';
import { fileReader, transformer, logger } from '../../src/engine/mock-calls.js';

describe('Engine', () => {

  describe('run', () => {

    it('should call the readFile method', () => {

      const spy = jest.spyOn(fileReader, 'readFile');

      const engine = new Engine(fileReader, transformer, logger);

      engine.run();

      expect(spy).toHaveBeenCalled();
      expect(fileReader.readFile).toHaveBeenCalled();
      spy.mockClear();
    });

    it('should call the transform method', () => {

      const spy = jest.spyOn(transformer, 'transform');

      const engine = new Engine(fileReader, transformer, logger);

      engine.run();

      expect(transformer.transform).toHaveBeenCalled();
      expect(spy).toHaveBeenCalled();

      spy.mockClear();
    });

    it('should call logWith method', () => {

      const spy = jest.spyOn(logger, 'logWith');

      const engine = new Engine(fileReader, transformer, logger);

      engine.run();

      expect(spy).toHaveBeenCalled();
      spy.mockClear();
    });

  });

});
