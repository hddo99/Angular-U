import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convert'
})
export class ConvertPipe implements PipeTransform {

  transform(value: any, targetUnits: string): any {
    const toKm = value * 1.60934;
    if (!value) return '';
    switch (targetUnits) {
      case 'km':
        return toKm;
      case 'm':
        return toKm * 1000;
      case 'cm':
        return toKm * 1000 * 1000;
      default:
        throw new Error('Target unit not supported');
    }
  }
}
