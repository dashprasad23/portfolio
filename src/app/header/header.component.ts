import { Component, computed, effect, signal } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [NavComponent, CommonModule],
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  currentRoute = signal<string>('')

  constructor(private router: Router) {
    this.router.events.subscribe(() => {
      this.currentRoute.set(this.router.url);
    });

    effect(() => {
      console.log('Current route changed:', this.currentRoute());
      console.log('Is blog route:', this.isBlogRoute());
    })
  }

  isBlogRoute = computed(() => this.currentRoute().startsWith('/blog'));

  get blogRoute() {
    return this.isBlogRoute();
  }

}
