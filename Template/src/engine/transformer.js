export class Transformer {

  transform(data, fn) {
    return data.map(fn);
  }

}
