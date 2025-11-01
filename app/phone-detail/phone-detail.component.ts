import { Component } from '@angular/core';
import { Phone, PhoneData } from '../core/phone/phone.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'phone-detail',
  templateUrl: './phone-detail/phone-detail.template.html',
})
export class PhoneDetailComponent {
  phone: PhoneData;
  mainImageUrl: string;

  constructor(activatedRoute: ActivatedRoute, phone: Phone) {
    let phoneId = activatedRoute.snapshot.paramMap.get('phoneId');
    phone.get(phoneId).subscribe((data) => {
      this.phone = data;
      this.setImage(data.images[0]);
    });
  }

  setImage(imageUrl: string) {
    this.mainImageUrl = imageUrl;
  }
}
