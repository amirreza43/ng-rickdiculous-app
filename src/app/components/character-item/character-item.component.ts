import { Component, OnInit ,Input } from '@angular/core';

@Component({
  selector: 'app-character-item',
  templateUrl: './character-item.component.html',
  styleUrls: ['./character-item.component.css']
})
export class CharacterItemComponent implements OnInit {
  @Input() character;

  constructor() { }

  ngOnInit(): void {

  }

}
