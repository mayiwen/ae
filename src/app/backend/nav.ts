import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AnyRecord } from 'dns';
import { idText } from 'typescript/lib/tsserverlibrary';

@Injectable()
export class BackendNavService {
  constructor(private http: HttpClient) { }
  linkTitle(): Observable<any> { return this.http.get('link');}
  linkTitlePost(title): Observable<any> { return this.http.post('link', {title});};
  linkTitleDelete(id): Observable<any> { return this.http.delete('link/' + id, );};
  linkTitlePacch(id, title): Observable<any> { return this.http.patch('link/' + id,{title} );};
  linkLink(id): Observable<any> { return this.http.get('link/link?id=' + id);}
  linkLinkSave(data): Observable<any> { return this.http.post('link/link', data);}
  linkLinkDeleteById(id): Observable<any> { return this.http.delete('link/link/' + id);}
  patchLinkAll(list): Observable<any> { return this.http.post('link/link/all', list);};
}

