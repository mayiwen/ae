import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MayiwenJsonService {
  constructor(private http: HttpClient) { }
  json(obj) {
    return JSON.stringify(obj);
  }
}
