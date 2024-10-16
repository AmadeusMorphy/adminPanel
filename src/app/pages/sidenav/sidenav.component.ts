import { Component, EventEmitter, OnInit, Output } from '@angular/core';
// import { navbarData } from './nav-data';
import { UsersService } from 'src/app/services/users.service';


interface SideNavToggle {
  screenWidth: number;
  collapsed: boolean;
}

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  @Output() onToggleSideNav: EventEmitter<SideNavToggle> = new EventEmitter()

  constructor(
    private userService: UsersService
  ) {}

  collapsed = false;
  screenWidth = 0;
  navData = [

    {
        routerLink: 'dashboard',
        icon: 'pi pi-home',
        label: 'Dashboard'
    },
    {
        routerLink: 'users',
        icon: 'pi pi-users',
        label: 'Users'
    },
    {
        routerLink: 'media',
        icon: 'pi pi-image',
        label: 'Media'
    },
    {
        routerLink: 'statistics',
        icon: 'pi pi-chart-bar',
        label: 'Statistics'
    },
    {
        routerLink: 'settings',
        icon: 'pi pi-cog',
        label: 'Settings'
    }

];

  ngOnInit(): void {
    this.screenWidth = window.innerWidth;
  }

  toggleCollapse(): void {
    this.collapsed = !this.collapsed;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }
  closeSideNav(): void {
    this.collapsed = false;
    this.onToggleSideNav.emit({ collapsed: this.collapsed, screenWidth: this.screenWidth });
  }

  logout() {
    console.log('logout works')
  }
}