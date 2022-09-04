import {Component, ElementRef, HostListener, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.sass']
})
export class MenuComponent implements OnInit {

  @ViewChild('menu') menu: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {

    if (event.target.innerWidth > 768) {
      this.menu.nativeElement.style.display = 'flex';
    }

    if ( event.target.innerWidth < 768 ) {
      this.menu.nativeElement.style.display = 'none';

    }
  }

  openMenu()
  {
    let display = this.menu.nativeElement.style.display;

    if (!display) {
      display = 'none';
    }

    switch (display) {
      case 'block':
        this.menu.nativeElement.style.display = 'none';
        break;
      case 'none':
        this.menu.nativeElement.style.display = 'block';
        break;

    }
  }

}
