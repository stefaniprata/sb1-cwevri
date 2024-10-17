import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  template: `
    <section class="contact" id="contact">
      <h2>Entre em Contato</h2>
      <form (ngSubmit)="onSubmit()">
        <input type="text" name="name" [(ngModel)]="name" placeholder="Seu Nome" required>
        <input type="email" name="email" [(ngModel)]="email" placeholder="Seu E-mail" required>
        <textarea name="message" [(ngModel)]="message" placeholder="Sua Mensagem" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  `,
  styles: [`
    .contact {
      padding: 80px 20px;
      background-color: #3498db;
      color: white;
    }
    h2 {
      text-align: center;
      margin-bottom: 50px;
      font-size: 2.5em;
    }
    form {
      display: flex;
      flex-direction: column;
      max-width: 600px;
      margin: 0 auto;
    }
    input, textarea {
      margin-bottom: 20px;
      padding: 15px;
      border: none;
      border-radius: 5px;
      font-size: 1em;
    }
    textarea {
      height: 150px;
    }
    button {
      background-color: #2ecc71;
      color: white;
      border: none;
      padding: 15px;
      border-radius: 5px;
      cursor: pointer;
      font-size: 1.2em;
      transition: background-color 0.3s;
    }
    button:hover {
      background-color: #27ae60;
    }
    @media (max-width: 768px) {
      form {
        width: 90%;
      }
    }
    @media (max-width: 480px) {
      input, textarea, button {
        font-size: 0.9em;
      }
    }
  `]
})
export class ContactComponent {
  name: string = '';
  email: string = '';
  message: string = '';

  onSubmit() {
    console.log('Form submitted', { name: this.name, email: this.email, message: this.message });
    // Aqui você normalmente enviaria estes dados para um servidor
    this.name = '';
    this.email = '';
    this.message = '';
  }
}