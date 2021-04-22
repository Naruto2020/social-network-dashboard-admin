import { Component, OnInit } from '@angular/core';
import {DasboardService} from '../dasboard.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  listesProfils:any;
  tableau:any=[];
  card1:any= 0;

  constructor(private dashService:DasboardService) { }

  ngOnInit(): void {
    /*this.dashService.displayUsers().subscribe(res =>{
      this.listesProfils = res;
      // transform res to arry
      let objet = this.listesProfils;
      let monTableau = Object.keys(objet).map(function(cle) {
        return [Number(cle), objet[cle]];
      });
      console.log(monTableau.length);
      //this.tableau = monTableau.length;

    });*/

     this.card1 = this.dashService.card1();

  }

}
