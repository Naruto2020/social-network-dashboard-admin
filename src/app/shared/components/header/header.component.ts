import { Component, OnInit, Output } from '@angular/core';
import  {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() toogleSidebarForMe :EventEmitter<any> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar(){
    this.toogleSidebarForMe.emit();
  }
}
