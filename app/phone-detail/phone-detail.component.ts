import { Component, OnInit } from "@angular/core";
import { Phone, PhoneData } from "../core/phone/phone.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "phone-detail",
  templateUrl: "./phone-detail.template.html",
})
export class PhoneDetailComponent implements OnInit {
  phone: PhoneData;
  mainImageUrl: string;

  constructor(private Phone: Phone) {
    "ngInject";
  }

  public ngOnInit(): void {
    this.Phone.get({ phoneId: this.$routeParams.phoneId }, (phone) => {
      this.phone = phone;
      this.setImage(phone.images[0]);
    });
  }

  setImage(imageUrl: string) {
    this.mainImageUrl = imageUrl;
  }
}
