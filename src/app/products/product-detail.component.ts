import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct } from './IProduct';

@Component({

  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute,
              private router : Router) { }

  pageTitle : string = 'Product Details';

  product : IProduct | undefined;


  ngOnInit(): void {
    const id = Number (this.route.snapshot.paramMap.get('id'));
    this.pageTitle += `: ${id}`; 

  }

  onBack() : void {
    this.router.navigate(['/products'])
  }

}
