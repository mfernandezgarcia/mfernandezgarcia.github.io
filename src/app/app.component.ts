import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'portfolio';

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
    const element = document.getElementById('scroll_down');

    if (window.pageYOffset > 100) {
      element.className = element.className.replace(/absolute/, 'hidden')
    } else {
      element.className = element.className.replace(/hidden/, 'absolute')
    }
  }
}
