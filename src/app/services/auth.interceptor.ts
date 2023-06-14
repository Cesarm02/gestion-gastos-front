import { HTTP_INTERCEPTORS, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "./login.service";
import { Router } from "@angular/router";
import { tap } from 'rxjs/operators';
@Injectable()
export class AuthInterceptor implements HttpInterceptor{

    constructor(private loginService:LoginService, private router:Router){

    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
        let authReq = req;
        const token = this.loginService.getToken();
        if(token != null){
            authReq = authReq.clone({
                setHeaders: {Authorization:`Bearer ${token}`}
            })
        }
        return next.handle(authReq).pipe(
            tap(
              () => {},
              (error) => {
                if (error.status === 401) {  // Código de estado 401 para token expirado o no válido
                  this.router.navigate(['/login']);  // Redirigir a la página de inicio de sesión
                }
              }
            )
        );
    }

}

export const authInterceptorProviders = [
    {
        provide : HTTP_INTERCEPTORS,
        useClass : AuthInterceptor,
        multi : true
    }
];