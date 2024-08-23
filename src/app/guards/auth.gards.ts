import { Injectable } from "@angular/core";
import { ActivatedRoute, ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { UserService } from "../services/user.service";
import { map, Observable } from "rxjs";



@Injectable({
    providedIn: 'root'
})
export class AuthGards  implements CanActivate {
    constructor(
      private userService: UserService,
      private router: Router
    ) {}
    canActivate(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<boolean> | boolean {
        return this.userService.isAuthonticated().pipe(
            map((isAuthonticated) => {
                if (isAuthonticated) {
                    return true;
                }
                this.router.navigate(['/login']);
                return false;
            })
        );
    }
}
