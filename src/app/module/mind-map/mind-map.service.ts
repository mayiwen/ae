import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MindMapService {
  constructor(private http: HttpClient) { }
}
