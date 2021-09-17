export class Button {
  name = '';
  enabled = true;
  action: () => void = () => {};
}

export class ButtonBar {
  // tslint:disable-next-line:variable-name
  private _buttons: Button[] = [];

  public get buttons(): Button[] {
    return this._buttons;
  }

  public enableButton(name: string, enabled: boolean): void {
    const button = this._buttons.find(b => b.name === name);
    if (button) {
      button.enabled = enabled;
    }
  }

  public addButton(name: string, action: () => void, enabled = true): void {
    this._buttons.push({name, enabled, action});
  }
}
