import { Component, OnInit } from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup} from '@angular/forms';
import {DasboardService} from '../dasboard.service';
import {User} from '../model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update-users',
  templateUrl: './update-users.component.html',
  styleUrls: ['./update-users.component.scss']
})
export class UpdateUsersComponent implements OnInit {
  alert:boolean= false;

  options!: FormGroup;
  hideRequiredControl = new FormControl(false);
  floatLabelControl = new FormControl('auto');


  constructor(
    private fb: FormBuilder, private dashService: DasboardService, private router:ActivatedRoute
  ) {}

  ngOnInit(): void {

    this.options = this.fb.group({
      hideRequired: this.hideRequiredControl,
      floatLabel: this.floatLabelControl,
      nom:"",
      username:""
    });

    this.router.paramMap.subscribe(paramMap =>{
      if(!paramMap.has("_id"))
        return;

      const userId = paramMap.get("_id");
      this.dashService.currentUser(userId).subscribe(res =>{
        this.options = this.fb.group({
          nom:res["nom"],
          username:res["username"]
        });

      });
    });

  }

  mettreAjour(){
    let userId = this.router.snapshot.params._id;
    let formValue = this.options.value;

    this.dashService.edittUser(userId, formValue).subscribe(res =>{
      this.options = this.fb.group({
        nom:res["nom"],
        username:res["username"]
      });
      this.alert = true;
    });
  }

  fermerAlert(){
    this.alert = false;
  };

}
