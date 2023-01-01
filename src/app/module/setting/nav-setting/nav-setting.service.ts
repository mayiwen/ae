import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class NavSettingService {
  constructor(private http: HttpClient) { }
}
