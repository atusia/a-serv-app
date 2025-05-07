import {
  afterNextRender,
  afterRender,
  Component,
  contentChild,
  ElementRef,
  inject,
  input,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,
  host: {
    class: 'control',
    '(click)': 'onClick()'
  }
})
export class ControlComponent {
  // @HostBinding('class') className = 'control';
  // @HostListener('click') onClick() {
  //   console.log('Clicked!');
  // }
  label=input<string>();
  private elRef= inject(ElementRef);
  // @ContentChild('input') control?: ElementRef<HTMLInputElement | HTMLAreaElement>;
  private control = contentChild<ElementRef<HTMLInputElement | HTMLAreaElement>>('input');

  constructor() {
    afterRender(() => {
      console.log('afterRender');
    });
    afterNextRender(() => {
      console.log('afterNextRender');
    });
  }

  onClick() {
    console.log('Clicked!');
    console.log(this.elRef);
    // console.log(this.control);
    console.log(this.control());
  }
}
