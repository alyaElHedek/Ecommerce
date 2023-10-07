export interface WishList {
    count: number,
    data: Data[],

}
interface Data {
    price:number,
    imageCover:string,
    title:string,
    _id:string
}

