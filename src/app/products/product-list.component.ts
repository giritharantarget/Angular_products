import { Component, OnInit } from "@angular/core";
import { IProduct } from "./IProduct";

@Component({
    selector : 'pm-products',
    templateUrl : './product-list.html',
    styleUrls : ['./product-list.component.css']
})


export class ProductListComponent implements OnInit {
  
    
    pageTitle :String = 'Product List';
    showImage : boolean = false;

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

    products : IProduct[] = [
      {
        "productId": 1,
        "productName": "Leaf Rake",
        "productCode": "GDN-0011",
        "releaseDate": "March 19, 2021",
        "description": "Leaf rake with 48-inch wooden handle.",
        "price": 19.95,
        "starRating": 3.2,
        "imageUrl": "assets/images/leaf_rake.png"
      },
      {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2021",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "assets/images/garden_cart.png"
      }
    ];


    toggleImage () : void {
      console.log(this.showImage)
      this.showImage = !this.showImage;
    }

    ngOnInit(): void {
      console.log("On Init method called")
      this.listFilter='cart'
    }

}