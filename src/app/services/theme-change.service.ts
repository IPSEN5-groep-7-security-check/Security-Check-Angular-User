import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ThemeChangeService {
  private rootNode = window.document.documentElement;
  private isDarkMode = new BehaviorSubject<boolean>(
    this.rootNode.getAttribute('data-theme') === 'dark' ? true : false
  );

  isDarkMode$ = this.isDarkMode.asObservable();

  toggleTheme() {
    console.log(this.isDarkMode.value);
    this.isDarkMode.next(!this.isDarkMode.value);
    this.isDarkMode.value ? this.applyDarkTheme() : this.applyLightTheme();
  }

  applyDarkTheme() {
    localStorage['theme'] = 'dark';
    this.rootNode.setAttribute('data-theme', 'dark');
  }

  applyLightTheme() {
    localStorage['theme'] = 'light';
    this.rootNode.setAttribute('data-theme', 'light');
  }
}
