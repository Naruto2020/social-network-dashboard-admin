import { Component, OnInit } from '@angular/core';

import {DasboardService} from '../dasboard.service';
import { ActivatedRoute, Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {MatSort} from '@angular/material/sort';
import { ViewChild } from '@angular/core';
import {User} from '../model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  columnsList: string[] = ['id', 'nom', 'username', 'email', 'edit', 'delete'];

  @ViewChild(MatPaginator, { static: true }) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  User_Data :any;
  dataSource!: MatTableDataSource<User>;

  constructor(
    private dashService: DasboardService,
    private router : ActivatedRoute,
    private route : Router
    ) { }


  ngOnInit(): void {
    this.dashService.displayUsers().subscribe(res =>{
      this.User_Data = res;
      this.dataSource = new MatTableDataSource(this.User_Data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

  }

  cancelUsers(){
    // using params
    //console.log("ici Id : ",this.router.snapshot.params._id);
    /*this.dashService.deleteUser(this.router.snapshot.params._id).subscribe(res =>{
      this.dataSource = this.dashService.displayUsers();
      console.log("results : ",res);
      return res;
    });*/

    // using paramMap
    this.router.paramMap.subscribe(paramMap =>{
      if(!paramMap.has("_id")){
        // redirect
        return;
      }
      const userId = paramMap.get("_id");
      console.log("the ID : ",userId);
      this.dashService.deleteUser(userId).subscribe(res =>{
        this.dashService.displayUsers().subscribe(res =>{
          this.User_Data = res;
          this.dataSource = new MatTableDataSource(this.User_Data);
          this.dataSource.paginator = this.paginator;
          this.dataSource.sort = this.sort;
        });
        console.log("user supprimé est : ",res.username);
        return res;
      });
    });
  }

}
