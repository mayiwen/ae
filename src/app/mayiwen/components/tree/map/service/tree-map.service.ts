import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable()
export class MayiwenTreeMapService {
  arrowSubject = new Subject()
  constructor(private http: HttpClient) { }
}
