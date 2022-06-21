import { Component, OnInit } from '@angular/core';
import { DarkModeService } from 'angular-dark-mode';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isDarkMode$ = this.darkModeService.darkMode$;

  constructor(private darkModeService: DarkModeService) {}

  ngOnInit(): void {}
}
