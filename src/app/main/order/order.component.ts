import { Component } from '@angular/core';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css'],
})
export class OrderComponent {
  username = '';
  email = '';
  text = '';

  sendOrder() {};
  alert() {
    window.alert("Aplicación en prueba")
  }
}
