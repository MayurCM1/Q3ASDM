import { Injectable } from '@angular/core';
import { Product } from './product.module';

@Injectable()
export class ProductService{
    parr=[
        new Product("Table",10,300,"new style Design"),
        new Product("Chair",20,200," Good quality"),
        new Product("Door",30,100,"new italic design")
    ];
    addProduct(p:Product){
        this.parr.push(p);
    }
}