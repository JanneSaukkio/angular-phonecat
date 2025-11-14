import { IAngularStatic } from 'angular';

declare var angular: IAngularStatic;

export interface PhoneData {
  name: string;
  snippet: string;
  images: string[];
}

export class Phone {
  static $inject = ['$http'];
  constructor(private $http: ng.IHttpService) {}

  get(params?: any, success?: Function, error?: Function) {
    return this.$http.get<PhoneData>(`phones/${params.phoneId}.json`)
      .then(({ data }) => {
        if (success) success(data);
        return data;
      })
      .catch((err) => {
        if (error) error(err);
        throw err;
      });
  }

  query(params?: Object, success?: Function, error?: Function) {
    return this.$http.get<PhoneData[]>('phones/phones.json')
      .then(({ data }) => {
        if (success) success(data);
        return data;
      })
      .catch((err) => {
        if (error) error(err);
        throw err;
      });
  }
}

angular.
  module('core.phone').
  service('Phone', Phone);
