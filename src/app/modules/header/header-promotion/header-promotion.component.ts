import { Component, OnInit } from '@angular/core';
//import { ProductsService } from 'src/app/services/products.service';
import {Path} from '../../../config';
import {ProductsService} from '../../../services/products.service'
@Component({
  selector: 'app-header-promotion',
  templateUrl: './header-promotion.component.html',
  styleUrls: ['./header-promotion.component.css']
})
export class HeaderPromotionComponent implements OnInit {

  path:String = Path.url;

  top_banner:Object = null;
  preload:Boolean = false;

  constructor(private ProductsService: ProductsService) { }

  ngOnInit(): void {

    this.preload = true;

this.ProductsService.getData()

.subscribe(resp =>{
  //console.log("resp", resp)
  let i;
  let size = 0;
  for(i in resp){


    size++
  }
  let index = Math.floor(Math.random()*size);


  this.top_banner = JSON.parse(resp[Object.keys(resp)[index]].top_banner);

  
  console.log("this.top_banner", this.top_banner);



  this.preload = false;
  //console.log("index", index);
  //console.log("size", size);
})
  }

}
