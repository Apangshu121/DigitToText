import { Component } from '@angular/core';
import { DigitToTextPipe } from '../digit-to-text.pipe';

@Component({
  selector: 'app-digit-to-text',
  templateUrl: './digit-to-text.component.html',
  styleUrl: './digit-to-text.component.scss'
})
export class DigitToTextComponent {
  inputValue: number | undefined;
  outputText: string | undefined;

}
