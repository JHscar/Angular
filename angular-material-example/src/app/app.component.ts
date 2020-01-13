import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';

class MyErrorStateMatcher implements ErrorStateMatcher {

  isErrorState(control: FormControl, form: import("@angular/forms").FormGroupDirective | import("@angular/forms").NgForm): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }

}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-material-example';

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  matcher = new MyErrorStateMatcher();

}
