
export class Engine {

  #reader
  #transformer
  #logger

  constructor(reader, transformer, logger) {
    this.#reader = reader;
    this.#transformer = transformer;
    this.#logger = logger;
  }

  run(transformFn, logWithFn) {
    const data = JSON.parse(this.#reader.readFile('data.json'));
    const transformedData = this.#transformer.transform(data, transformFn);
    this.#logger.logWith(transformedData, logWithFn);
  }
}
