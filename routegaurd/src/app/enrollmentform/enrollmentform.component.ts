import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../user';
import { EnrollmentService } from '../enrollment.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-enrollmentform',
  templateUrl: './enrollmentform.component.html',
  styleUrls: ['./enrollmentform.component.css']
})
export class EnrollmentformComponent implements OnInit {
  @ViewChild('userForm') public enrollmentForm: NgForm;
  title = 'app';
  //topics = ['Angular', 'React', 'Vue'];
  userModel = new User('Rob', 'rob@test.com', 5556665566, 'morning', true);
  //topicHasError = true;
  submitted = false;
  errorMsg = '';

  constructor(private _enrollmentService: EnrollmentService) {}

  // validateTopic(value) {
  //   if (value === 'default') {
  //     this.topicHasError = true;
  //   } else {
  //     this.topicHasError = false;
  //   }
  // }

  ngOnInit(){

  }

  onSubmit() {
    this.submitted = true;
    console.log(this.userModel);
    this._enrollmentService.enroll(this.userModel)
      .subscribe(
        response => console.log('Success!', response),
        error => this.errorMsg = error.statusText
      )
  }

}
