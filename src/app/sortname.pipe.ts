import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortname'
})
export class SortnamePipe implements PipeTransform {

  transform(value: any[],args?: any): any {
    return value.sort((a,b)=>{
      let x=a.FirstName.toLowerCase();
      let y=b.FirstName.toLowerCase();
      if(x<y)
      {
        return -1;
      }
      else
      {
        return 1;
      }
      return 0;
    })
  }

}
