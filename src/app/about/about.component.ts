import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  template: `
    <section class="about" id="about">
      <h2>Sobre Nós</h2>
      <p>Somos uma empresa dedicada a fornecer soluções de alta qualidade para nossos clientes. Com anos de experiência no mercado, nossa equipe está pronta para atender às suas necessidades.</p>
    </section>
  `,
  styles: [`
    .about {
      background-color: #f9f9f9;
      padding: 80px 20px;
      text-align: center;
    }
    h2 {
      color: #333;
      margin-bottom: 30px;
      font-size: 2.5em;
    }
    p {
      max-width: 800px;
      margin: 0 auto;
      line-height: 1.6;
    }
  `]
})
export class AboutComponent {}