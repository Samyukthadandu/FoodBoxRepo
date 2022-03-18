import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterpipe',
  pure: false
})
export class FilterpipePipe implements PipeTransform {

  transform(value: any[], filterString: string,propname:string) {
    if (value.length === 0 || filterString === ''||propname ==="") {
      return value;
    }

    const products = [];
    for (const product of value) {
      if (product[propname] === filterString) {
        products.push(product);
      }
    }
    return products;
  }

}
