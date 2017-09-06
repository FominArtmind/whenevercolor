import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  template: `
    <div class="container-fluid text-center">
      <div class="card personal-info">
        <div class="card-body">
          <h2 class="personal-info-string">Personal info</h2>
          <h4>Billing Address: {{userData.billingAddress}}</h4>
          <h4 class="personal-info-string">Shipping Address: {{userData.shippingAddress}}</h4>
          <input placeholder="New billing address" class="form-control" name="billingAddress" [formControl]="userDataForm.controls['billingAddress']" />
          <input placeholder="New shipping address" class="form-control" name="shippingAddress" [formControl]="userDataForm.controls['shippingAddress']" />
        </div>
      </div>
    </div>
    <app-profile-order-list></app-profile-order-list>
  `,
  styles: [`
    .personal-info {
      margin-top: 1.5rem;
    }
    .personal-info-string {
      margin-bottom: 1.5rem;
    }
  `]
})
export class ProfileComponent implements OnInit {
  userDataForm: FormGroup;
  userData = { billingAddress: '102923032322', shippingAddress: 'New York, Great str. 7' };

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if(event.charCode === 13) {
      if(this.userDataForm.controls['billingAddress'].valid) {
        this.userData.billingAddress = this.userDataForm.controls['billingAddress'].value;
      }
      if(this.userDataForm.controls['shippingAddress'].valid) {
        this.userData.shippingAddress = this.userDataForm.controls['shippingAddress'].value;
      }
    }
  }

  constructor(fb: FormBuilder) {
    this.userDataForm = fb.group({
      'billingAddress': [null, Validators.compose([Validators.required, Validators.minLength(10)])],
      'shippingAddress': [null, Validators.compose([Validators.required, Validators.minLength(10)])]
    });
  }

  ngOnInit() {
  }

}
