import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  username: string = 'MON SUPER NAME'
  constructor() { }

  ngOnInit() {
  }

  onClick() {
    alert('salut');
  }

}
