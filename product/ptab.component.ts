import { Component } from '@angular/core';
import { Product } from '../product.module';
import { ProductService } from '../product.service';

@Component({
    selector:"ptab",
    templateUrl:"./ptab.component.html",
    styleUrls:["./ptab.component.css"]
})

export class PtabComponent{

    parr!:Product[];

    constructor(private pservice:ProductService){

    }

    flag=false;
    displayForm(){
        this.flag=true;
    }
}