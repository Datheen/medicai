import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Search } from "../search/search";
import { Home } from "../../pages/home/home";

@Component({
  selector: 'app-sidebar',
  imports: [CommonModule, Search, Home],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.css',
})
export class Sidebar {
  isDarkMode = true;

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    document.documentElement.setAttribute('data-theme', this.isDarkMode ? 'dark' : 'light');
  }
}
