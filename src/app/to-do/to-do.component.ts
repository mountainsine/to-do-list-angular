import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-do',
  templateUrl: './to-do.component.html',
  styleUrls: ['./to-do.component.scss']
})
export class ToDoComponent implements OnInit {

/// Properties are usually camelCase

  @Input() title: string = 'john jacob jingleheimer';
  toDos: string[]=[]
  /// ^ this initializes an empty array (the equals part)
  newItemName: string = 'jingleheimer John';
  /// @Input() newItemName: string = 'jingleheimer John';
  constructor() { }
  ngOnInit(): void {
  }
}