import { Component, OnInit } from '@angular/core';
import { SvgIconRegistryService } from 'angular-svg-icon';

const MENU_ICON = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
    <line x1="3" y1="12" x2="21" y2="12" fill="#fff" stroke="#000" stroke-miterlimit="10"/>
    <line x1="3" y1="6" x2="21" y2="6" fill="#fff" stroke="#000" stroke-miterlimit="10"/>
    <line x1="3" y1="18" x2="21" y2="18" fill="#fff" stroke="#000" stroke-miterlimit="10"/>
  </svg>
`;

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {

  constructor(private iconReg: SvgIconRegistryService) {
    this.iconReg.addSvg("menu-bar" , MENU_ICON);
  }

  ngOnInit(): void {
  }

}
