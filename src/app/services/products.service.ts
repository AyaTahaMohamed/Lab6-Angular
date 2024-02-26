import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { MyProduct } from '../models/my-product';


@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  private products = [
   
    {
      id: 15,
      title: "BIYLACLESEN Women's 3-in-1 Snowboard Jacket Winter Coats",
      price: 56.99,
      CategoryID: 'Jacket',
      isPurchased: false,
      quantity: 4,
      image: 'https://fakestoreapi.com/img/51Y5NI-I5jL._AC_UX679_.jpg',
      productInCart: 1,
      cardNumber: '123456789123456',
      purchaseDate: new Date(),
    },
    {
      id: 16,
      title:
        "Lock and Love Women's Removable Hooded Faux Leather Moto Biker Jacket",
      price: 29.95,
      CategoryID: 'Jacket',
      isPurchased: false,
      quantity: 4,
      image: 'https://fakestoreapi.com/img/81XH0e8fefL._AC_UY879_.jpg',
      productInCart: 1,
      cardNumber: '123456789123456',
      purchaseDate: new Date(),
    },
    {
      id: 17,
      title: 'Rain Jacket Women Windbreaker Striped Climbing ',
      price: 39.99,
      CategoryID: 'Jacket',
      isPurchased: false,
      quantity: 4,
      image: 'https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2.jpg',
      productInCart: 1,
      cardNumber: '123456789123456',
      purchaseDate: new Date(),
    },
    {
      id: 18,
      title: "MBJ Women's Solid Short Sleeve Boat Neck V ",
      price: 9.85,
      CategoryID: 'shirt',
      isPurchased: false,
      quantity: 4,
      image: 'https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_.jpg',
      productInCart: 1,
      cardNumber: '123456789123456',
      purchaseDate: new Date(),
    },
    {
      id: 19,
      title: "Opna Women's Short Sleeve Moisture",
      price: 7.95,
      CategoryID: 'shirt',
      isPurchased: false,
      quantity: 4,
      image: 'https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_.jpg',
      productInCart: 1,
      cardNumber: '123456789123456',
      purchaseDate: new Date(),
    },
    {
      id: 20,
      title: 'DANVOUY Womens T Shirt Casual Cotton Short',
      price: 12.99,
      CategoryID: 'shirt',
      isPurchased: false,
      quantity: 4,
      image: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg',
      productInCart: 1,
      cardNumber: '123456789123456',
      purchaseDate: new Date(),
    },
  ];
  constructor(private _HttpClient: HttpClient) {}

  getAllProducts(): Iproduct[] {
    return this.products;
  }

  getproductDetails(id: number): Iproduct | undefined {
    return this.products.find((item) => item.id == id);
  }
  getproductByCategory(catid: string) {
    return this.products.filter((item) => item.CategoryID == catid);
  }

  // new//
  getCategories(): Observable<any> {
    return this._HttpClient.get(`http://localhost:3000/categories`);
  }

  addProduct(product: MyProduct): Observable<MyProduct> | undefined {
    return this._HttpClient.post<MyProduct>(
      `http://localhost:3000/products`,
      product
    );
  }
  getProducts(): Observable<MyProduct> | undefined {
    return this._HttpClient.get<MyProduct>(`http://localhost:3000/products`);
  }
  updateProduct(product: any): Observable<any> | undefined {
    return this._HttpClient.put<any>(
      `http://localhost:3000/products/${product.id}`,
      product
    );
  }
  deleteProduct(id: number): Observable<MyProduct> {
    return this._HttpClient.delete<MyProduct>(
      `http://localhost:3000/products/${id}`
    );
  }
}


