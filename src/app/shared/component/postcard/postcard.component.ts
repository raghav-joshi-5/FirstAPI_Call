import { Component, Input, OnInit } from '@angular/core';
import { Ipost } from '../../models/post';

@Component({
  selector: 'app-postcard',
  templateUrl: './postcard.component.html',
  styleUrls: ['./postcard.component.scss'],
})
export class PostcardComponent implements OnInit {
  @Input() postObj!: Ipost;
  constructor() {}

  ngOnInit(): void {}
}
