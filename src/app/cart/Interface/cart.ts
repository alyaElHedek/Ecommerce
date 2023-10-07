export interface Cart {

    numOfCartItems?:number,
    data?:Data


}

interface Data{
    totalCartPrice:number,
    products:Product[],
    _id:string
}

interface Product{
count:number,
price:number,
product:productOfProducts
}

interface productOfProducts{
title:string,
imageCover:string,
category:Category,
id:string
}

interface Category{
    name:string
}

