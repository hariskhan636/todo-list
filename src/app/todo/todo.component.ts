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
  data = '';
  editMode = false;
  index = 0;
  isChecked: boolean = false;

  constructor() {}

  ngOnInit() {
    this.itemForm = new FormGroup({
      item: new FormControl('', [
        Validators.required,
        Validators.maxLength(70),
      ]),
      checked: new FormControl(false),
    });
  }

  addItem() {
    const item1 = this.itemForm.getRawValue();
    this.items.push(item1);
    this.itemForm.reset();
  }

  deleteItem(i: number) {
    this.items.splice(i, 1);
  }

  editItem(i: number) {
    this.index = i;
    this.data = this.items[i].item;
    this.editMode = true;
  }

  update() {
    this.items[this.index].item = this.data;
    this.editMode = false;
    this.index = 0;
    this.itemForm.reset();
  }

  get item() {
    return this.itemForm.controls['item'];
  }
}
