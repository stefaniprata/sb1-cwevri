import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  template: `
    <div class="modal-backdrop" (click)="close.emit()">
      <div class="modal-content" (click)="$event.stopPropagation()">
        <h2>{{ title }}</h2>
        <p>{{ content }}</p>
        <div class="button-container">
          <button class="secondary-button" (click)="close.emit()">Fechar</button>
          <button class="primary-button" (click)="onHire()">Contratar</button>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .modal-backdrop {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.5);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 1000;
    }
    .modal-content {
      background-color: white;
      padding: 20px;
      border-radius: 5px;
      max-width: 500px;
      width: 90%;
    }
    h2 {
      color: #3498db;
      margin-bottom: 15px;
    }
    .button-container {
      display: flex;
      justify-content: space-between;
      margin-top: 20px;
    }
    button {
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      cursor: pointer;
      font-size: 1em;
      transition: background-color 0.3s;
    }
    .primary-button {
      background-color: #3498db;
      color: white;
    }
    .primary-button:hover {
      background-color: #2980b9;
    }
    .secondary-button {
      background-color: #95a5a6;
      color: white;
    }
    .secondary-button:hover {
      background-color: #7f8c8d;
    }
  `]
})
export class ModalComponent {
  @Input() title: string = '';
  @Input() content: string = '';
  @Output() close = new EventEmitter<void>();
  @Output() hire = new EventEmitter<void>();

  onHire() {
    this.hire.emit();
    this.close.emit();
  }
}