import { Engine } from './engine/engine.js';
import { FileReader } from './engine/file-reader.js';
import { Logger } from './engine/logger.js';
import { Transformer } from './engine/transformer.js';
import { Person } from './models/person.js';

const reader = new FileReader();
const transformer = new Transformer();
const logger = new Logger();

const engine = new Engine(reader, transformer, logger);

engine.run(({ name, age, friends }) => new Person(name, age, friends), data => data.map(f => f.printInfo()).join('\n\n'));
