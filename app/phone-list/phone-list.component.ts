import { Component, OnInit } from "@angular/core";
import { Phone, PhoneData } from "../core/phone/phone.service";

@Component({
  selector: "phone-list",
  templateUrl: "./phone-list.template.html",
})
export class PhoneListComponent implements OnInit {
  phones: PhoneData[] = [];
  orderProp: string;

  constructor(private Phone: Phone) {
    "ngInject";
  }

  public ngOnInit(): void {
    this.Phone.query({}, (phones) => {
      this.phones = phones;
    });
    this.orderProp = "age";
  }
}
