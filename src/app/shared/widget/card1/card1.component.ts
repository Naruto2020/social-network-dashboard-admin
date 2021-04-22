import { Component, Input, OnInit } from '@angular/core';
import {DasboardService} from '../../../modules/dasboard.service';

@Component({
  selector: 'app-widget-card1',
  templateUrl: './card1.component.html',
  styleUrls: ['./card1.component.scss']
})
export class Card1Component implements OnInit {
  numberOfUsr:any=0;
  @Input() data:any = 0;

  constructor(private dashService: DasboardService) { }

  ngOnInit(): void {
    this.dashService.card1().subscribe(res =>{
      console.log(res.count);
      this.numberOfUsr = res.count;

    });

  }

}
