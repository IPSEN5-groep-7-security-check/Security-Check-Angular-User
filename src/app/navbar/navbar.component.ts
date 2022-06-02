import { Component, OnInit } from '@angular/core';
import { ThemeChangeService } from '../services/theme-change.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  isDarkMode$ = this.themeChangeService.isDarkMode$;

  constructor(private themeChangeService: ThemeChangeService) {}

  ngOnInit(): void {}
}
