import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-service-form',
  templateUrl: './service-form.component.html',
  styleUrls: ['./service-form.component.scss']
})
export class ServiceFormComponent {

  formulario: FormGroup;

  constructor(private fb: FormBuilder) { 
    this.formulario = this.fb.group({
      linkUrl: ['', [Validators.required]]
    });
  }

 
  selectedItemIndex: number | null = null;

  onItemClick(index: number): void {
    this.selectedItemIndex = index;
  }

  inviteData() {
    console.log(this.selectedItemIndex)
    console.log(this.formulario.value.linkUrl);
    
  }
}
