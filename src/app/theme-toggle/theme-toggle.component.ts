import { Component } from '@angular/core';
import { ThemeChangeService } from '../services/theme-change.service';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss'],
})
export class ThemeToggleComponent {
  isDarkMode$ = this.themeChangeService.isDarkMode$;

  constructor(private themeChangeService: ThemeChangeService) {}

  handleThemeToggle() {
    this.themeChangeService.toggleTheme();
  }
}
