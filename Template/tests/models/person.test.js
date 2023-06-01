import { Person } from '../../src/models/person.js';

describe('Person', () => {
  describe('constructor', () => {
    it('should throw if name is invalid', () => {
      expect(() => new Person(undefined, 34, ['Misho', 'Tisho'])).toThrow();
      expect(() => new Person(null, 34, ['Misho', 'Tisho'])).toThrow();
      expect(() => new Person(23, 34, ['Misho', 'Tisho'])).toThrow();
      expect(() => new Person('A', 34, ['Misho', 'Tisho'])).toThrow();
      expect(() => new Person(true, 34, ['Misho', 'Tisho'])).toThrow();
      expect(() => new Person('Hubert Blaine Wolfeschlegelsteinhausenbergerdorff', 34, ['Misho', 'Tisho'])).toThrow();
    });

    it('should throw if age is invalid', () => {
      expect(
        () => new Person('Christopher', undefined, ['Misho', 'Tisho'])
      ).toThrow();
      expect(() => new Person('Christopher', -1, ['Misho', 'Tisho'])).toThrow();
      expect(
        () => new Person('Christopher', null, ['Misho', 'Tisho'])
      ).toThrow();
      expect(
        () => new Person('Christopher', 151, ['Misho', 'Tisho'])
      ).toThrow();
      expect(
        () => new Person('Christopher', 1245, ['Misho', 'Tisho'])
      ).toThrow();
      expect(
        () => new Person('Christopher', false, ['Misho', 'Tisho'])
      ).toThrow();
    });

    it('should throw if the passed friends value is invalid', () => {
      expect(
        () => new Person('Christopher', 34, [undefined, 'Tisho'])
      ).toThrow();
      expect(() => new Person('Christopher', 34, [NaN])).toThrow();
      expect(() => new Person('Christopher', 34, [1, null])).toThrow();
      expect(() => new Person('Christopher', 34, [true, 'Iliqn'])).toThrow();
    });

    it('should NOT throw if all the passed values are valid', () => {
      expect(() => new Person('Christopher', 23, ['Tisho'])).not.toThrow();
      expect(() => new Person('Peter', 34, [])).not.toThrow();
      expect(
        () => new Person('Donald', 5, ['Joe', 'Christopher'])
      ).not.toThrow();
      expect(
        () => new Person('Dolla', 130, ['Sasho', 'Tosho', 'Peter'])
      ).not.toThrow();
      expect(() => new Person('Joe', 67, ['Iliqn'])).not.toThrow();
    });

    it('should set the name correctly', () => {
      const testPerson1 = new Person('Christopher', 23, ['Tisho']);
      const testPerson2 = new Person('Strahil', 5, ['Joe', 'Christopher']);

      expect(testPerson1.name).toBe('Christopher');
      expect(testPerson2.name).toBe('Strahil');
    });

    it('should set the age correctly', () => {
      const testPerson1 = new Person('Christopher', 23, ['Tisho']);
      const testPerson2 = new Person('Strahil', 5, ['Joe', 'Christopher']);

      expect(testPerson1.age).toBe(23);
      expect(testPerson2.age).toBe(5);
    });

    it('should set the friends correctly', () => {
      const testPerson1 = new Person('Christopher', 23, ['Tisho']);
      const testPerson2 = new Person('Strahil', 5, ['Joe', 'Christopher']);

      expect(testPerson1.friends).toStrictEqual(['Tisho']);
      expect(testPerson2.friends).toStrictEqual(['Joe', 'Christopher']);
    });

    describe('name', () => {

      it('should throw if name is invalid', () => {
        expect(() => new Person(undefined, 34, ['Misho', 'Tisho'])).toThrow();
        expect(() => new Person(null, 34, ['Misho', 'Tisho'])).toThrow();
        expect(() => new Person(23, 34, ['Misho', 'Tisho'])).toThrow();
        expect(() => new Person('A', 34, ['Misho', 'Tisho'])).toThrow();
        expect(() => new Person(true, 34, ['Misho', 'Tisho'])).toThrow();
        expect(() =>new Person('Hubert Blaine Wolfeschlegelsteinhausenbergerdorff', 34, ['Misho', 'Tisho'])).toThrow();
      });

      it('should set the name correctly', () => {
        const testPerson1 = new Person('Bache', 23, ['Tisho']);
        const testPerson2 = new Person('Smael', 5, ['Joe', 'Christopher']);

        expect(testPerson1.name).toBe('Bache');
        expect(testPerson2.name).toBe('Smael');
      });

      describe('age', () => {

        it('setter should throw if the value is invalid', () => {
          expect(
            () => new Person('Christopher', undefined, ['Misho', 'Tisho'])
          ).toThrow();
          expect(() => new Person('Christopher', -1, ['Misho', 'Tisho'])).toThrow();
          expect(
            () => new Person('Christopher', null, ['Misho', 'Tisho'])
          ).toThrow();
          expect(
            () => new Person('Christopher', 151, ['Misho', 'Tisho'])
          ).toThrow();
          expect(
            () => new Person('Christopher', 1245, ['Misho', 'Tisho'])
          ).toThrow();
          expect(
            () => new Person('Christopher', false, ['Misho', 'Tisho'])
          ).toThrow();
        });

        it('setter should set the value correctly', () => {
          const testPerson1 = new Person('Christopher', 23, ['Tisho']);
          const testPerson2 = new Person('Strahil', 5, ['Joe', 'Christopher']);

          expect(testPerson1.age).toBe(23);
          expect(testPerson2.age).toBe(5);
        });
      });

      describe('friends', () => {
        it('should be readonly, i.e. throw if you try to set it to a new value', () => {
          const testPerson1 = new Person('Christopher', 23, ['Tisho']);

          expect(() => testPerson1.friends = 'Aezakmi').toThrow();
        });

        it('should return a copy of the array, a different reference, but structurally the same', () => {
          const testPerson1 = new Person('Christopher', 23, ['Tisho']);

          const friendsCopy = testPerson1.friends;

          expect(testPerson1.friends === friendsCopy).toBeFalsy();
        });

        describe('printInfo', () => {
          it('should return the correct string', () => {
            const testPerson = new Person('Christopher', 23, ['Tisho']);

            expect(testPerson.printInfo()).toStrictEqual(`Name: Christopher\nAge: ${23}\nFriend count: ${1}`);
          });
        });
      });
    });
  });
});
