import { Component, OnInit, HostListener } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-profile',
  template: `
    <div class="container-fluid text-center">
      <div class="card personal-info">
        <div class="card-body">
          <h3>Personal info</h3>
          <input placeholder="Billing address" class="form-control" name="billingAddress" [formControl]="userDataForm.controls['billingAddress']" />
          <input placeholder="Shipping address" class="form-control" name="shippingAddress" [formControl]="userDataForm.controls['shippingAddress']" />
        </div>
      </div>
    </div>
    <app-profile-order-list></app-profile-order-list>
  `,
  styles: [`
    .personal-info {
      margin-top: 1.5rem;
    }
  `]
})
export class ProfileComponent implements OnInit {
  userDataForm: FormGroup;
  userData = { billingAddress: '102923032322', shippingAddress: 'New York, Great str. 7' };

  @HostListener('document:keypress', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    if(event.charCode === 13 && this.userDataForm.valid) {
      this.userData.billingAddress = this.userDataForm.controls['billingAddress'].value;
      this.userData.shippingAddress = this.userDataForm.controls['shippingAddres'].value;
      // TO DO : send update notification
    }
  }

  constructor(fb: FormBuilder) {
    this.userDataForm = fb.group({
      'billingAddress': [null, Validators.compose([Validators.required, Validators.minLength(20)])],
      'shippingAddress': [null, Validators.compose([Validators.required, Validators.minLength(20)])]
    });
  }

  ngOnInit() {
  }

}
