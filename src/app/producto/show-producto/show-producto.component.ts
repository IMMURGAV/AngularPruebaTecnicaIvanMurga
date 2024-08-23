import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiserviceService } from 'src/app/apiservice.service';

@Component({
  selector: 'app-show-producto',
  templateUrl: './show-producto.component.html',
  styleUrls: ['./show-producto.component.css']
})
export class ShowProductoComponent implements OnInit {
  productoList$!:Observable<any[]>;

  constructor(private service:ApiserviceService) { }

  ngOnInit(): void {
    this.productoList$ = this.service.getProductoList();

    //var showUpdateSuccess = document.getElementById()
  }

  //modalTitle

}
