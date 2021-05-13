import { Component, Input, OnInit, } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})

export class ToDoComponent implements OnInit {
  newItemName: string = 'Put a To do task here!';
  toDos: string[]=[]
  bannerTitleText = 'Welcome to the What do you need to do Club!!!!';
  // @Input() title: string = 'What do you need to do?';
    addToList() {
      this.toDos.push(this.newItemName)
      alert(this.newItemName);
  }  

  constructor() {
   }
  ngOnInit(): void {    
  }
}



