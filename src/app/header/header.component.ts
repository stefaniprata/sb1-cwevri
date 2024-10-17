import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  template: `
    <header>
      <div class="logo">
        <img src="https://via.placeholder.com/150x50?text=Logo" alt="Logo da Empresa" />
      </div>
      <nav>
        <button class="menu-toggle" (click)="toggleMenu()">&#9776;</button>
        <ul [class.active]="isMenuOpen">
          <li><a href="#home" (click)="scrollToElement($event, 'home')">Home</a></li>
          <li><a href="#about" (click)="scrollToElement($event, 'about')">Sobre</a></li>
          <li><a href="#services" (click)="scrollToElement($event, 'services')">Serviços</a></li>
          <li><a href="#contact" (click)="scrollToElement($event, 'contact')">Contato</a></li>
        </ul>
      </nav>
    </header>
  `,
  styles: [`
    header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px;
      background-color: #fff;
      box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      position: sticky;
      top: 0;
      z-index: 1000;
    }
    .logo img {
      height: 50px;
    }
    nav ul {
      display: flex;
      list-style-type: none;
      margin: 0;
      padding: 0;
    }
    nav ul li {
      margin-left: 20px;
    }
    nav ul li a {
      text-decoration: none;
      color: #333;
      font-weight: bold;
      transition: color 0.3s ease;
    }
    nav ul li a:hover {
      color: #3498db;
    }
    .menu-toggle {
      display: none;
      background: none;
      border: none;
      font-size: 1.5em;
      cursor: pointer;
    }
    @media (max-width: 768px) {
      .menu-toggle {
        display: block;
      }
      nav ul {
        display: none;
        flex-direction: column;
        position: absolute;
        top: 100%;
        left: 0;
        right: 0;
        background-color: #fff;
        box-shadow: 0 2px 5px rgba(0,0,0,0.1);
      }
      nav ul.active {
        display: flex;
      }
      nav ul li {
        margin: 0;
        text-align: center;
      }
      nav ul li a {
        display: block;
        padding: 10px;
      }
    }
  `]
})
export class HeaderComponent {
  isMenuOpen = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToElement(event: Event, elementId: string): void {
    event.preventDefault();
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start', inline: 'nearest' });
    }
    this.isMenuOpen = false;
  }
}