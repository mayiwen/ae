import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DesktopService {
  constructor(private http: HttpClient) { }
}
