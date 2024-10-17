import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  template: `
    <footer>
      <p>&copy; 2023 Nossa Empresa. Todos os direitos reservados.</p>
      <div class="social-links">
        <a href="#" target="_blank">Facebook</a>
        <a href="#" target="_blank">Twitter</a>
        <a href="#" target="_blank">LinkedIn</a>
      </div>
    </footer>
  `,
  styles: [`
    footer {
      background-color: #34495e;
      color: white;
      text-align: center;
      padding: 20px;
    }
    .social-links {
      margin-top: 10px;
    }
    .social-links a {
      color: white;
      margin: 0 10px;
      text-decoration: none;
    }
    @media (max-width: 480px) {
      .social-links {
        display: flex;
        flex-direction: column;
        align-items: center;
      }
      .social-links a {
        margin: 5px 0;
      }
    }
  `]
})
export class FooterComponent {}