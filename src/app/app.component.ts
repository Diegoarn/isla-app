import { Component, OnInit } from '@angular/core';
import { generateSitemap } from '../sitemap';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'isla-app';

  ngOnInit() {
  
  }
}
