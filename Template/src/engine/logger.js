export class Logger {

  logWith(data, fn = x => x) {
    console.log(fn(data));
  }

}
