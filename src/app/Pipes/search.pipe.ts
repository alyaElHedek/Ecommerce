import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../Components/Interface/product';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(allProducts:Product[], searchInput: string): Product[] {
    return allProducts.filter((element) => element.title.toLowerCase().includes(searchInput.toLowerCase())) ;
  }

}
