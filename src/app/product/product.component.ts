import { Component, OnInit } from '@angular/core';
import {Product} from '../models/product.model';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent  {

  products:Product[]=[{
    productTitle:"Nike Air Force 1 Pixel",
    description:"Midsole height: 43mm",
    description1:"Colour Shown: Summit White/Summit White/Summit White/Rust Pink",
    productImage:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/dedc66c2-3e85-40e7-b41e-c01fa03a4e58/air-force-1-pixel-shoe-pXxb69.png",
  },
  {
    productTitle:"Nike Blazer Mid '77 SE",
    description:"Colour Shown: White/White/Light Sienna",
    description1:"Mid-top, padded collar adds support and comfort",
    productImage:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/84ef5c49-33bf-4e0c-90c8-56e2786bcfaa/blazer-mid-77-se-shoe-dLVZSj.png",
  },
  {
    productTitle:"Nike Offcourt SE",
    description:"Colour Shown: Pearl White/Pearl White",
    description1:"Soft strap and binding on the upper foot for comfort",
    productImage:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/21528973-7fe4-43af-a6e2-b8298b9cc928/offcourt-se-slide-Z5jr3M.png",
  },
  {
    productTitle:"Nike Free Metcon 4",
    description:"Colour Shown: Desert Sand/Crimson Bliss/Summit White/Metallic Copper",
    description1:"Style: DJ3075-064",
    productImage:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/c45a1b61-14f4-4bc4-97d8-551f46a08ac4/free-metcon-4-training-shoe-Xj1GPK.png",
  },
  {
    productTitle:"Nike Offcourt",
    description:"Colour Shown: Sail/Canyon Rust/Rust Pink",
    description1:"The soft strap and binding on the upper foot for comfort",
    productImage:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/5e09b0f4-16c3-4053-ae6c-96a8589e2269/offcourt-slide-kJDhS7.png",
  },
  {
    productTitle:"Nike Air Force 1 '07 Essential",
    description:"The stitched leather overlays on the upper add heritage style, durability and support",
    description1:"Colour Shown: Black",
    productImage:"https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f1d7a6e8-3ed2-4014-99b5-13f9a8ec56b3/air-force-1-07-essential-shoe-V4G9F0.png",
  }];

  productSentByChild=[];
  productCount:number=0;
  getProductDetailsFromChild(productTitle){
    this.productSentByChild.push(productTitle)
    this.productCount++;

  }
}
