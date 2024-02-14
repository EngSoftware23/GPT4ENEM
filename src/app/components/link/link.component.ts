import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-link',
  standalone: false,
  templateUrl: './link.component.html',
  styleUrls: ['./link.component.scss']
})
export class LinkComponent {

  @Input() linkUrl: string = '';
  @Input() linkText: string = '';
}
