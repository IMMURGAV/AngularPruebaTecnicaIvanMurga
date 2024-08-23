import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  

import { AppComponent } from './app.component';
import { ProductoComponent } from './producto/producto.component';
import { AddEditProductoComponent } from './producto/add-edit-producto/add-edit-producto.component';
import { ShowProductoComponent } from './producto/show-producto/show-producto.component';

import { ApiserviceService} from 'src/app/apiservice.service'

@NgModule({
  declarations: [
    AppComponent,
    ProductoComponent,
    AddEditProductoComponent,
    ShowProductoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ApiserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
