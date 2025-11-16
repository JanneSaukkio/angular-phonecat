import { Component, OnInit } from "@angular/core";
import { Phone, PhoneData } from "../core/phone/phone.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "phone-detail",
  templateUrl: "./phone-detail/phone-detail.template.html",
})
export class PhoneDetailComponent implements OnInit {
  phone: PhoneData;
  mainImageUrl: string;

  constructor(private Phone: Phone, private activatedRoute: ActivatedRoute) {}

  public ngOnInit(): void {
    const phoneId = this.activatedRoute.snapshot.paramMap.get('phoneId');
    this.Phone.get({ phoneId: phoneId }, (phone) => {
      this.phone = phone;
      this.setImage(phone.images[0]);
    });
  }

  setImage(imageUrl: string) {
    this.mainImageUrl = imageUrl;
  }
}
