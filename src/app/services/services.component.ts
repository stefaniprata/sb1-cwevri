import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, ModalComponent],
  template: `
    <section class="services" id="services">
      <h2>Nossos Serviços</h2>
      <div class="service-list">
        <div class="service-item" *ngFor="let service of services">
          <h3>{{ service.title }}</h3>
          <p>{{ service.description }}</p>
          <button (click)="openModal(service)">Saiba Mais</button>
        </div>
      </div>
    </section>
    <app-modal
      *ngIf="selectedService"
      [title]="selectedService.title"
      [content]="selectedService.fullDescription"
      (close)="closeModal()"
      (hire)="hireService(selectedService)"
    ></app-modal>
  `,
  styles: [`
    .services {
      padding: 80px 20px;
      background-color: #f9f9f9;
    }
    h2 {
      text-align: center;
      margin-bottom: 50px;
      font-size: 2.5em;
    }
    .service-list {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 30px;
    }
    .service-item {
      background-color: white;
      border-radius: 10px;
      padding: 30px;
      box-shadow: 0 5px 15px rgba(0,0,0,0.1);
      text-align: center;
      flex: 1 1 300px;
      max-width: 350px;
    }
    h3 {
      color: #3498db;
      margin-bottom: 15px;
    }
    button {
      background-color: #3498db;
      color: white;
      border: none;
      padding: 10px 20px;
      border-radius: 5px;
      cursor: pointer;
      transition: background-color 0.3s;
    }
    button:hover {
      background-color: #2980b9;
    }
    @media (max-width: 768px) {
      .service-item {
        flex: 1 1 100%;
      }
    }
  `]
})
export class ServicesComponent {
  services = [
    {
      title: 'Desenvolvimento Web',
      description: 'Criamos sites modernos e responsivos.',
      fullDescription: 'Nosso serviço de desenvolvimento web oferece soluções personalizadas para sua presença online. Utilizamos as mais recentes tecnologias para criar sites rápidos, seguros e otimizados para mecanismos de busca.'
    },
    {
      title: 'Marketing Digital',
      description: 'Estratégias para aumentar sua visibilidade online.',
      fullDescription: 'Nossa equipe de marketing digital desenvolve estratégias abrangentes para aumentar sua presença online, incluindo SEO, marketing de conteúdo, mídias sociais e publicidade paga.'
    },
    {
      title: 'Consultoria em TI',
      description: 'Orientação especializada para suas necessidades tecnológicas.',
      fullDescription: 'Oferecemos consultoria em TI para ajudar sua empresa a tomar decisões informadas sobre tecnologia. Nossos especialistas podem ajudar com planejamento estratégico, seleção de software e hardware, e muito mais.'
    }
  ];

  selectedService: any = null;

  openModal(service: any) {
    this.selectedService = service;
  }

  closeModal() {
    this.selectedService = null;
  }

  hireService(service: any) {
    console.log(`Serviço contratado: ${service.title}`);
    // Aqui você implementaria a lógica para contratar o serviço
  }
}