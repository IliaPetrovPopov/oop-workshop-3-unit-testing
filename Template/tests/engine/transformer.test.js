import { Transformer } from '../../src/engine/transformer.js';

describe('transformer', () => {

  it('Transform method should call the passed function ', () => {
    const transformerTest = new Transformer();
    const mockTransformer = jest.fn(num => num * 2);

    transformerTest.transform([5, 6], mockTransformer);

    expect(mockTransformer).toHaveBeenCalled();
  });

  it('Transform method should return the correct value, i.e. the transformed array', () => {
    const transformerTest = new Transformer();
    const mockTransformer = jest.fn(num => num * 2);

    const resultTest = transformerTest.transform([5, 6], mockTransformer);

    expect(resultTest).toEqual([10, 12]);
  });
});
