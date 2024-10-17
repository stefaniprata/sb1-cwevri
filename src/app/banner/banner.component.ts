import { Component } from '@angular/core';

@Component({
  selector: 'app-banner',
  standalone: true,
  template: `
    <section class="banner" id="home">
      <div class="banner-content">
        <h1>Bem-vindo à Nossa Empresa</h1>
        <p>Soluções inovadoras para o seu negócio</p>
        <button>Saiba Mais</button>
      </div>
    </section>
  `,
  styles: [`
    .banner {
      background-image: url('https://via.placeholder.com/1920x1080?text=Banner+Background');
      background-size: cover;
      background-position: center;
      color: white;
      text-align: center;
      padding: 100px 20px;
      position: relative;
    }
    .banner::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: rgba(0, 0, 0, 0.5);
    }
    .banner-content {
      position: relative;
      z-index: 1;
    }
    h1 {
      font-size: 3em;
      margin-bottom: 20px;
    }
    p {
      font-size: 1.2em;
      margin-bottom: 30px;
    }
    button {
      background-color: #2ecc71;
      border: none;
      color: white;
      padding: 15px 30px;
      font-size: 1.2em;
      cursor: pointer;
      transition: background-color 0.3s;
    }
    button:hover {
      background-color: #27ae60;
    }
    @media (max-width: 768px) {
      h1 {
        font-size: 2.5em;
      }
      p {
        font-size: 1em;
      }
      button {
        padding: 10px 20px;
        font-size: 1em;
      }
    }
    @media (max-width: 480px) {
      h1 {
        font-size: 2em;
      }
      .banner {
        padding: 80px 20px;
      }
    }
  `]
})
export class BannerComponent {}