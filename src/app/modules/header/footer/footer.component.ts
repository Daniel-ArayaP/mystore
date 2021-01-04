import { Component, OnInit } from '@angular/core';
import {Path} from '../../../config';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

path:String = Path.url;

  constructor() { }

  ngOnInit(): void {
  }

}
