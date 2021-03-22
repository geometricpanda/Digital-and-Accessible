import {Component, ContentChildren, ElementRef, QueryList, TemplateRef, ViewChild} from '@angular/core';
import {OptionComponent} from './option.component';

@Component({
  selector: 'app-synthetic-select',
  templateUrl: './synthetic-select.component.html',
  styleUrls: ['./synthetic-select.component.scss'],
})
export class SyntheticSelectComponent {

  @ContentChildren(OptionComponent) options: QueryList<OptionComponent>;
  @ViewChild('buttonElement') buttonElement: ElementRef<HTMLButtonElement>;
  @ViewChild('listElement') listElement: ElementRef<HTMLUListElement>;

  get selectedOption(): OptionComponent {
    return this.options.find(item => item.value === this.value);
  }

  get hasValue(): boolean {
    return this.value !== false && !!this.selectedOption;
  }

  currentFocus: OptionComponent;
  isExpanded = false;
  placeholder = 'Please Select One';
  value;

  commitValue(option: OptionComponent): void {
    this.value = option.value;
    this.close();
  }


  open(): void {
    this.isExpanded = true;
    setTimeout(() => this.listElement.nativeElement.focus(), 100);
  }

  close(): void {
    this.isExpanded = false;
    setTimeout(() => this.buttonElement.nativeElement.focus(), 200);
  }

  onBlur(): void {
    this.isExpanded = false;
  }

  onKeyDown($event: KeyboardEvent): void {
    const {code} = $event;

    switch (code) {
      case 'Space':
      case 'Enter':
        $event.preventDefault();
        this.open();
        break;
    }

  }


  onListKeyDown($event: KeyboardEvent, option: OptionComponent): void {
    const {code} = $event;
    switch (code) {
      // case  'ArrowUp':
      // case  'Up':
      //   $event.preventDefault();
      //   this.focusPrevious();
      //   break;
      // case 'ArrowDown':
      // case 'Down':
      //   $event.preventDefault();
      //   this.focusNext();
      //   break;
      case 'Enter':
        $event.preventDefault();
        this.commitValue(option);
        break;
      case 'Escape':
        $event.preventDefault();
        this.close();
        break;
    }
  }

  toggleExpanded(): void {
    this.isExpanded
      ? this.close()
      : this.open();
  }

}
