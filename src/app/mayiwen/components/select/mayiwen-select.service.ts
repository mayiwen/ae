import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()
export class MayiwenSelectService {
  flagShow = false;
  obj = {} as any;
  subject = new Subject();
  constructor(private http: HttpClient) { }
}
