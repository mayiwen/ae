import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MayiwenService {
  constructor(private http: HttpClient) { }
}
