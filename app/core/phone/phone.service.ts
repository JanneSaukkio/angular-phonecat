import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

export interface PhoneData {
  name: string;
  snippet: string;
  images: string[];
}

@Injectable()
export class Phone {
  constructor(private $http: HttpClient) {}
  get(params?: any, success?: Function, error?: Function) {
    return this.$http
      .get<PhoneData>(`phones/${params.phoneId}.json`)
      .then((data) => {
        if (success) success(data);
        return data;
      })
      .catch((err) => {
        if (error) error(err);
        throw err;
      });
  }

  query(params?: Object, success?: Function, error?: Function) {
    return this.$http
      .get<PhoneData[]>("phones/phones.json")
      .then((data) => {
        if (success) success(data);
        return data;
      })
      .catch((err) => {
        if (error) error(err);
        throw err;
      });
  }
}
