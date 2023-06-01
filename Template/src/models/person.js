export class Person {

  static #MIN_NAME_LENGTH = 2;
  static #MAX_NAME_LENGTH = 45;

  static #MAX_AGE = 150;

  #name;
  #age;
  #friends;

  constructor(name, age, friends) {
    if (!Array.isArray(friends) || friends.some(f => typeof f !== 'string')) {
      throw new Error('Invalid friends list!');
    }

    this.name = name;
    this.age = age;
    this.#friends = friends;
  }

  get name() {
    return this.#name;
  }

  set name(value) {
    if (typeof value !== 'string' || value.length < Person.#MIN_NAME_LENGTH || value.length > Person.#MAX_NAME_LENGTH) {
      throw new Error('Invalid name');
    }

    this.#name = value;
  }

  get age() {
    return this.#age;
  }

  set age(value) {
    if (typeof value !== 'number' || value < 0 || value > Person.#MAX_AGE) {
      throw new Error('Invalid age');
    }

    this.#age = value;
  }

  get friends() {
    return this.#friends.slice();
  }

  printInfo() {
    return `Name: ${this.name}\nAge: ${this.age}\nFriend count: ${this.#friends.length}`;
  }

}
