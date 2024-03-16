import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-highlight',
  templateUrl: './highlight.component.html',
  styleUrls: ['./highlight.component.scss']
})
export class HighlightComponent {
  @Input() title: string = '';
  @Input() paragraph: string = '';
  @Input() imageUrl: string = '';
  @Input() reverseStyle: boolean = false;  
}
