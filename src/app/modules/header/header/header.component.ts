import { Component, OnInit } from '@angular/core';
import {Path} from '../../../config';
import {CategoriesService} from '../../../services/categories.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  path:String = Path.url;

  constructor(private categoriesService: CategoriesService) { }

  ngOnInit(): void {
  }

}
