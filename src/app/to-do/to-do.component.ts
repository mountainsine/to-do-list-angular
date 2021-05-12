import { Component, Input, OnInit, } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {
  hero = 'What are you going to do?';
  hero2 = 'Jubilee';
  hero3 = 'Wolverine';
  hero4 = 'Storm';
  bannerTitleText = 'Welcome to the What do you need to do Club!!!!';
  @Input() title: string = 'What do you need to do?';
  toDos: string[]=[]
  toDoInputField1: string = 'jingleheimer John';
  newItemName2: string = 'Click Here';
  constructor() { }
  ngOnInit(): void {
  }
}



