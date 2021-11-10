import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
    constructor () {}
    
    intercept(
        req: HttpRequest<any>,
        next: HttpHandler
    ): Observable<HttpEvent<any>> {
        req = req.clone({
            setHeaders: {
                'x-rapidapi-key': '40c2ccf857mshc7bf0edc395ca6dp1be7b7jsn22689fab51c3',
                'x-rapidapi-host': 'rawg-video-games-database.p.rapidapi.com'
            },
            setParams: {
                'key': '4eca111c795f4705907763c893ba9a8d'
            }
        });
        return next.handle(req);
    }
}