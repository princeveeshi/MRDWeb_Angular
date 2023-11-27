import { Component } from '@angular/core';
import {ThemeService} from '../../service/Theme/theme.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html'
})
export class AboutComponent {
  constructor(public themeService: ThemeService) {}
}
