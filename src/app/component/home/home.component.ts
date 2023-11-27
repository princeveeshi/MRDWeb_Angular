import { Component } from '@angular/core';
import { ThemeService } from '../../service/Theme/theme.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent {
  constructor(public themeService: ThemeService) {}
}
