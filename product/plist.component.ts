import { Component } from '@angular/core';
import { Product } from '../product.module';
import { ProductService } from '../product.service';

@Component({
    selector:"plist",
    templateUrl:"./plist.component.html",
    styleUrls:["plist.component.css"]
})

export class PlistComponent{

    constructor(private pservice:ProductService){

    }

    itemname!:string;
    quantity!:number;
    price!:number;
    desc!:string;

    addProduct(){
        let p=new Product(this.itemname,this.quantity,this.price,this.desc);
        console.log(p);
        this.pservice.addProduct(p);
        this.itemname="";
        this.quantity=0;
        this.price=0;
        this.desc="";
    }

}