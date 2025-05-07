import { AfterViewInit, Component, ElementRef, OnInit, viewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [
    ButtonComponent,
    ControlComponent,
    FormsModule
  ],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent implements AfterViewInit, OnInit {
  // @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form');

  ngOnInit() {
    console.log('ON INIT');
    console.log(this.form().nativeElement);
  }

  ngAfterViewInit(){
    console.log('AFTER VIEW INIT');
    console.log(this.form().nativeElement);
  }

  onSubmit(titleEl: string, textEl: string) {
    console.log(`submitted ${titleEl}, ${titleEl}`);
    this.form().nativeElement.reset();
  }
}
