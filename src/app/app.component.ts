import { Component, OnInit } from '@angular/core';
import { generateSitemap } from '../sitemap.xml';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'isla-app';

  ngOnInit() {
    const sitemap = generateSitemap();

    const blob = new Blob([sitemap], { type: 'application/xml' });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'sitemap.xml';
    link.click();
    window.URL.revokeObjectURL(url);
  }
}
