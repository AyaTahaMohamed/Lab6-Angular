import { Component, OnInit } from '@angular/core';
import { NewProductComponent } from '../new-product/new-product.component';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-order',
  standalone: true,
  imports: [NewProductComponent],
  templateUrl: './order.component.html',
  styleUrl: './order.component.css',
})
export class OrderComponent implements OnInit {
  constructor(private _ActivatedRoute: ActivatedRoute) {}
  ngOnInit(): void {
    
  }
 
}
