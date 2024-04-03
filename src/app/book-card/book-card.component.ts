import { Component, Input, OnInit } from '@angular/core';
import { Books} from '../modelos.model'
@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
  styleUrls: ['./book-card.component.scss'],
})
export class BookCardComponent {
  @Input() book!: Books;
}
