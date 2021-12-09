import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})

export class ListItemComponent implements OnInit {
  constructor() { }
  @Input() personItem;
  @Output() onClick = new EventEmitter<any>();

  ngOnInit() {
  }

  clicouNaDiv() {
    this.onClick.emit({ nome: 'Camilly' });
  }
}
