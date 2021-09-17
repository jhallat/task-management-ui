import {Menu} from '../menu';

describe('Menu', () => {
  let sut: Menu;

  beforeEach(() => {
    sut = new Menu();
  });

  it ('should be empty when created', () => {
    expect(sut.items.length).toBe(0);
  });

});
