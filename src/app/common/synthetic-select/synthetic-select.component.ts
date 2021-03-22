import {Component, ContentChildren, ElementRef, QueryList, TemplateRef, ViewChild, ViewChildren} from '@angular/core';
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
  @ViewChildren('listItem') listItems: QueryList<ElementRef<HTMLLIElement>>;

  get selectedOption(): OptionComponent {
    return this.options.find(item => item.value === this.value);
  }

  get hasValue(): boolean {
    return this.value !== false && !!this.selectedOption;
  }

  currentFocus: HTMLLIElement;

  isExpanded = false;
  placeholder = 'Please Select One';
  value;

  commitValue(option: OptionComponent): void {
    this.value = option.value;
    this.close();
  }


  open(): void {
    this.isExpanded = true;
    setTimeout(() => this.focusCurrent(), 100);
  }

  close(): void {
    this.buttonElement.nativeElement.focus();
    this.isExpanded = false;
    // setTimeout(() => this.buttonElement.nativeElement.focus(), 200);
  }

  onBlur(): void {
    this.isExpanded = false;
  }

  onButtonKeyDown($event: KeyboardEvent): void {
    switch ($event.code) {
      case 'Space':
      case 'Enter':
        $event.preventDefault();
        this.open();
        break;
    }

  }


  focusCurrent(): void {
    const currentIndex = this
      .options
      .toArray()
      .findIndex(item => item.value === this.value);

    if (currentIndex > -1) {
      this.listItems.toArray()[currentIndex].nativeElement.focus();
    } else {
      this.listItems.toArray()[0].nativeElement.focus();
    }

  }

  focusNext(): void {
    const currentIndex = this
      .listItems
      .toArray()
      .findIndex(item => item.nativeElement === this.currentFocus);

    const nextIndex = (currentIndex + 1 === this.listItems.length)
      ? 0
      : currentIndex + 1;

    this.listItems.toArray()[nextIndex].nativeElement.focus();

  }

  focusPrev(): void {
    const currentIndex = this
      .listItems
      .toArray()
      .findIndex(item => item.nativeElement === this.currentFocus);

    const nextIndex = (currentIndex === 0)
      ? this.listItems.length - 1
      : currentIndex - 1;

    this.listItems.toArray()[nextIndex].nativeElement.focus();

  }

  onListItemFocus(listItem: HTMLLIElement): void {
    this.currentFocus = listItem;
  }

  onListItemKeyDown($event: KeyboardEvent, option: OptionComponent): void {
    const {code} = $event;
    switch (code) {
      case 'Tab':
        $event.preventDefault();
        break;
      case  'ArrowUp':
      case  'Up':
        this.focusPrev();
        break;
      case 'ArrowDown':
      case 'Down':
        $event.preventDefault();
        this.focusNext();
        break;
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
