import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent implements OnInit {
  itemForm!: FormGroup;
  items: any = [];

  constructor() {}

  ngOnInit() {
    this.itemForm = new FormGroup({
      item: new FormControl('', Validators.required),
    });
  }

  addItem() {
    const item1 = this.itemForm.getRawValue().item;
    this.items.push(item1);
  }
}
