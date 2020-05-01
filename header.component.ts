import { Component, OnInit } from '@angular/core';
import { SideNavService } from '../side-nav.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  // providers: [SideNavService]
})
export class HeaderComponent {     

  constructor() {}

  open(menu){
    menu.openMenu();
    }
}
