export interface Product {
imageCover:string,
category:Category,
title:string,
price:number,
ratingsAverage:number,
id:string,
slug:string,
description:string,
images?:string[],



}

interface Category{
name:string
}