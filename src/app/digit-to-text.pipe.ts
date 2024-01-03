import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'digitToText',
})
export class DigitToTextPipe implements PipeTransform {
  transform(num: number | undefined): string {
    if (!num || isNaN(num) || num < 0 || num > 1000000) {
      return 'Invalid input';
    }
    
    if (num == 0) {
      return 'zero'
    }

    let a: string[] = [
      '',
      'one',
      'two',
      'three',
      'four',
      'five',
      'six',
      'seven',
      'eight',
      'nine',
      'ten',
    ];
    let b: string[] = [
      'ten',
      'eleven',
      'twelve',
      'thirteen',
      'fourteen',
      'fifteen',
      'sixteen',
      'seventeen',
      'eighteen',
      'nineteen',
    ];
    let c: string[] = [
      '',
      '',
      'twenty',
      'thirty',
      'forty',
      'fifty',
      'sixty',
      'seventy',
      'eighty',
      'ninety',
    ];

    let n: RegExpMatchArray | null = ('0000000' + num)
      .substr(-7)
      .match(/^(\d{2})(\d{2})(\d{1})(\d{2})$/);

    console.log(n);

    if (!n) {
      return 'Invalid input';
    }
    
    let str: string = '';
    str +=
      n[1] !== '00'
        ? (a[parseInt(n[1])] ||
            c[parseInt(n[1][0])] + ' ' + a[parseInt(n[1][1])]) + ' lakh '
        : '';
    str +=
      n[2] !== '00'
        ? ((parseInt(n[2][0]) == 1 && parseInt(n[2][1]) <= 9)
            ? b[parseInt(n[2][1])]
            : c[parseInt(n[2][0])] + ' ' + a[parseInt(n[2][1])]) + ' thousand '
        : '';

    console.log(parseInt(n[2][0]) + ' value1');
    
    console.log(a[parseInt(n[2][1])] + ' value');

    console.log(c[parseInt(n[2][0])] + ' ' + a[parseInt(n[2][1])]);
    console.log(b[parseInt(n[2][1])]+" valiue2");
    
    

    str +=
      n[3] !== '0'
        ? (a[parseInt(n[3])] ||
            b[parseInt(n[3]) - 10] ||
            c[parseInt(n[3][0])] + ' ' + a[parseInt(n[3][1])]) + ' hundred '
        : '';
    str +=
      n[4] !== '00'
        ? (str !== '' ? 'and ' : '') +
          (a[parseInt(n[4])] ||
            b[parseInt(n[4]) - 10] ||
            c[parseInt(n[4][0])] + ' ' + a[parseInt(n[4][1])]) +
          ''
        : '';

    return str.trim();
  }
}
