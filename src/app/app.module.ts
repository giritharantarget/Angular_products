import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './home/welcome.component';
import { ProductModule } from './products/product.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule ,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot([
    
      {path : 'welcome', component :WelcomeComponent},
      {path: '', redirectTo:'welcome', pathMatch :'full'}
    ]),
    ProductModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
