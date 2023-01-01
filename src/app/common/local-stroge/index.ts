import { Injectable } from '@angular/core';

@Injectable()
export class LocalStorage {
  public localStorage: any;
  constructor() {
    if (!localStorage) {
      throw new Error('current browser does not support Local Storage');
    }
    this.localStorage = localStorage;
  }
  public set(key: string, value: string): void {
    this.localStorage[key] = value;
  }

  public get(key: string): string {
    return this.localStorage[key] || false;
  }
  public setArr(key: string, value: Array<any>): void {
    this.localStorage[key] = value;
  }
  public setObject(key, obj) {
    this.localStorage[key] = JSON.stringify(obj);
  }
  public getObject(key) {
    return this.localStorage[key] ? JSON.parse(this.localStorage[key]) : [];
  }
};
