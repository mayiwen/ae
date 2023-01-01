import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpHandler, HttpRequest, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class CommonInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // const apiReq = req.clone({ url: `http://localhost:3000/${req.url}` });
    const apiReq = req.clone({ url: `http://121.4.117.203:3000/${req.url}` });
    return next.handle(apiReq);
  }
}
