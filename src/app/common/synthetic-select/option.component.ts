import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-option',
  template: ``
})
export class OptionComponent {
  hasFocus = false;

  @Input() id = `option-` + Math.floor(Math.random() * 100);
  @Input() value;
  @Input() content;
}
