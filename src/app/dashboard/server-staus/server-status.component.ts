import { Component, DestroyRef, effect, inject, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent {
  currentStatus  = signal<'online' | 'offline' | 'unknown'>('online');
  private destroyRef = inject(DestroyRef);

  constructor() {
    effect( () => {
      console.log(this.currentStatus())
    } );
  }

  ngOnInit() {
    this.currentStatus.set('online') ;

    this.destroyRef.onDestroy(() => {
      this.currentStatus.set('offline');
    })
  }

}
