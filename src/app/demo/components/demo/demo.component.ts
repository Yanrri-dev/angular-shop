import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  constructor() { }

  title = 'platzi-store';

  items = ['nicolas', 'julian', 'perez'];

  ngOnInit(): void {
  }

  addItem(newItem: any): void{
    this.items.push(newItem);
  }

  deleteItem(index: number): void{
    this.items.splice(index, 1);
  }

}
