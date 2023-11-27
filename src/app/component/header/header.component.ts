import { Component, HostListener } from '@angular/core';
import {ThemeService} from '../../service/Theme/theme.service'
import { ThemePalette } from '@angular/material/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  constructor(public themeService: ThemeService) {}

  toggleTheme() {
    this.themeService.toggleTheme();
  }
 


  getToggleText(){
    return this.themeService.isDarkTheme ? 'wb_sunny' : 'brightness_2';
  }
  data = [
    {
      icon : 'android',
      link: "/service/mobile-app-development",
      linkText: "Mobile App Development",
      spanText: [
        "PWA",
        "Hybrid Apps",
        "Native iOS Apps",
        "Native Android Apps",
        "Cross Platform Apps"
      ]
    },
    {
      icon:'build',
      link: "/service/web-development",
      linkText: "Web Development",
      spanText: [
        "API & Backend",
        "Enterprise Solutions",
        "MVC Development",
        "Yii Development",
        "eCommerce Development",
        "Custom Software Development"
      ]
    },
    {
      icon:'launch',
      link: "/service/ui-uxdesign",
      linkText: "Ui/Ux Design",
      spanText: [
        "Prototyping",
        "UX Design",
        "UI Design",
        "Interactive Design",
        "Usability Testing",
        "Enterprise software"
      ]
    },
    {
      icon:'fact_check',
      link: "/service/qa",
      linkText: "QA",
      spanText: [
        "Manual QA Testing",
        "Web Automation Testing",
        "Mobile App Testing",
        "Performance Testing"
      ]
    },
    {
      icon:'receipt_long',
      link: "/service/devops",
      linkText: "DevOps",
      spanText: [
        "Containerization",
        "Automated Testing",
        "Monitoring and Logging",
        "Continuous Integration (CI)",
        "Infrastructure as Code (IaC)",
        "Continuous Deployment (CD)"
      ]
    },
    {
      icon:'admin_panel_settings',
      link: "/service/saperp",
      linkText: "SAP/ERP",
      spanText: [
        "SAP Business Network",
        "SAP Integration Services",
        "SAP Analytics and Reporting",
        "SAP Support and Maintenance",
        "SAP Consulting and Training",
        "SAP Intelligent Technologies"
      ]
    }
  ];
  
}
