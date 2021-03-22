import {Component, ContentChildren, QueryList} from '@angular/core';
import {OptionComponent} from './option.component';

@Component({
  selector: 'app-synthetic-select',
  templateUrl: './synthetic-select.component.html',
  styleUrls: ['./synthetic-select.component.scss'],
})
export class SyntheticSelectComponent {

  @ContentChildren(OptionComponent) options: QueryList<OptionComponent>;

  get selectedOption(): OptionComponent {
    return this.options.find(item => item.value === this.value);
  }

  get focusIndex(): number {
    return this.options
      .toArray()
      .findIndex(item => item === this.currentFocus);
  }

  get hasValue(): boolean {
    return this.value !== false && !!this.selectedOption;
  }

  currentFocus: OptionComponent;
  isExpanded = false;
  placeholder = 'Please Select One';
  value;


  focusNext(): void {
    let nextFocusIndex = this.focusIndex + 1 || 0;

    if (nextFocusIndex === this.options.length) {
      nextFocusIndex = 0;
    }

    this.setFocussedOption(nextFocusIndex);
  }

  focusPrevious(): void {
    let previousFocusIndex = this.focusIndex - 1;

    if (previousFocusIndex === -1) {
      previousFocusIndex = this.options.length - 1;
    }

    this.setFocussedOption(previousFocusIndex);
  }

  clearFocus(): void {
    for (const option of this.options) {
      option.hasFocus = false;
    }
    this.currentFocus = null;
  }

  setFocussedOption(index: number): void {
    this.clearFocus();
    this.currentFocus = this.options.toArray()[index];
    this.currentFocus.hasFocus = true;
  }

  commitValue(option: OptionComponent = this.currentFocus): void {
    if (option) {
      this.value = option.value;
    }
    this.close();
  }

  open(): void {
    this.clearFocus();

    if (this.selectedOption) {
      this.selectedOption.hasFocus = true;
      this.currentFocus = this.selectedOption;
    } else {
      this.setFocussedOption(0);
    }

    this.isExpanded = true;
  }

  close(): void {
    this.isExpanded = false;
  }

  onKeyDown($event: KeyboardEvent): void {

    if (this.isExpanded) {
      this.onExpandedKeyDown($event);
    } else {
      this.onContractedKeyDown($event);
    }

  }

  onExpandedKeyDown($event: KeyboardEvent): void {

    const {code} = $event;

    switch (code) {
      case  'ArrowUp':
        this.focusPrevious();
        break;
      case 'ArrowDown':
        this.focusNext();
        break;
      case 'Enter':
        $event.preventDefault();
        this.commitValue();
        break;
      case 'Escape':
        this.close();
        break;
    }

  }


  onContractedKeyDown($event: KeyboardEvent): void {

    const {code} = $event;

    switch (code) {
      case 'Enter':
      case 'ArrowDown':
      case 'ArrowUp':
        $event.preventDefault();
        this.open();
        break;
    }

  }

  toggleExpanded(): void {
    this.isExpanded
      ? this.close()
      : this.open();
  }

}
