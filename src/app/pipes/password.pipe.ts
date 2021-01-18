import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, ocultar: boolean = true): string {
    let valorNombre: any = value.split('');
   if (ocultar) {
    for (let i = 0; i < valorNombre.length; i++) {
      valorNombre[i] = '*'
    } 
    valorNombre = valorNombre.join('')
    } else {
    valorNombre = valorNombre.join('')
    }
    return valorNombre;
   } 
  }

