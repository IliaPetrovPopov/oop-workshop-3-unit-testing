<img src="https://webassets.telerikacademy.com/images/default-source/logos/telerik-academy.svg" alt="logo" width="300px" style="margin-top: 20px;"/>

# File Transformer

### 1. Description

File Transformer is a simple utility for reading JSON files, parsing them, transforming the values inside and finally printing them on the console.

<br>

### 2. Project information

- Language and version: **JavaScript ES2020**
- Platform and version: **Node 16.0+**
- Core Packages: **ESLint**, **Jest**

<br>

### 3. Goals

Your goal is to test three classes - **Person**, **Transformer**, and **Engine** using the [Jest](https://jestjs.io/) framework. You are provided with the complete implementation of the core logic, but for the advanced tests (the **Engine** class) you might need to make a few modifications to the class itself.

<br>

### 4. Setup

To get the project up and running, follow these steps:

1. Go inside the `Template` folder.
1. Run `npm install` to restore all dependencies.
1. After that, there are a few scripts you can run:

   - `npm run start` (shorthand: `npm start`) - Runs the `src/main.js` file.
   - `npm run lint` - Lints the code inside the `src` folder using **ESLint**.
   - `npm run test` (shorthand: `npm test` or `npm t`) - Runs the unit tests in the console.

<br>

### 5. Project structure

All of the code you will be testing is in the `src` folder. The entry point (the file from which the program is started) is `src/main.js`. The `tests` folder is where you will be writing the unit tests. When you open it you will see that the folder and file structure is replicating what you have in `src`. There are three test files - `person.test.js`, `transformer.test.js`, and `engine.test.js`. The order is not random - the **Person** class is easiest to test, then comes the **Transformer**, and finally the **Engine**.

You are allowed to modify only the test files and `src/engine/engine.js` (we will see why later).

<br>

### 6. Testing suits

Every testing suite begins inside a `describe` function. A test suit can be split into smaller test suites again with another `describe` function inside the outer one. Each single unit test is contained inside a `it` function. Example of a test structure might look like this:

```js
// whole class test suite
describe('Person class', () => {

  // smaller test suite, i.e. constructor test, method test, property test, etc.
  describe('constructor', () => {

    // single unit test
    it('should throw if name is invalid', () => {
      // your actual test code inside
    });

  });

});
```
Each suite might contain multiple single unit tests.

<br>

### 7. The testing `it` function

A single testing function conforms to the AAA pattern, i.e. has three phases - `arrange`, `act`, and `assert`.

The **arrange** phase include preparation for the test - initializing variables, values, and instanced needed for the test itself.

The **act** phase include the actual *action* of the test, i.e. if you test a method the **act** phase includes the calling of the method.

The **assert** phase is the assertion test, or check if our expectations reflect reality. One such expectation might be a property of a class instance has been set to the correct value.

All phases except for the **assert** phase are optional.

<br>

### 8. Test cases

There are several types of assertions you will need to use:

- assert an action throws an error
- assert a result matches expected value
- assert a function (or a method) has been called
- assert a result includes one or more expected values (works for strings and arrays)

A few examples of these assertions:

```js
// assert an action throws
expect(() => {/* action here */}).toThrow();

// assert an action doesn't throw
expect(() => {/* action here */}).not.toThrow();

// assert a result matches a value (===)
expect(result).toBe(value);

// assert a result matches a value (deep structural equality)
expect(object1).toEqual(object2);

// assert a method has been called
expect(console.log).toHaveBeenCalled();

// assert a method has been called N times
expect(console.log).toHaveBeenCalledTimes(N);
```

You can take a look at the [Jest documentation](https://jestjs.io/docs/getting-started) for more examples and further details. To test is a function has been called you can utilize [mock functions](https://jestjs.io/docs/mock-functions)

To test is a method of an object has been called you can use and adapt the following snippet:

```js
// arrange
const spy = jest.spyOn(console, 'log'); // create a "spy" on the console.log method

// act
// call the tested method here

// assert
expect(console.log).toHaveBeenCalled();

spy.mockClear(); // stop "spying"
```

<br>

### 9. Testing the `Person` class

There are multiple test you should write for the **Person** model. Most of them are constructor suite tests, the rest are on public properties and the `printInfo()` method.

- constructor
  - should throw if the passed name value is invalid
  - should throw if the passed age value is invalid
  - should throw if the passed friends value is invalid
  - should NOT throw if all the passed values are valid
  - should set the name correctly
  - should set the age correctly
  - should set the friend correctly
- name
  - setter should throw if the value is invalid
  - setter should set the value correctly
- age
  - setter should throw if the value is invalid
  - setter should set the value correctly
- friends
  - should be readonly, i.e. throw if you try to set it to a new value
  - should return a copy of the array, a different reference, but structurally the same
- printInfo()
  - should return the correct string

Note that there are no explicit getter tests for `name` and `age`. Think of why is that.

<br>

### 10. Testing the `Transformer` class

While the **Transformer** class is very simple, testing it might be a bit more difficult. You will need to test the action (calling the transform method) and what that action results in programming instructions, i.e. read carefully all the things the method does and think of what needs to be tested there.

Two major things need to be tested:

- does the transform method call the passes function
- does the transform method return the correct value, i.e. the transformed array

Note we will not be testing if the method uses the `Array.map()` method for the transformation.

<br>

### 11. Testing the `Engine` class (**Advanced**)

The **Engine** class has just one method `run`, but the class itself is a composition of instanced of another three classes. In this case the implementation of the **Engine** has a few drawbacks. If you try to test the `run` method there will be side effects. The `run` method uses the `FileReader` class to access the file system and will actually open the `data.json` file. In other cases one class might be accessing real data, i.e. credit cards and banking systems and we don't want testing to actually draw or deposit money.

Because the class is coupled with the implementation of the other three classes it cannot be tested without causing side effects. You will need to find a way to *decouple* **Engine** from **FileReader**, **Transformer**, and **Logger**. Think of pure functions and *dependency inversion*.

You will also need to find a way to *mock* class instanced, i.e. provide objects that have the same signature, but lack the side effects of the original implementation.

Overall the expected results are:

- the run method should
  - call the readFile method
  - call the transform method
  - call the logWith method
