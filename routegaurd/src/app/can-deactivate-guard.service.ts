import { Injectable } from "@angular/core";
import { CanDeactivate } from "@angular/router";
import { EnrollmentformComponent } from './enrollmentform/enrollmentform.component'

@Injectable()
export class canDeactivateGuard implements CanDeactivate<EnrollmentformComponent>{
    canDeactivate(component: EnrollmentformComponent): boolean{
        //if form is dirty, we display confirmation
        if(component.enrollmentForm.dirty){
            return confirm("Are you sure you want to discard your changes?");
        }
        return true;
    }
}