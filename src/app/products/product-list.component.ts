import { Component, OnInit } from "@angular/core";
import { IProduct } from "./IProduct";
import { productDataService } from "./product.service";

@Component({
    selector : 'pm-products',
    templateUrl : './product-list.html',
    styleUrls : ['./product-list.component.css']
})


export class ProductListComponent implements OnInit {
  

  constructor(private productService : productDataService){
  }
    
    pageTitle :String = 'Product List';
    showImage : boolean = false;
    errorMessage : string ='';
    filteredProducts : IProduct[] = [];
    private _listFilter : string = '';

    get listFilter() :string {
      return this._listFilter;
    }

    set listFilter(value: string){

      this._listFilter=value;
      this.filteredProducts = this.performFilter(value.toLocaleLowerCase());
      
    }

   

    performFilter (filterBy:string) : IProduct[] {
      
      return this.products.filter((product:IProduct) => 
      product.productName.toLocaleLowerCase().includes(filterBy.toLocaleLowerCase()));

    }

    products : IProduct[] = [];


    toggleImage () : void {
      console.log(this.showImage)
      this.showImage = !this.showImage;
    }

    ngOnInit(): void {
      this.productService.getProducts().subscribe({
        next : products => {
          this.products= products
          this.filteredProducts = this.products;
        },
        error : err => this.errorMessage = err
      });
      
      //this.listFilter='cart'
    }

    onRatingClicked(value :string) :void {
      this.pageTitle = value;
    }

}