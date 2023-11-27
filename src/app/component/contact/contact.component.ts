import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../../service/Theme/theme.service';
import {  FormBuilder,FormControl,FormGroup,Validators,} from '@angular/forms';
import { ContactService} from '../../service/APIConfig/contact.service'
import { IContact } from '../../DTOs/Contact/IContact'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
})
export class ContactComponent implements OnInit {
  manageForm!: FormGroup;
  private contactSubscription: Subscription | undefined;
  



  constructor(public themeService: ThemeService, private fb: FormBuilder,private contactService: ContactService,
    private http: HttpClient) {
    this.createManageForm();
  }
  ngOnInit(): void {
    this.createManageForm();
    console.log('text');
  }

  createManageForm() {
    this.manageForm = this.fb.group({
      txtName: ['' ],
      txtEmail: [''],
      txtMessage: [''],
      cbBranding: false,
      cbDigitalMarketing: false,
    cbWebDevelopment: false,
    });
  }

   // Submit Function
   onSubmit() {
    if (this.manageForm.valid) {
      const contactData: IContact = this.manageForm.value;
      const apiUrl = 'https://localhost:44378/api/PostContactData'; 
      const headers = new HttpHeaders({
        'Content-Type': 'application/json', 
      });

      console.log('Contact Data:', contactData);
      
      this.http.post(apiUrl, contactData, { headers }).subscribe(
        (response) => {
          console.log('Request succeeded:', response);
        },
        (error) => {
          console.error('Request failed:', error);
        }
      );
    }
  }
  

  ngOnDestroy(): void {
    // Unsubscribe to avoid memory leaks
    if (this.contactSubscription) {
      this.contactSubscription.unsubscribe();
    }
  }



  //#region  Getter Function

  get txtName_Get() {
    return this.manageForm.get('txtName') as FormControl;
  }

  get txtEmail_Get() {
    return this.manageForm.get('txtEmail') as FormControl;
  }

  get txtMessage_Get() {
    return this.manageForm.get('txtMessage') as FormControl;
  }

  get cbBranding_Get() {
    return this.manageForm.get('cbBranding') as FormControl;
  }

  get cbDigitalMarketing_Get() {
    return this.manageForm.get('cbDigitalMarketing') as FormControl;
  }

  get cbWebDevelopment_Get() {
    return this.manageForm.get('cbWebDevelopment') as FormControl;
  }

  //#endregion
}
