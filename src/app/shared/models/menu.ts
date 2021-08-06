export class MenuItem {
  name = '';
  selected = false;
  action: () => void = () => {};
}

export class Menu {
  // tslint:disable-next-line:variable-name
  private _items: MenuItem[] = [];

  public get items(): MenuItem[] {
    return this._items;
  }

  selectItem(name: string): void {
    for (const item of this._items) {
      item.selected = (item.name === name);
    }
  }

  clearItems(): void {
    this._items = [];
  }

  addItem(name: string, action: () => void): void {
    this._items.push({ name, selected: false, action});
  }

}
