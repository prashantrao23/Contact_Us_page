import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  readonly APIUrl="http://127.0.0.1:8080/api/";

  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) { }

  contactForm = this.fb.group({
    fname: [''],
    lname: [''],
    email: [''],
    message: [''],
  });

  onSubmit(): void {
    // var val = {
    //   fname: this.contactForm.value.fname,
    //   lname: this.contactForm.value.lname,
    //   email: this.contactForm.value.email,
    //   message: this.contactForm.value.message,
    // };
    console.log(this.contactForm.getRawValue());

    this.http.post(this.APIUrl, this.contactForm.getRawValue()).subscribe((res: any) => {
      console.log(res);
    })
  }

}
