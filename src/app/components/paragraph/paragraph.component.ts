import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-paragraph',
  standalone: false,
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.scss']
})
export class ParagraphComponent {

  @Input() text:string = "";
  @Input() alignText:string ="";
  @Input() color:string = "";
}
