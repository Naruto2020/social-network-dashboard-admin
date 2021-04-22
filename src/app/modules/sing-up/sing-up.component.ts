import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {DasboardService} from '../dasboard.service';
import {User} from '../model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sing-up',
  templateUrl: './sing-up.component.html',
  styleUrls: ['./sing-up.component.scss']
})
export class SingUpComponent implements OnInit {

  alert:boolean= false;
  email = new FormControl('', [Validators.required, Validators.email]);

  options!: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');
  constructor(private fb:FormBuilder, private dashService:DasboardService) { }

  ngOnInit(): void {
    this.options = this.fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
      nom:"",
      username:"",
      email:"",
      password:"",

    });
  }

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }
  addUser(){
    const formValue = this.options.value;
    const newUser = new User();
    newUser.nom = formValue["nom"];
    newUser.username = formValue["username"];
    newUser.email = formValue["email"];
    newUser.password = formValue["password"];
    this.dashService.singUp(newUser).subscribe(res =>{
      this.options.reset({});
      this.alert = true ;
      return res;
    });

  }

  fermerAlert(){
    this.alert = false;
  };


}
